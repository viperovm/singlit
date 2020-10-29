from django.shortcuts import render
from rest_framework import viewsets
from .models import PageSeo, Reviews
from .serializers import PageSeoSerializer, ReviewsSerializer


class PageSeoView(viewsets.ReadOnlyModelViewSet):
    queryset = PageSeo.objects.all()
    serializer_class = PageSeoSerializer


class ReviewsView(viewsets.ReadOnlyModelViewSet):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer
