from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Customer, Staff, User, CustomerProfile, StaffProfile


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, created, **kwargs):
    if created and instance.type == 'STAFF':
        StaffProfile.objects.create(user=instance)


@receiver(post_save, sender=Customer)
def save_customer_profile(sender, instance, created, **kwargs):
    if created and instance.type == 'CUSTOMER':
        CustomerProfile.objects.create(user=instance)


@receiver(post_save, sender=Staff)
def save_staff_profile(sender, instance, created, **kwargs):
    if created and instance.type == 'STAFF':
        StaffProfile.objects.create(user=instance)
