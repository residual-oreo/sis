from django.shortcuts import render

def home(request):
    return render(request, "index.html")

def slideshow(request):
    return render(request, "slideshow.html")