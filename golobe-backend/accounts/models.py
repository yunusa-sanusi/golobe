from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _

from .managers import CustomerManager, StaffManager, UserManager


class User(AbstractBaseUser, PermissionsMixin):
    class Types(models.TextChoices):
        CUSTOMER = 'CUSTOMER', 'Customer'
        STAFF = 'STAFF', 'Staff'

    base_type = Types.STAFF

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20)
    dob = models.DateField(_('Date of Birth'), null=True, blank=True)
    address = models.CharField(max_length=200)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    type = models.CharField(
        max_length=20, choices=Types.choices, default=Types.STAFF)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self) -> str:
        return self.username


class Customer(User):
    base_type = User.Types.CUSTOMER
    objects = CustomerManager()

    class Meta:
        proxy = True

    def save(self, **kwargs):
        if not self.pk:
            self.type = self.base_type
        return super().save(**kwargs)


class Staff(User):
    base_type = User.Types.STAFF
    objects = StaffManager()

    class Meta:
        proxy = True

    def save(self, **kwargs):
        if not self.pk:
            self.type = self.base_type
        return super().save(**kwargs)
