from rest_framework.generics import ListAPIView, ListCreateAPIView

from .serializers import EmpIdSerializer, EquipmentSerializer, EquipmentProblemSerializer, ProblemSerializer
from .models import EmpId, Equipment, EquipmentProblem, Problem

class EmpIdApi(ListAPIView):
    queryset = EmpId.objects.all()
    serializer_class = EmpIdSerializer

class EquipmentApi(ListAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer

class EquipmentProblemApi(ListCreateAPIView):
    queryset = EquipmentProblem.objects.all()
    serializer_class = EquipmentProblemSerializer

class ProblemApi(ListCreateAPIView):
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer

