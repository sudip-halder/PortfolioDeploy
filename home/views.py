from django.shortcuts import render
from .models import ContactForm
from .models import BlogData


# Create your views here.


def index(request):
    return render(request, "home/index.html", {
    })


def layout(request):
    return render(request, "home/layout.html", {

    })


def photography(request):
    return render(request, "home/photography.html", {

    })


def projects(request):
    return render(request, "home/projects.html", {

    })


def blogs(request):
    blog_thumbnail_dir = "static/media/blog_thumbnails"
    blogs_object_list = BlogData.objects.all()
    return render(request, "home/blogs.html", {
        'blogs_object_list': blogs_object_list,
        'blog_thumbnail_dir': blog_thumbnail_dir
    })


def contact(request):
    icon_dir = "static/media/icons"
    return render(request, "home/contact.html", {
        'icon_dir': icon_dir
    })


def submit_contact_form(request):
    person_name = request.POST["name"]
    person_email = request.POST["email"]
    purpose = request.POST["purpose"]

    if (person_name != '') and (person_email != '') and (purpose != ''):
        contact_form = ContactForm()
        contact_form.person_name = person_name
        contact_form.person_email = person_email
        contact_form.purpose = purpose
        contact_form.save()
        return render(request, "home/result.html", {
            'message': "Form submitted Successfully",
            'name': person_name,
            'email': person_email,
            'purpose': purpose
        })
    return render(request, "home/result.html", {
        'message': 'Something Went Wrong! Please check your inputs.',
        'name': person_name,
        'email': person_email,
        'purpose': purpose
    })
