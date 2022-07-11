from django.contrib.auth import get_user_model
from django.db import models

from restaurant.models import RestaurantModel
UserModel = get_user_model()

RATING_CHOICES = (
    ("1", "1"),
    ("2", "2"),
    ("3", "3"),
    ("4", "4"),
    ("5", "5"),
)


def get_sentinel_user():
    return get_user_model().objects.get_or_create(username='deleted')[0]


class ReviewModel(models.Model):
    content = models.TextField()
    rating = models.CharField(max_length=1, choices=RATING_CHOICES)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=UserModel, on_delete=models.SET(get_sentinel_user), related_name='reviews', blank=True)
    user_likes = models.ManyToManyField(to=UserModel, related_name='liked_reviews', blank=True)
    restaurant = models.ForeignKey(to=RestaurantModel, on_delete=models.CASCADE, related_name='reviews', blank=True)

    def __str__(self):
        return f"Review id: {self.id}"
