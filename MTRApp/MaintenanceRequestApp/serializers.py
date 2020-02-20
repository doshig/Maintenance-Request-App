from rest_framework import serializers
from .models import EmpId, Equipment, EquipmentProblem, Problem

class EmpIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmpId
        fields = ('first_name', 'last_name', 'badge_number', 'department', 'authorized_supervisor')
        # depth = 2

class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = '__all__'


class EquipmentProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipmentProblem
        fields = '__all__'


class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem
        fields = '__all__'