from django.db import models

MAX_LENGTH = 200
# Create your models here.
class DateAndTime(models.Model):
    datetime_created = models.DateTimeField(auto_now_add=True)
    datetime_updated = models.DateTimeField(auto_now=True)
    class Meta:
        abstract = True

class EmpId(DateAndTime):
    first_name = models.CharField(max_length=MAX_LENGTH, blank=False)
    last_name = models.CharField(max_length=MAX_LENGTH, blank=False)
    badge_number = models.IntegerField(blank=False)
    department = models.IntegerField(blank=False)
    authorized_supervisor = models.CharField(max_length=MAX_LENGTH)
    
    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

class Equipment(DateAndTime):
    equipment_number = models.CharField(max_length=MAX_LENGTH)
    equipment_name = models.CharField(max_length=MAX_LENGTH)
    equipment_location = models.CharField(max_length=MAX_LENGTH)
    
    def __str__(self):
        return "{}".format(self.equipment_number)

class EquipmentProblem(DateAndTime):
    equipment_problem = models.CharField(max_length=MAX_LENGTH)
    
    def __str__(self):
        return "{}".format(self.equipment_problem)

class Problem(DateAndTime):
    explain_problem = models.CharField(max_length=2000)
    
    def __str__(self):
        return "{}".format(self.explain_problem)


