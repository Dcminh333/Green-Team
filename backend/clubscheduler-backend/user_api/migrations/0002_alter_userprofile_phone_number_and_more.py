# Generated by Django 5.0.1 on 2024-03-25 20:38

import django.core.validators
import phonenumber_field.modelfields
import user_api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='phone_number',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, region=None),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='year',
            field=models.PositiveIntegerField(blank=True, default=2024, validators=[django.core.validators.MinValueValidator(1980), user_api.models.max_value_year], verbose_name='year'),
        ),
    ]
