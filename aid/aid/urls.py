from django.conf.urls import patterns, include, url
from map import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^getnextjson-la/(?P<id>\d+)/$', views.getNextJsonLA, name='getNextJsonLA'),
    url(r'^getnextjson-gj/(?P<id>\d+)/$', views.getNextJsonGJ, name='getNextJsonGJ'),
]
