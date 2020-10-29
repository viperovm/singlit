from rest_framework import serializers
from .models import *


class PageSeoSerializer(serializers.ModelSerializer):

    class Meta:
        model = PageSeo
        exclude = ("id",)


class IntroSerializer(serializers.ModelSerializer):

    img = serializers.SlugRelatedField(slug_field="imageURL", read_only=True, many=True)

    class Meta:
        model = Intro
        # fields = '__all__'
        exclude = ("id",)


class ServicesSectionSerializer(serializers.ModelSerializer):

    img = serializers.SlugRelatedField(slug_field="imageURL", read_only=True, many=True)

    class Meta:
        model = ServicesSection
        # fields = '__all__'
        exclude = ("id",)


class ProsSerializer(serializers.ModelSerializer):

    img = serializers.SlugRelatedField(slug_field="imageURL", read_only=True, many=True)

    class Meta:
        model = Pros
        # fields = '__all__'
        exclude = ("id",)


class ProsElementsSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProsElements
        fields = '__all__'


class QuoteSerializer(serializers.ModelSerializer):

    img = serializers.SlugRelatedField(slug_field="imageURL", read_only=True, many=True)

    class Meta:
        model = Quote
        # fields = '__all__'
        fields = ('text', 'author', 'background_img_alt', 'imageURL', 'img')


class ReviewsSectionSerializer(serializers.ModelSerializer):

    img = serializers.SlugRelatedField(slug_field="imageURL", read_only=True, many=True)

    class Meta:
        model = ReviewsSection
        # fields = '__all__'
        exclude = ("id",)


class NumbersSerializer(serializers.ModelSerializer):

    img = serializers.SlugRelatedField(slug_field="imageURL", read_only=True, many=True)

    class Meta:
        model = Numbers
        # fields = '__all__'
        fields = ('title', 'subtitle', 'content', 'background_img_alt', 'imageURL', 'img')


class NumbersElementsSerializer(serializers.ModelSerializer):

    img = serializers.SlugRelatedField(slug_field="imageURL", read_only=True, many=True)

    class Meta:
        model = NumbersElements
        # fields = '__all__'
        exclude = ("id",)


class RequestSectionSerializer(serializers.ModelSerializer):

    img = serializers.SlugRelatedField(slug_field="imageURL", read_only=True, many=True)

    class Meta:
        model = RequestSection
        # fields = '__all__'
        exclude = ("id",)


class RequestSerializer(serializers.ModelSerializer):

    service = serializers.SlugRelatedField(slug_field="title", read_only=True)

    class Meta:
        model = Request
        # fields = '__all__'
        exclude = ("id",)

