from django.urls import path

from .views import ListRestaurantsView, CreateRestaurantView, RetrieveUpdateDestroyRestaurantView, \
    ListRestaurantsCreatedByUserView, SearchRestaurantsView

urlpatterns = [
    path('', ListRestaurantsView.as_view()),
    path('new/', CreateRestaurantView.as_view()),
    path('<int:restaurant_id>/', RetrieveUpdateDestroyRestaurantView.as_view()),
    path('category/<int:category_id>/', SearchRestaurantsView.as_view()),
    path('user/<int:user_id>/', ListRestaurantsCreatedByUserView.as_view()),
]
