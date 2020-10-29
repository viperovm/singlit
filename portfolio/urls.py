from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import PageSeoView, PortfolioPageView, PortfolioView


router = routers.DefaultRouter()
router.register('page_seo', PageSeoView)
router.register('page', PortfolioPageView)
router.register('', PortfolioView)

urlpatterns = [
    path('portfolio/', include(router.urls)),
]
