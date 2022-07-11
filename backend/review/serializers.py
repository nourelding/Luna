from rest_framework.serializers import ModelSerializer

from .models import ReviewModel

from users.serializers import UserProfileSerializer
from restaurant.serializers import RestaurantSerializer


class ReviewSerializer(ModelSerializer):
    user = UserProfileSerializer()
    restaurant = RestaurantSerializer()

    class Meta:
        model = ReviewModel
        fields = '__all__'


class CreateReviewSerializer(ModelSerializer):
    class Meta:
        model = ReviewModel
        fields = '__all__'
