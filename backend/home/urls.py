from django.urls import path

from .views import ListBestRatedRestaurantsView

urlpatterns = [
    path('', ListBestRatedRestaurantsView.as_view()),
]
