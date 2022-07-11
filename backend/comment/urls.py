from django.urls import path

from .views import CreateCommentView, ListDeleteCommentsView

urlpatterns = [
    path('new/<int:review_id>/', CreateCommentView.as_view()),
    path('<int:id>/', ListDeleteCommentsView.as_view()),
]
