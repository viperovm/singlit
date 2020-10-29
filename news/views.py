from django.shortcuts import render
from rest_framework import viewsets
from .models import PageSeo, News
from .serializers import PageSeoSerializer, NewsSerializer


class PageSeoView(viewsets.ReadOnlyModelViewSet):
    queryset = PageSeo.objects.all()
    serializer_class = PageSeoSerializer


class NewsView(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
