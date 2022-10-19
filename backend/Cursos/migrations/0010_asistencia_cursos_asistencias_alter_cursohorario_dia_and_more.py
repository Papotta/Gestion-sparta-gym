# Generated by Django 4.0.6 on 2022-09-09 16:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Users', '0003_remove_usuarios_curso'),
        ('Cursos', '0009_alter_pagocuota_dia_de_pago'),
    ]

    operations = [
        migrations.CreateModel(
            name='Asistencia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('asistio', models.BooleanField(default=False)),
                ('fecha', models.DateField()),
            ],
        ),
        migrations.AddField(
            model_name='cursos',
            name='asistencias',
            field=models.ManyToManyField(related_name='asistencias', through='Cursos.Asistencia', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='cursohorario',
            name='dia',
            field=models.CharField(choices=[('Lunes', 'Lunes'), ('Martes', 'Martes'), ('Miercoles', 'Miercoles'), ('Juves', 'Jueves'), ('Viernes', 'Viernes'), ('Sabado', 'Sabado')], max_length=200),
        ),
        migrations.AddField(
            model_name='asistencia',
            name='curso',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cursos.cursos'),
        ),
        migrations.AddField(
            model_name='asistencia',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]