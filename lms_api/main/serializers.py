from rest_framework import serializers
from .models import Course, CourseCategory, Student, Teacher
from django import forms

class TeacherSerailizer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['full_name', 'email', 'password', 'qualification', 'mobile_no', 'address']
        
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['__all__']