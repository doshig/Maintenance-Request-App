from django.contrib import admin

from .models import EmpId, DateAndTime, Equipment, EquipmentProblem, Problem, FinalRequest

# Register your models here.
admin.site.register(EmpId)
# admin.site.register(DateAndTime)
admin.site.register(Equipment)
admin.site.register(EquipmentProblem)
admin.site.register(Problem)
admin.site.register(FinalRequest)


