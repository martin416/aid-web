from django.shortcuts import render
from django.http import HttpResponse
from django.core.context_processors import csrf
from django.middleware.csrf import CsrfViewMiddleware, get_token
from django.utils.decorators import decorator_from_middleware, available_attrs
from functools import wraps
import json
import aid
import Bus

aidCheck = aid.aid()

def csrf_exempt(view_func):
    """
    Marks a view function as being exempt from the CSRF view protection.
    """
    # We could just do view_func.csrf_exempt = True, but decorators
    # are nicer if they don't have side-effects, so we return a new
    # function.
    def wrapped_view(*args, **kwargs):
        return view_func(*args, **kwargs)
    wrapped_view.csrf_exempt = True
    return wraps(view_func, assigned=available_attrs(view_func))(wrapped_view)

# Create your views here.
def getNextBusToConvert(request, id = None):
    busTopo = aidCheck.busQueue.pop(0);
    busDict = {'dataHora':busTopo.dataHora, 'ordem':busTopo.ordem,'linha':busTopo.linha,'latitude':busTopo.latitude, 'longitude':busTopo.longitude,'velocidade':busTopo.velocidade,'sentido':busTopo.sentido,'street':busTopo.street,'horaServidor': busTopo.horaServidor,'dataServidor': busTopo.dataServidor}
    return HttpResponse(json.dumps(busDict), mimetype="application/json")

@csrf_exempt
def receiveBusPosition(request):
    if request.method == 'POST':
        print request.POST['id']
        print request.POST['stringdata']
    return HttpResponse('')

def startCollectData(request):
    aidCheck.checkForAid()
    return HttpResponse('')