from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import PageSeoView, NewsView


router = routers.DefaultRouter()
router.register('page_seo', PageSeoView)
router.register('', NewsView)

urlpatterns = [
    path('news/', include(router.urls)),
]
