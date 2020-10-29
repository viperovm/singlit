from rest_framework import serializers
from .models import PageSeo, News


class PageSeoSerializer(serializers.ModelSerializer):

    class Meta:
        model = PageSeo
        exclude = ('id',)


class NewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = News
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
