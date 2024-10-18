from django.urls import path
from . import views

urlpatterns = [
    # path('teacher', views.TeacherList.as_view()),
    # path('teacher/<int:pk>', views.TeacherList.as_view()),
    path('teacher/', views.TeacherListCreateAPIView.as_view()),
    path('teacher/<int:pk>', views.TeacherDetailAPIView.as_view()),
    path('home', views.Home.as_view(), name='home'),
    path('login/', views.teacher_login, name='login')
]
