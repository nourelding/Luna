from rest_framework import serializers

from .models import RestaurantModel

from users.serializers import UserProfileSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer()

    class Meta:
        model = RestaurantModel
        fields = '__all__'


class CreateRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantModel
        fields = '__all__'
