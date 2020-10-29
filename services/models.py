from django.db import models
from django.urls import reverse


class Services(models.Model):
    page_title = models.CharField(max_length=250, blank=True, verbose_name='title')
    page_description = models.CharField(max_length=250, blank=True, verbose_name='description')
    og_title = models.CharField(max_length=250, blank=True, verbose_name='og:title')
    og_description = models.CharField(max_length=250, blank=True, verbose_name='og:description')
    og_url = models.CharField(max_length=250, blank=True, verbose_name='og:url')
    og_image = models.CharField(max_length=250, blank=True, verbose_name='og:image')
    og_type = models.CharField(max_length=250, blank=True, default='website', verbose_name='og:type')
    meta1 = models.CharField(max_length=250, verbose_name='Свой html перед /head', blank=True)
    title = models.CharField(max_length=150, verbose_name='Заголовок')
    subtitle = models.CharField(max_length=150, verbose_name='Подзаголовок', blank=True)
    slug = models.SlugField(max_length=70, verbose_name='URL', unique=True)
    content = models.TextField(blank=True, verbose_name='Содержание')
    img_alt = models.CharField(max_length=150, verbose_name='Alt тег изображения', blank=True)
    img = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='Изображение')

    @property
    def imageURL(self):
        try:
            url = self.img.url
        except:
            url = ''
        return url

    def get_absolute_url(self):
        return reverse('view_service', kwargs={"slug": self.slug})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'
        ordering = ['title']