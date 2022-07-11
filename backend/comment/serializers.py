from rest_framework.serializers import ModelSerializer

from .models import CommentModel

from users.serializers import UserProfileSerializer
from review.serializers import ReviewSerializer


class CreateCommentSerializer(ModelSerializer):
    class Meta:
        model = CommentModel
        fields = ['review', 'content', 'likes', 'user']


class CommentSerializer(ModelSerializer):
    user = UserProfileSerializer()

    class Meta:
        model = CommentModel
        fields = '__all__'
