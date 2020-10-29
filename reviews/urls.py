from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import PageSeoView, ReviewsView


router = routers.DefaultRouter()
router.register('page_seo', PageSeoView)
router.register('', ReviewsView)

urlpatterns = [
    path('reviews/', include(router.urls)),
]
