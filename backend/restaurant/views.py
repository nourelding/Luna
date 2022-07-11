from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from .models import RestaurantModel

from .serializers import RestaurantSerializer, CreateRestaurantSerializer


class CreateRestaurantView(CreateAPIView):
    queryset = RestaurantModel.objects.all()
    serializer_class = CreateRestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ListRestaurantsView(ListAPIView):
    queryset = RestaurantModel.objects.all()
    permission_classes = []
    serializer_class = RestaurantSerializer


class RetrieveUpdateDestroyRestaurantView(RetrieveUpdateDestroyAPIView):
    queryset = RestaurantModel.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'restaurant_id'

    def put(self, request, *args, **kwargs):
        return Response(status=405, data="Use 'PATCH' to update restaurant")


class SearchRestaurantsView(ListAPIView):
    queryset = RestaurantModel.objects.all()
    serializer_class = RestaurantSerializer

    def list(self, request, *args, **kwargs):
        category_id = self.kwargs['category_id']
        queryset = self.queryset.filter(category=category_id)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListRestaurantsCreatedByUserView(ListAPIView):
    queryset = RestaurantModel.objects.all()
    serializer_class = RestaurantSerializer

    def list(self, request, *args, **kwargs):
        user_id = self.kwargs['user_id']
        queryset = self.queryset.filter(user_id=user_id)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
