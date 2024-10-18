from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TeacherSerailizer
from .models import Teacher
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions, authentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

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


@csrf_exempt
def teacher_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        teacher = Teacher.objects.get(email=email, password=password)
        if teacher:
            return JsonResponse({'bool': True})
        return JsonResponse({'bool':False})
    