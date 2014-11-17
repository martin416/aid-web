from django.conf.urls import *

urlpatterns = [
	url(r'^map/', include('map.urls')),
	url(r'^bus/', include('bus.urls')),
]
