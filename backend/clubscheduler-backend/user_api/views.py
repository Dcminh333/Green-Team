from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response

# Create your views here.
class SignupView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = request.data
        email = data['email']



