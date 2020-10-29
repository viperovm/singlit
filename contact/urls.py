from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import PageSeoView, ContactView, HomeContactView


router = routers.DefaultRouter()
router.register('page_seo', PageSeoView)
# router.register('contact_page', ContactView)
# router.register('home_page', HomeContactView)

urlpatterns = [
    path('contact/', include(router.urls)),
]
