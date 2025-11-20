from django.contrib import admin
from django.urls import path
from mirror import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('slideshow/', views.slideshow, name='slideshow'),
]