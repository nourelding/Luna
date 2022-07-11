from rest_framework.generics import ListAPIView

from .models import CategoryModel
from .serializers import CategorySerializer


class ListCategoriesView(ListAPIView):
    queryset = CategoryModel.objects.all()
    serializer_class = CategorySerializer
    permission_classes = []
