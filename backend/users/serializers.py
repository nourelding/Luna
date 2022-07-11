from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer

UserModel = get_user_model()


class RegisterUserSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['email']


class ValidateUserSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['username', 'password', 'email', 'first_name', 'last_name', 'location', 'phone']
        # TODO Write custom validation. Required validation doesn't work because request sends empty string.
        extra_kwargs = {
            'username': {'required': True},
            'password': {'required': True},
            'email': {'required': True},
        }


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
