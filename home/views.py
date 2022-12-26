from django.shortcuts import render
import mysql.connector

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


def blogs(request):

    mydb = mysql.connector.connect(
        host='127.0.0.1', user='root', passwd='sudiphalder', database="website")
    mycursor = mydb.cursor()
    fetch_blogs_data = f"SELECT * FROM blogs_data"
    mycursor.execute(fetch_blogs_data)
    blogs_data = mycursor.fetchall()

    blog_thumbnail_dir = "static/media/blog_thumbnails"

    class blog_preview:
        blog_title: str
        blog_short_description: str
        blog_thumbnail: str

    blogs_object_list = []

    for blog_data in blogs_data:
        blog = blog_preview()
        blog.blog_title = blog_data[1]
        blog.blog_short_description = blog_data[2]
        blog.blog_thumbnail = blog_data[3]

        blogs_object_list.append(blog)

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
    mydb = mysql.connector.connect(
        host='127.0.0.1', user='root', passwd='sudiphalder', database="website")
    mycursor = mydb.cursor()

    person_name = request.POST["name"]
    person_email = request.POST["email"]
    purpose = request.POST["purpose"]

    if ((person_name != '') and (person_email != '') and (purpose != '')):
        insert_data = f"INSERT INTO contact_form (person_name,person_email,purpose) VALUES('{person_name}','{person_email}','{purpose}')"
        mycursor.execute(insert_data)
        mydb.commit()
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
