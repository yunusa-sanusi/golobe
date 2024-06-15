from collections.abc import Callable, Sequence
from typing import Any
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.db.models.fields.related import RelatedField
from django.db.models.query import QuerySet
from django.http import HttpRequest

from .models import User, CustomerProfile, StaffProfile


class StaffProfileInline(admin.StackedInline):
    model = StaffProfile


class CustomUserAdmin(UserAdmin):
    list_display = ['username', 'email',
                    'is_active', 'is_staff', 'is_superuser', 'type']
    ordering = ['first_name', 'last_name', 'username']
    search_fields = ['first_name', 'last_name', 'username', 'email']
    fieldsets = (
        ('Basic Information', {'fields': ['email', 'username', 'password']}),
        ('User Information', {
         'fields': [('first_name', 'last_name'), 'phone_number', 'address']}),
        ('User Types & Groups', {
         'fields': ['groups', 'type', 'is_superuser', 'is_staff', 'is_active']}),
        ('Permissions', {'fields': ['user_permissions']})
    )
    inlines = [StaffProfileInline]

    add_fieldsets = (
        (None, {'classes': ['wide'], 'fields': (('first_name', 'last_name'), 'email',
         'username', 'password1', 'password2', 'is_superuser', 'is_staff', 'is_active', 'groups')}),
    )

    def get_queryset(self, request: HttpRequest) -> QuerySet[Any]:
        qs = super().get_queryset(request)

        if request.user.is_superuser:
            return qs
        return qs.filter(username=request.user.username)


admin.site.register(User, CustomUserAdmin)
admin.site.register(CustomerProfile)
admin.site.register(StaffProfile)
