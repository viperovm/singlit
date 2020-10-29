from django.shortcuts import render
from rest_framework import viewsets
from .models import Services
from .serializers import ServicesSerializer


class ServicesView(viewsets.ReadOnlyModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer
