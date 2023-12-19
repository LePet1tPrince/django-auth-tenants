from . import views
from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    # path('api-auth/', include('rest_framework.urls'))
    path('register/', views.register)
]