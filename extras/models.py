from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Preferences(models.Model):
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    theme = models.BooleanField(default=False)

    def __str__(self):
        return self.theme

    class Meta:
        verbose_name_plural = 'Preferences'