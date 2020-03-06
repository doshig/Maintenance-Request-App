from django.conf.urls import url
from django.views.generic import TemplateView

from .api import EmpIdApi, EquipmentApi, EquipmentProblemApi, ProblemApi, FinalRequestApi

urlpatterns = [
    url(r'^employee$', EmpIdApi.as_view()),
    url(r'^equipment$', EquipmentApi.as_view()),
    url(r'^equipmentproblem$', EquipmentProblemApi.as_view()),
    url(r'^problem$', ProblemApi.as_view()),
    url(r'^finalrequest$', FinalRequestApi.as_view()),
    url(r'^maintenancerequest', TemplateView.as_view(template_name="home.html"))
]