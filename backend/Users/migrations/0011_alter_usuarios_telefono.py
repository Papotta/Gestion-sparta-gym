# Generated by Django 4.0.6 on 2022-10-20 22:09

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0010_usuarios_telefono'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='telefono',
            field=models.CharField(blank=True, max_length=16, null=True, validators=[django.core.validators.RegexValidator(regex='^\\+?1?\\d{9,15}$')]),
        ),
    ]