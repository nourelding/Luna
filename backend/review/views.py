from django.contrib.auth import get_user_model

from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.response import Response

from .models import ReviewModel
from restaurant.models import RestaurantModel
UserModel = get_user_model()

from .serializers import ReviewSerializer, CreateReviewSerializer


class CreateReviewView(CreateAPIView):
    queryset = ReviewModel.objects.all()
    serializer_class = CreateReviewSerializer

    def perform_create(self, serializer):
        restaurant_id = self.kwargs['restaurant_id']
        restaurant = RestaurantModel.objects.get(id=restaurant_id)
        # TODO implement check so user cannot write multiple reviews for one restaurant.
        serializer.save(user=self.request.user, restaurant=restaurant)


class ListRestaurantReviewsView(ListAPIView):
    serializer_class = ReviewSerializer

    def list(self, request, *args, **kwargs):
        restaurant_id = self.kwargs['restaurant_id']
        queryset = RestaurantModel.objects.get(id=restaurant_id).reviews

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListUserReviewsView(ListAPIView):
    serializer_class = ReviewSerializer

    def list(self, request, *args, **kwargs):
        user_id = self.kwargs['user_id']
        queryset = UserModel.objects.get(id=user_id).reviews

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class RetrieveUpdateDestroyReviewView(RetrieveUpdateDestroyAPIView):
    queryset = ReviewModel.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'

    def put(self, request, *args, **kwargs):
        return Response(status=405, data="Use 'PATCH' to update review")


class LikeUnlikeReviewView(GenericAPIView):

    def post(self, request, *args, **kwargs):
        review_id = self.kwargs['review_id']
        review = ReviewModel.objects.get(id=review_id)
        user_instance = self.request.user
        user_likes = ReviewModel.objects.filter(user_likes=user_instance.id)

        if review not in user_likes:
            review.user_likes.add(user_instance)
            return Response(status=200)
        else:
            return Response(status=400, data="User instance already liked the specified review!")

    def delete(self, request, *args, **kwargs):
        review_id = self.kwargs['review_id']
        review = ReviewModel.objects.get(id=review_id)
        user_instance = self.request.user
        user_likes = ReviewModel.objects.filter(user_likes=user_instance.id)

        if review in user_likes:
            review.user_likes.remove(user_instance)
            return Response(status=200)
        else:
            return Response(status=400, data="User instance hasn't liked the specified review!")


class ListUserLikedReviews(ListAPIView):
    queryset = ReviewModel.objects.all()
    serializer_class = ReviewSerializer

    def list(self, request, *args, **kwargs):
        user_instance = self.request.user
        queryset = self.get_queryset().filter(user_likes=user_instance)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListReviewsView(ListAPIView):
    queryset = ReviewModel.objects.all()
    serializer_class = ReviewSerializer

# TODO Implement: Get the list of the reviews the current user commented.
