from rest_framework import serializers
from .models import PageSeo, Reviews


class PageSeoSerializer(serializers.ModelSerializer):

    class Meta:
        model = PageSeo
        exclude = ('id',)


class ReviewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reviews
        fields = (
            'id',
            'name',
            'content',
            'created_at',
            'img_alt',
            'imageURL',
            'modal',
        )
