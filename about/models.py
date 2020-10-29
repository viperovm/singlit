from django.db import models


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


class About(models.Model):
    title = models.CharField(max_length=150, verbose_name='Заголовок')
    subtitle = models.CharField(max_length=150, verbose_name='Подзаголовок', blank=True)
    content = models.TextField(blank=True, verbose_name='Содержание')
    img_alt = models.CharField(max_length=150, verbose_name='Alt тег изображения', blank=True)
    img = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='Изображение страницы', blank=True)

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
        verbose_name = 'О компании'
        verbose_name_plural = 'О компании'