from django.urls import path
from . import views

urlpatterns = [
    path('about/',views.about,name = 'about'),
    path('user/',views.user,name = 'user-details')
]
