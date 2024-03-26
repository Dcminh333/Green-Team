from django.db import models
from django.conf import settings

# Create your models here.

class Club(models.model):

    

    name = models.CharField(max_length=100, null=False, blank=False)
    thumbnail = models.ImageField(upload_to='thumbnail/images', null=True, blank=True)
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='created_clubs')
    members = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='joined_clubs')
    description = models.TextField(blank=True)
    background_color = models.CharField(default="#ffffff", max_length=7, blank=True)  # represented by hexcode
 