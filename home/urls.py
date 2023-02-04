from django.urls import URLPattern, path
from . import views

app_name = "home"

urlpatterns = [
    path('', views.index, name='index'),
    path('layout', views.layout, name='layout'),
    path('photography', views.photography, name='photography'),
    #  path('blogs',views.blogs,name='blogs'),

    path('contact', views.contact, name='contact_form'),
    path('submit_contact_form', views.submit_contact_form, name='submit_contact_form'),

]
