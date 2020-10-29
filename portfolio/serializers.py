from rest_framework import serializers
from .models import PageSeo, PortfolioPage, Portfolio, PortfolioImage


class PageSeoSerializer(serializers.ModelSerializer):

    class Meta:
        model = PageSeo
        exclude = ('id',)


class PortfolioPageSerializer(serializers.ModelSerializer):

    class Meta:
        model = PortfolioPage
        fields = (
            'title',
            'subtitle',
            'content',
            'img_alt',
            'imageURL',
            'is_published'
        )


class PortfolioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Portfolio
        fields = (
            'id',
            'page_title',
            'page_description',
            'og_title',
            'og_description',
            'og_url',
            'og_image',
            'og_type',
            'meta1',
            'title',
            'subtitle',
            'slug',
            'content',
            'created_at',
            'updated_at',
            'img_alt',
            'imageURL',
            'is_published'
        )


class PortfolioImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = PortfolioImage
        fields = ('imageURL', )
