from django.urls import path

from .views import CreateReviewView, ListRestaurantReviewsView, ListUserReviewsView, RetrieveUpdateDestroyReviewView, \
    LikeUnlikeReviewView, ListUserLikedReviews, ListReviewsView


urlpatterns = [
    path('new/<int:restaurant_id>/', CreateReviewView.as_view()),
    path('restaurant/<int:restaurant_id>/', ListRestaurantReviewsView.as_view()),
    path('user/<int:user_id>/', ListUserReviewsView.as_view()),
    path('<int:review_id>/', RetrieveUpdateDestroyReviewView.as_view()),
    path('like/<int:review_id>/', LikeUnlikeReviewView.as_view()),
    path('likes/', ListUserLikedReviews.as_view()),
    path('', ListReviewsView.as_view()),
]
