from django.db import models
from faicon.fields import FAIconField
# from services.models import Services


class PageSeo(models.Model):
    title = models.CharField(max_length=250, blank=True, verbose_name='title')
    description = models.CharField(max_length=250, blank=True, verbose_name='description')
    og_title = models.CharField(max_length=250, blank=True, verbose_name='og:title')
    og_description = models.CharField(max_length=250, blank=True, verbose_name='og:description')
    og_url = models.CharField(max_length=250, blank=True, verbose_name='og:url')
    og_image = models.CharField(max_length=250, blank=True, verbose_name='og:image')
    og_type = models.CharField(max_length=250, blank=True, default='website', verbose_name='og:type')
    meta1 = models.CharField(max_length=250, verbose_name='Свой html перед /head', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Сео настройка страницы'
        verbose_name_plural = 'Сео настройка страницы'


class SectionImages(models.Model):
    title = models.CharField(max_length=150, blank=True, verbose_name='Заголовок')
    img_alt = models.CharField(max_length=150, verbose_name='Alt тег изображения', blank=True)
    img = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='Изображения раздела', blank=True)

    @property
    def imageURL(self):
        try:
            url = self.img.url
        except:
            url = ''
        return url

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Изображение раздела'
        verbose_name_plural = 'Изображения раздела'


class Intro(models.Model):
    title = models.CharField(max_length=150, blank=True, verbose_name='Заголовок')
    subtitle = models.CharField(max_length=150, blank=True, verbose_name='Подзаголовок')
    content = models.TextField(verbose_name='Содержание', blank=True)
    img = models.ManyToManyField(SectionImages, blank=True, verbose_name='Изображения раздела')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Вступление'
        verbose_name_plural = 'Вступление'


class ServicesSection(models.Model):
    title = models.CharField(max_length=150, blank=True, verbose_name='Заголовок')
    subtitle = models.CharField(max_length=150, blank=True, verbose_name='Подзаголовок')
    content = models.TextField(verbose_name='Содержание', blank=True)
    img = models.ManyToManyField(SectionImages, blank=True, verbose_name='Изображения раздела')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Раздел Услуги'
        verbose_name_plural = 'Раздел Услуги'


class Pros(models.Model):
    title = models.CharField(max_length=150, blank=True, verbose_name='Заголовок')
    subtitle = models.CharField(max_length=150, blank=True, verbose_name='Подзаголовок')
    content = models.TextField(verbose_name='Содержание', blank=True)
    img = models.ManyToManyField(SectionImages, blank=True, verbose_name='Изображения раздела')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Преимущества'
        verbose_name_plural = 'Преимущества'


class ProsElements(models.Model):
    title = models.CharField(max_length=150, blank=True, verbose_name='Заголовок')
    subtitle = models.CharField(max_length=150, blank=True, verbose_name='Подзаголовок')
    content = models.TextField(verbose_name='Содержание')
    icon = FAIconField(verbose_name='Иконка')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Преимущества-Элементы'
        verbose_name_plural = 'Преимущества-Элементы'


class Quote(models.Model):
    text = models.CharField(max_length=250, blank=True, verbose_name='Текст')
    author = models.CharField(max_length=150, blank=True, verbose_name='Автор')
    background_img_alt = models.CharField(max_length=150, verbose_name='Alt тег изображения подложки', blank=True)
    background_img = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='Изображения подложки', blank=True)
    img = models.ManyToManyField(SectionImages, blank=True, verbose_name='Изображения раздела')

    @property
    def imageURL(self):
        try:
            url = self.background_img.url
        except:
            url = ''
        return url

    def __str__(self):
        return self.author

    class Meta:
        verbose_name = 'Цитата'
        verbose_name_plural = 'Цитата'


class ReviewsSection(models.Model):
    title = models.CharField(max_length=150, blank=True, verbose_name='Заголовок')
    subtitle = models.CharField(max_length=150, blank=True, verbose_name='Подзаголовок')
    content = models.TextField(verbose_name='Содержание', blank=True)
    img = models.ManyToManyField(SectionImages, blank=True, verbose_name='Изображения раздела')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Раздел Отзывы'
        verbose_name_plural = 'Раздел Отзывы'


class Numbers(models.Model):
    title = models.CharField(max_length=150, blank=True, verbose_name='Заголовок')
    subtitle = models.CharField(max_length=150, blank=True, verbose_name='Подзаголовок')
    content = models.TextField(verbose_name='Содержание', blank=True)
    background_img_alt = models.CharField(max_length=150, verbose_name='Alt тег изображения подложки', blank=True)
    background_img = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='Изображения подложки', blank=True)
    img = models.ManyToManyField(SectionImages, blank=True, verbose_name='Изображения раздела')

    @property
    def imageURL(self):
        try:
            url = self.background_img.url
        except:
            url = ''
        return url

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Цифры'
        verbose_name_plural = 'Цифры'


class NumbersElements(models.Model):
    number = models.CharField(max_length=150, verbose_name='Число')
    text = models.CharField(max_length=150, verbose_name='Текст')

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = 'Цифры-Элементы'
        verbose_name_plural = 'Цифры-Элементы'


class RequestSection(models.Model):
    title = models.CharField(max_length=150, blank=True, verbose_name='Заголовок')
    subtitle = models.CharField(max_length=150, blank=True, verbose_name='Подзаголовок')
    content = models.TextField(verbose_name='Содержание', blank=True)
    img = models.ManyToManyField(SectionImages, blank=True, verbose_name='Изображения раздела')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Раздел Заявка'
        verbose_name_plural = 'Раздел Заявка'


class Request(models.Model):
    name = models.CharField(max_length=150, verbose_name='Имя')
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(max_length=15, verbose_name='Телефон')
    company_name = models.CharField(max_length=150, blank=True, verbose_name='Название организации')
    # service = models.ForeignKey('services.Services', on_delete=models.PROTECT, verbose_name='Услуги')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')
    is_new = models.BooleanField(default=True, verbose_name='Непрочитано')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'
        ordering = ['-created_at']
