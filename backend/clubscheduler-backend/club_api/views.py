from django.shortcuts import render

from .models import Club
from .serializers import ClubSerializer

from rest_framework import viewsets

class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer


