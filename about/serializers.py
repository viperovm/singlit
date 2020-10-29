from rest_framework import serializers
from .models import PageSeo, About


class PageSeoSerializer(serializers.ModelSerializer):

    class Meta:
        model = PageSeo
        exclude = ('id',)


class AboutSerializer(serializers.ModelSerializer):

    class Meta:
        model = About
        fields = ('title', 'subtitle', 'content', 'img_alt', 'imageURL')
