from django.urls import path

from . import views

urlpatterns = [
    path('staffs', views.Staffs.as_view(), name='staffs'),
    path('customers', views.Customers.as_view(), name='customers'),
    path('staffs/<slug:slug>', views.Staff.as_view(), name='staff'),
    path('customers/<slug:slug>',
         views.Customer.as_view(), name='customer'),
]
