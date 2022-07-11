from django.contrib.auth import get_user_model
from django.db import models

from review.models import ReviewModel
UserModel = get_user_model()


def get_sentinel_user():
    return get_user_model().objects.get_or_create(username='deleted')[0]


class CommentModel(models.Model):
    review = models.ForeignKey(to=ReviewModel, on_delete=models.CASCADE, related_name='comments', blank=True)
    user = models.ForeignKey(to=UserModel, on_delete=models.SET(get_sentinel_user), related_name='comments', blank=True)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    likes = models.PositiveIntegerField(blank=True, null=True)

    def __str__(self):
        return f"Comment id: {self.id} | Comment for ({self.review})"
