from django.conf.urls import patterns, include, url
from map import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
