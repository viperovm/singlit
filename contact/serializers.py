from rest_framework import serializers
from .models import PageSeo


class PageSeoSerializer(serializers.ModelSerializer):

    class Meta:
        model = PageSeo
        exclude = ('id',)


class ContactContactSerailizer(serializers.Serializer):
    name = serializers.CharField()
    company_name = serializers.CharField()
    phone = serializers.CharField()
    email = serializers.EmailField()
    subject = serializers.CharField()
    message = serializers.CharField()


class HomeContactSerailizer(serializers.Serializer):
    name = serializers.CharField()
    email = serializers.EmailField()
    phone = serializers.CharField()
    company_name = serializers.CharField()
    service = serializers.CharField()
    created_at = serializers.DateTimeField()
    is_new = serializers.BooleanField()
