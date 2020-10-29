# Generated by Django 3.1.2 on 2020-10-15 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page_title', models.CharField(blank=True, max_length=250, verbose_name='title')),
                ('page_description', models.CharField(blank=True, max_length=250, verbose_name='description')),
                ('og_title', models.CharField(blank=True, max_length=250, verbose_name='og:title')),
                ('og_description', models.CharField(blank=True, max_length=250, verbose_name='og:description')),
                ('og_url', models.CharField(blank=True, max_length=250, verbose_name='og:url')),
                ('og_image', models.CharField(blank=True, max_length=250, verbose_name='og:image')),
                ('og_type', models.CharField(blank=True, default='website', max_length=250, verbose_name='og:type')),
                ('meta1', models.CharField(blank=True, max_length=250, verbose_name='Свой html перед /head')),
                ('title', models.CharField(max_length=150, verbose_name='Заголовок')),
                ('subtitle', models.CharField(blank=True, max_length=150, verbose_name='Подзаголовок')),
                ('slug', models.SlugField(max_length=70, unique=True, verbose_name='URL')),
                ('content', models.TextField(blank=True, verbose_name='Контент')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
                ('img_alt', models.CharField(blank=True, max_length=150, verbose_name='Alt тег изображения')),
                ('img', models.ImageField(blank=True, upload_to='photos/%Y/%m/%d/', verbose_name='Изображение')),
                ('is_published', models.BooleanField(default=True, verbose_name='Опубликовано')),
            ],
            options={
                'verbose_name': 'Новость',
                'verbose_name_plural': 'Новости',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='PageSeo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=250, verbose_name='title')),
                ('description', models.CharField(blank=True, max_length=250, verbose_name='description')),
                ('og_title', models.CharField(blank=True, max_length=250, verbose_name='og:title')),
                ('og_description', models.CharField(blank=True, max_length=250, verbose_name='og:description')),
                ('og_url', models.CharField(blank=True, max_length=250, verbose_name='og:url')),
                ('og_image', models.CharField(blank=True, max_length=250, verbose_name='og:image')),
                ('og_type', models.CharField(blank=True, default='website', max_length=250, verbose_name='og:type')),
                ('meta1', models.CharField(blank=True, max_length=250, verbose_name='Свой html перед /head')),
            ],
            options={
                'verbose_name': 'Сео настройка страницы',
                'verbose_name_plural': 'Сео настройка страницы',
            },
        ),
    ]
