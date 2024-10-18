from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TeacherSerailizer
from .models import Teacher
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions, authentication
from rest_framework_simplejwt.authentication import JWTAuthentication

# Create your views here.
class TeacherListCreateAPIView(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerailizer
    # permission_classes = [permissions.IsAuthenticated]


class TeacherDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerailizer
    # permission_classes = [permissions.IsAuthenticated]


class Home(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)
