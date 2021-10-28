from typing import final
from django.db.models.expressions import F
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import Preferences
from django.views import View
from django.http import JsonResponse, HttpResponse


@login_required(login_url='/authentication/login')
def about(request):
    return render(request, 'extras/about.html', {'current': 'about/'})


@login_required(login_url='/authentication/login')
def user(request):
    user = User.objects.get(id=request.user.id)
    try:
        theme = Preferences.objects.get(owner=user)
    except:
        theme = False
    finally:
        return render(request, 'extras/user-details.html', {'user': user, 'theme': theme})


@login_required(login_url='/authentication/login')
def getTheme(request):
    try:
        res = Preferences.objects.get(owner=request.user)
        return JsonResponse(res.theme, safe=False)
    except:
        return JsonResponse({'error': 'user does not exists'}, safe=False)


@login_required(login_url='/authentication/login')
def setTheme(request):
    if request.method == 'GET':
        return redirect(request, 'user-details')

    if request.method == 'POST':
        try: 
            res = Preferences.objects.get(owner = request.user)
        except:
            res = Preferences.objects.create(owner = request.user)
        finally:
            if(request.POST['theme'] == '0'):
                res.theme = False
            else:
                res.theme = True
            res.save()
            print(request.POST['theme'])
            print(res.theme)
            return render(request, 'extras/user-details.html',{'current':'user/'})
