"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework import permissions

from rest_framework_simplejwt import views as jwt_views

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Luna",
        default_version='v1',
        description="Yelp Clone",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="learn@propulsionacademy.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,  # Set to False restrict access to protected endpoints
    permission_classes=(permissions.AllowAny,),  # Permissions for docs access
)

urlpatterns = [
    # Admin and Swagger
    path('backend/admin/', admin.site.urls),
    path('backend/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),

    # App Urls
    path('backend/api/registration/', include('registration_profile.urls')),
    path('backend/api/', include('users.urls')),
    path('backend/api/restaurants/', include('restaurant.urls')),
    path('backend/api/category/list/', include('category.urls')),
    path('backend/api/reviews/', include('review.urls')),
    path('backend/api/review/comment/', include('comment.urls')),
    path('backend/api/home/', include('home.urls')),

    # JWT
    path('backend/api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),

]
