from django.conf.urls import url, include
from map import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^getnextjson-la/(?P<id>\d+)/$', views.getNextJsonLA, name='getNextJsonLA'),
    url(r'^getnextjson-gj/(?P<id>\d+)/$', views.getNextJsonGJ, name='getNextJsonGJ'),
    url(r'^receive-phone-position/$', views.receiveUserPhonePosition, name='receivePhonePosition'),
]
