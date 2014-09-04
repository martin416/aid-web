from django.conf.urls import patterns, include, url
from map import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^getnextjson/(?P<id>\d+)/$', views.getNextJson, name='getNextJson'),
]
