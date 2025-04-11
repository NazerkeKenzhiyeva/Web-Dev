from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the HH API!")

urlpatterns = [
    path('', home), 
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), 
]
