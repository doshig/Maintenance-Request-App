from django.conf.urls import url

from .api import EmpIdApi, EquipmentApi, EquipmentProblemApi, ProblemApi

urlpatterns = [
    url(r'^employee$', EmpIdApi.as_view()),
    url(r'^equipment$', EquipmentApi.as_view()),
    url(r'^equipmentproblem$', EquipmentProblemApi.as_view()),
    url(r'^problem$', ProblemApi.as_view())
]