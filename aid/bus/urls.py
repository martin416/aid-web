from django.conf.urls import url
from bus import views

urlpatterns = [
    url(r'^getnextbus/$', views.getNextBusToConvert, name='getNextBusToConvert'),
    url(r'^receive-bus-position/$', views.receiveBusPosition, name='receiveBusPosition'),
    url(r'^collect-data/$', views.populateBusQueue, name='populateBusQueue'),
]
