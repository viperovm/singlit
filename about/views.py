from django.shortcuts import render
from rest_framework import viewsets
from .models import PageSeo, About
from .serializers import PageSeoSerializer, AboutSerializer


class PageSeoView(viewsets.ReadOnlyModelViewSet):
    queryset = PageSeo.objects.all()
    serializer_class = PageSeoSerializer


class AboutView(viewsets.ReadOnlyModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer
