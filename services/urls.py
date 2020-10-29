from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import ServicesView


router = routers.DefaultRouter()
router.register('', ServicesView)

urlpatterns = [
    path('services/', include(router.urls)),
]
