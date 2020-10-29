from rest_framework import status
from rest_framework.views import APIView
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import viewsets
from .models import PageSeo
from .serializers import PageSeoSerializer, ContactContactSerailizer, HomeContactSerailizer


class PageSeoView(viewsets.ReadOnlyModelViewSet):
    queryset = PageSeo.objects.all()
    serializer_class = PageSeoSerializer


class ContactView(APIView):
    # def post(self, request, *args, **kwargs):
    #     serailizer_class = ContactContactSerailizer(data=request.data)
    #     if serailizer_class.is_valid():
    #         data = serailizer_class.validated_data
    #         name = data.get('name')
    #         email = data.get('email')
    #         phone = data.get('phone')
    #         company_name = data.get('company_name')
    #         subject = data.get('subject')
    #         message = data.get('message')
    #         send_mail(f'Заявка с главной страницы!',
    #                   f'Поступила новая заявка\n\n'
    #                   f'Мои данные:'
    #                   f'\nИмя: {name}'
    #                   f'\nТелефон: {phone}'
    #                   f'\nE-mail: {email}'
    #                   f'\nНазвание организации: {company_name}'
    #                   f'\nТема: {subject}'
    #                   f'\nТекст сообщения: {message}'
    #                   'viperovm@yandex.ru', ['viperovm@gmail.com'], fail_silently=True)
    #         return Response({"success": "Sent"})
    #
    #     return Response({'success': "Failed"}, status=status.HTTP_400_BAD_REQUEST)
    pass


class HomeContactView(APIView):
    # def post(self, request, *args, **kwargs):
    #     serailizer_class = HomeContactSerailizer(data=request.data)
    #     if serailizer_class.is_valid():
    #         data = serailizer_class.validated_data
    #         name = data.get('name')
    #         email = data.get('email')
    #         phone = data.get('phone')
    #         company_name = data.get('company_name')
    #         service = data.get('service')
    #         created_at = data.get('created_at')
    #         send_mail(f'Заявка с главной страницы!',
    #                   f'Поступила новая заявка\n\n'
    #                   f'Мои данные:'
    #                   f'\nИмя: {name}'
    #                   f'\nТелефон: {phone}'
    #                   f'\nE-mail: {email}'
    #                   f'\nНазвание организации: {company_name}'
    #                   f'\nУслуга: {service}'
    #                   f'\nДата и время создания заявки: {created_at}'
    #                   'viperovm@yandex.ru', ['viperovm@gmail.com'], fail_silently=True)
    #         return Response({"success": "Sent"})
    #
    #     return Response({'success': "Failed"}, status=status.HTTP_400_BAD_REQUEST)
    pass

