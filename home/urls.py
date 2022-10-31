from django.urls import URLPattern, path
from . import views

app_name="home"

urlpatterns=[
    path('',views.index,name='index'),
    path('photography',views.photography,name='photography')

]