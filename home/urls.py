from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import PageSeoView, IntroView, ServicesSectionView, ProsSectionView, ProsElementsView, QuoteView, ReviewsSectionView, NumbersView, NumbersElementsView, RequestSectionView, RequestView


router = routers.DefaultRouter()
router.register('page_seo', PageSeoView)
router.register('intro', IntroView)
router.register('services_section', ServicesSectionView)
router.register('pros_section', ProsSectionView)
router.register('pros_elements', ProsElementsView)
router.register('quote', QuoteView)
router.register('reviews_section', ReviewsSectionView)
router.register('numbers', NumbersView)
router.register('numbers_elements', NumbersElementsView)
router.register('request_section', RequestSectionView)
router.register('request', RequestView)

urlpatterns = [
    path('home/', include(router.urls)),
]
