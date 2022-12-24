from django.urls import URLPattern, path
from . import views

app_name="home"

urlpatterns=[
    path('',views.index,name='index'),
    path('layout',views.layout,name='layout'),
    path('photography',views.photography,name='photography'),
    path('blogs',views.blogs,name='blogs'),
    path('signup',views.signup,name='signup'),
    path('add',views.add,name='add'),




]