# Generated by Django 4.0.6 on 2022-10-28 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Noticias', '0005_alter_noticia_titulo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='noticia',
            name='status',
            field=models.CharField(choices=[('borrador', 'Borrador'), ('publicado', 'Publicado')], default='publicado', max_length=10, verbose_name='Estado'),
        ),
    ]