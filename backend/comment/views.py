from rest_framework.generics import CreateAPIView, DestroyAPIView, ListAPIView
from rest_framework.response import Response

from .models import CommentModel
from review.models import ReviewModel

from .serializers import CreateCommentSerializer, CommentSerializer


class CreateCommentView(CreateAPIView):
    queryset = CommentModel.objects.all()
    serializer_class = CreateCommentSerializer

    def perform_create(self, serializer):
        review_id = self.kwargs['review_id']
        review = ReviewModel.objects.get(id=review_id)
        serializer.save(user=self.request.user, review=review)


class ListDeleteCommentsView(ListAPIView, DestroyAPIView):
    queryset = CommentModel.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'id'

    def list(self, request, *args, **kwargs):
        user_id = self.kwargs['id']
        queryset = self.filter_queryset(self.get_queryset().filter(user=user_id))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
