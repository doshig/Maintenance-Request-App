# Generated by Django 3.0.3 on 2020-02-19 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MaintenanceRequestApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empid',
            name='badge_number',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='empid',
            name='department',
            field=models.IntegerField(),
        ),
    ]
