from django.contrib.auth.models import BaseUserManager, Group
from django.db import models


class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **other_fields):
        if not email:
            raise ValueError('Please provide an email address')
        if not username:
            raise ValueError('Please provide a username')
        if not password:
            raise ValueError('Please provide a password')

        user = self.model(email=self.normalize_email(email),
                          username=username, **other_fields)
        user.set_password(password)
        user.save(using=self._db)

        try:
            group = Group.objects.get(name='Staff')
        except:
            group = Group.objects.create(name='Staff')

        user.groups.add(group)
        return user

    def create_superuser(self, email, username, password=None, **other_fields):
        user = self.create_user(email, username, password, **other_fields)
        user.is_superuser = True
        user.save(using=self._db)
        return user


class CustomerManager(models.Manager):
    def create_user(self, email, username, password=None, **other_fields):
        if not email:
            raise ValueError('Please provide an email address')
        if not username:
            raise ValueError('Please provide a username')
        if not password:
            raise ValueError('Please provide a password')

        user = self.model(email=email.lower().strip(),
                          username=username, **other_fields)
        user.set_password(password)
        user.is_staff = False
        user.save(using=self._db)

        try:
            group = Group.objects.get(name='Customer')
        except:
            group = Group.objects.create(name='Customer')

        if user.pk:
            user.groups.add(group)

        return user

    def get_queryset(self) -> models.QuerySet:
        return super().get_queryset().filter(type='CUSTOMER')


class StaffManager(models.Manager):
    def create_user(self, email, username, password=None, **other_fields):
        if not email:
            raise ValueError('Please provide an email address')
        if not username:
            raise ValueError('Please provide a username')
        if not password:
            raise ValueError('Please provide a password')

        user = self.model(email=email.lower().strip(),
                          username=username, **other_fields)
        user.set_password(password)
        user.save(using=self._db)

        try:
            group = Group.objects.get(name='Staff')
        except:
            group = Group.objects.create(name='Staff')

        if user.pk:
            user.groups.add(group)

        return user

    def get_queryset(self) -> models.QuerySet:
        return super().get_queryset().filter(type='STAFF')
