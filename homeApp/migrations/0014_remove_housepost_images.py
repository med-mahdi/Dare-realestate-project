# Generated by Django 3.2.6 on 2022-07-14 13:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('homeApp', '0013_auto_20220714_1203'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='housepost',
            name='images',
        ),
    ]
