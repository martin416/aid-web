from django.conf.urls import url
from userPosition import views

urlpatterns = [
    url(r'^receive-user-position/$', views.receiveUserPosition, name='receiveUserPosition'),
]