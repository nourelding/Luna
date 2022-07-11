from django.contrib.auth.models import AbstractUser
from django.db import models


def anything(instance, filename):
    return f'{instance.id}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    username = models.CharField(max_length=150, blank=True)
    password = models.CharField("password", max_length=128, blank=True)
    email = models.EmailField(unique=True)
    avatar = models.ImageField(upload_to=anything, blank=True, null=True)
    location = models.CharField(max_length=150, blank=True)
    phone = models.CharField(max_length=150, blank=True)
    loved_things = models.CharField(max_length=150, blank=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.username
