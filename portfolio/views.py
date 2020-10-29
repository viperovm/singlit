from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import PageSeo, PortfolioPage, Portfolio, PortfolioImage
from .serializers import PageSeoSerializer, PortfolioPageSerializer, PortfolioSerializer, PortfolioImageSerializer


class PageSeoView(viewsets.ReadOnlyModelViewSet):
    queryset = PageSeo.objects.all()
    serializer_class = PageSeoSerializer


class PortfolioPageView(viewsets.ReadOnlyModelViewSet):
    queryset = PortfolioPage.objects.all()
    serializer_class = PortfolioPageSerializer


class PortfolioView(viewsets.ReadOnlyModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

    @action(detail=True, methods=['GET'])
    def get_portfolio(self, request, pk):
        queryset_page = Portfolio.objects.get(id=pk)
        serializer_page = PortfolioSerializer(queryset_page, many=False)
        queryset_img = PortfolioImage.objects.filter(portfolio_id=pk)
        serializer_img = PortfolioImageSerializer(queryset_img, many=True)
        response = {'page': serializer_page.data, 'images': serializer_img.data}
        print(serializer_img.data)
        print(response)
        return Response(response, status.HTTP_200_OK)
