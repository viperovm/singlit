from rest_framework import serializers
from .models import Services


class ServicesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Services
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
            'img_alt',
            'img'
        )
