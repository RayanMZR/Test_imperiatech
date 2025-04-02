from django.shortcuts import render
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import RegistrationSerializer, LoginSerializer

class RegisterView(generics.CreateAPIView):
    serializer_class = RegistrationSerializer

class LoginView(APIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')
        email = User.objects.get(email=email)

        user = authenticate(username=email, password=password)
        if user is not None:
            refresh_token = RefreshToken.for_user(user)
            return Response({
                'refresh_token': str(refresh_token),
                'access_token': str(refresh_token.access_token)
            })
        else:
            return Response({'error': 'Email or password are incorrect'}, status=status.HTTP_401_UNAUTHORIZED)
