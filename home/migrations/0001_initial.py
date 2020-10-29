# Generated by Django 3.1.2 on 2020-10-15 08:28

from django.db import migrations, models
import faicon.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NumbersElements',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(max_length=150, verbose_name='Число')),
                ('text', models.CharField(max_length=150, verbose_name='Текст')),
            ],
            options={
                'verbose_name': 'Цифры-Элементы',
                'verbose_name_plural': 'Цифры-Элементы',
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
        migrations.CreateModel(
            name='ProsElements',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=150, verbose_name='Заголовок')),
                ('subtitle', models.CharField(blank=True, max_length=150, verbose_name='Подзаголовок')),
                ('content', models.TextField(verbose_name='Содержание')),
                ('icon', faicon.fields.FAIconField(max_length=50, verbose_name='Иконка')),
            ],
            options={
                'verbose_name': 'Преимущества-Элементы',
                'verbose_name_plural': 'Преимущества-Элементы',
            },
        ),
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Имя')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('phone', models.CharField(max_length=15, verbose_name='Телефон')),
                ('company_name', models.CharField(blank=True, max_length=150, verbose_name='Название организации')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')),
                ('is_new', models.BooleanField(default=True, verbose_name='Непрочитано')),
            ],
            options={
                'verbose_name': 'Заявка',
                'verbose_name_plural': 'Заявки',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='SectionImages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=150, verbose_name='Заголовок')),
                ('img_alt', models.CharField(blank=True, max_length=150, verbose_name='Alt тег изображения')),
                ('img', models.ImageField(blank=True, upload_to='photos/%Y/%m/%d/', verbose_name='Изображения раздела')),
            ],
            options={
                'verbose_name': 'Изображение раздела',
                'verbose_name_plural': 'Изображения раздела',
            },
        ),
        migrations.CreateModel(
            name='ServicesSection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=150, verbose_name='Заголовок')),
                ('subtitle', models.CharField(blank=True, max_length=150, verbose_name='Подзаголовок')),
                ('content', models.TextField(blank=True, verbose_name='Содержание')),
                ('img', models.ManyToManyField(blank=True, to='home.SectionImages', verbose_name='Изображения раздела')),
            ],
            options={
                'verbose_name': 'Раздел Услуги',
                'verbose_name_plural': 'Раздел Услуги',
            },
        ),
        migrations.CreateModel(
            name='ReviewsSection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=150, verbose_name='Заголовок')),
                ('subtitle', models.CharField(blank=True, max_length=150, verbose_name='Подзаголовок')),
                ('content', models.TextField(blank=True, verbose_name='Содержание')),
                ('img', models.ManyToManyField(blank=True, to='home.SectionImages', verbose_name='Изображения раздела')),
            ],
            options={
                'verbose_name': 'Раздел Отзывы',
                'verbose_name_plural': 'Раздел Отзывы',
            },
        ),
        migrations.CreateModel(
            name='RequestSection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=150, verbose_name='Заголовок')),
                ('subtitle', models.CharField(blank=True, max_length=150, verbose_name='Подзаголовок')),
                ('content', models.TextField(blank=True, verbose_name='Содержание')),
                ('img', models.ManyToManyField(blank=True, to='home.SectionImages', verbose_name='Изображения раздела')),
            ],
            options={
                'verbose_name': 'Раздел Заявка',
                'verbose_name_plural': 'Раздел Заявка',
            },
        ),
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(blank=True, max_length=250, verbose_name='Текст')),
                ('author', models.CharField(blank=True, max_length=150, verbose_name='Автор')),
                ('background_img_alt', models.CharField(blank=True, max_length=150, verbose_name='Alt тег изображения подложки')),
                ('background_img', models.ImageField(blank=True, upload_to='photos/%Y/%m/%d/', verbose_name='Изображения подложки')),
                ('img', models.ManyToManyField(blank=True, to='home.SectionImages', verbose_name='Изображения раздела')),
            ],
            options={
                'verbose_name': 'Цитата',
                'verbose_name_plural': 'Цитата',
            },
        ),
        migrations.CreateModel(
            name='Pros',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=150, verbose_name='Заголовок')),
                ('subtitle', models.CharField(blank=True, max_length=150, verbose_name='Подзаголовок')),
                ('content', models.TextField(blank=True, verbose_name='Содержание')),
                ('img', models.ManyToManyField(blank=True, to='home.SectionImages', verbose_name='Изображения раздела')),
            ],
            options={
                'verbose_name': 'Преимущества',
                'verbose_name_plural': 'Преимущества',
            },
        ),
        migrations.CreateModel(
            name='Numbers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=150, verbose_name='Заголовок')),
                ('subtitle', models.CharField(blank=True, max_length=150, verbose_name='Подзаголовок')),
                ('content', models.TextField(blank=True, verbose_name='Содержание')),
                ('background_img_alt', models.CharField(blank=True, max_length=150, verbose_name='Alt тег изображения подложки')),
                ('background_img', models.ImageField(blank=True, upload_to='photos/%Y/%m/%d/', verbose_name='Изображения подложки')),
                ('img', models.ManyToManyField(blank=True, to='home.SectionImages', verbose_name='Изображения раздела')),
            ],
            options={
                'verbose_name': 'Цифры',
                'verbose_name_plural': 'Цифры',
            },
        ),
        migrations.CreateModel(
            name='Intro',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=150, verbose_name='Заголовок')),
                ('subtitle', models.CharField(blank=True, max_length=150, verbose_name='Подзаголовок')),
                ('content', models.TextField(blank=True, verbose_name='Содержание')),
                ('img', models.ManyToManyField(blank=True, to='home.SectionImages', verbose_name='Изображения раздела')),
            ],
            options={
                'verbose_name': 'Вступление',
                'verbose_name_plural': 'Вступление',
            },
        ),
    ]