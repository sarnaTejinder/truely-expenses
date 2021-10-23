from django.shortcuts import render
from django.contrib.auth.models import User

# Create your views here.
def about(request):
    return render(request,'extras/about.html',{'current':'about/'})


def user(request):
    return render(request,'extras/user-details.html',)