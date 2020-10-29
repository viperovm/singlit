from django.shortcuts import render
from rest_framework import viewsets
from .models import PageSeo, Intro, ServicesSection, Pros, ProsElements, Quote, ReviewsSection, Numbers, NumbersElements, RequestSection, Request
from .serializers import PageSeoSerializer, IntroSerializer, ServicesSectionSerializer, ProsSerializer, ProsElementsSerializer, QuoteSerializer, ReviewsSectionSerializer, NumbersSerializer, NumbersElementsSerializer, RequestSectionSerializer, RequestSerializer


class PageSeoView(viewsets.ReadOnlyModelViewSet):
    queryset = PageSeo.objects.all()
    serializer_class = PageSeoSerializer


class IntroView(viewsets.ReadOnlyModelViewSet):
    queryset = Intro.objects.all()
    serializer_class = IntroSerializer


class ServicesSectionView(viewsets.ReadOnlyModelViewSet):
    queryset = ServicesSection.objects.all()
    serializer_class = ServicesSectionSerializer


class ProsSectionView(viewsets.ReadOnlyModelViewSet):
    queryset = Pros.objects.all()
    serializer_class = ProsSerializer


class ProsElementsView(viewsets.ReadOnlyModelViewSet):
    queryset = ProsElements.objects.all()
    serializer_class = ProsElementsSerializer


class QuoteView(viewsets.ReadOnlyModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer


class ReviewsSectionView(viewsets.ReadOnlyModelViewSet):
    queryset = ReviewsSection.objects.all()
    serializer_class = ReviewsSectionSerializer


class NumbersView(viewsets.ReadOnlyModelViewSet):
    queryset = Numbers.objects.all()
    serializer_class = NumbersSerializer


class NumbersElementsView(viewsets.ReadOnlyModelViewSet):
    queryset = NumbersElements.objects.all()
    serializer_class = NumbersElementsSerializer


class RequestSectionView(viewsets.ReadOnlyModelViewSet):
    queryset = RequestSection.objects.all()
    serializer_class = RequestSectionSerializer


class RequestView(viewsets.ReadOnlyModelViewSet):
    queryset = Request.objects.all()
    serializer_class = RequestSerializer







