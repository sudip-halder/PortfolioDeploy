from django.shortcuts import render

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
    context={
         "blog_list": [1,2,3,4,5,6],
    }
   
    return render(request, "home/blogs.html", context)

def signup(request):
    return render(request, "home/signup.html", {

    })
def add(request):

#    value1=int(request.GET["num1"])
#    value2=int(request.GET["num2"])

    value1=int(request.POST["num1"])
    value2=int(request.POST["num2"])
    res= value1 + value2
    return render(request, "home/result.html", {"result": res})

