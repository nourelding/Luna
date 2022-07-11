from django.urls import path

from .views import RetrieveUpdateMeView, ListUsersView, RetrieveUserView, SearchUserView

urlpatterns = [
    path('me/', RetrieveUpdateMeView.as_view()),
    path('users/list/', ListUsersView.as_view()),
    path('users/<int:user_id>/', RetrieveUserView.as_view()),
    path('users/', SearchUserView.as_view()),
]
