from django.contrib.auth import get_user_model
from django.db import models

from category.models import CategoryModel
UserModel = get_user_model()

PRICE_LEVEL_CHOICES = (
    ("$", "$"),
    ("$$", "$$"),
    ("$$$", "$$$"),
    ("$$$$", "$$$$"),
)


class RestaurantModel(models.Model):
    user = models.ForeignKey(to=UserModel, on_delete=models.CASCADE, related_name='owner', blank=True)
    name = models.CharField(max_length=150)
    category = models.ForeignKey(to=CategoryModel, on_delete=models.PROTECT)
    country = models.CharField(max_length=150)
    street = models.CharField(max_length=150)
    city = models.CharField(max_length=150)
    zip = models.CharField(max_length=150)
    website = models.URLField(blank=True, null=True)
    phone = models.CharField(max_length=150, blank=True)
    email = models.CharField(max_length=150, blank=True)
    opening_hours = models.CharField(max_length=150)
    price_level = models.CharField(max_length=4, choices=PRICE_LEVEL_CHOICES)
    image = models.ImageField(blank=True, null=True)

    def __str__(self):
        return f"Restaurant id: {self.id} | Name: {self.name}"
