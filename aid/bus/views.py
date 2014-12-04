#!/usr/bin/env python
# -*- coding: utf-8 -*-
import unicodedata
import string
from django.shortcuts import render
from django.http import HttpResponse
from django.core.context_processors import csrf
from django.middleware.csrf import CsrfViewMiddleware, get_token
from django.utils.decorators import decorator_from_middleware, available_attrs
from functools import wraps
import json
import Bus
import aid
import SaveBusMongoDB

busQueue = []
addressLA  =  'linhaamarela'
addressGJ  =  'autoestradagrajajacarepagu'
saveBusLA = SaveBusMongoDB.SaveBusMongoDB("linha_amarela")
saveBusGJ = SaveBusMongoDB.SaveBusMongoDB("grajau_jacarepagua")

def csrf_exempt(view_func):
    def wrapped_view(*args, **kwargs):
        return view_func(*args, **kwargs)
    wrapped_view.csrf_exempt = True
    return wraps(view_func, assigned=available_attrs(view_func))(wrapped_view)

# Create your views here.
def getNextBusToConvert(request, id = None):
    busDict = None
    if len(busQueue) != 0:
        busTopo = busQueue.pop(0);
        print "..:: Tamanho Fila -> " + str(len(busQueue))
        busDict = {'dataHora':busTopo.dataHora, 'ordem':busTopo.ordem,'linha':busTopo.linha,'latitude':busTopo.latitude, 'longitude':busTopo.longitude,'velocidade':busTopo.velocidade,'sentido':busTopo.sentido,'street':busTopo.street,'horaServidor': busTopo.horaServidor,'dataServidor': busTopo.dataServidor}
    else:
        busDict = {'erro':'Vetor esta vazio, mas tera onibus em breve'}
    return HttpResponse(json.dumps(busDict), mimetype="application/json")

@csrf_exempt
def receiveBusPosition(request):
    if request.method == 'POST':
        bus = Bus.Bus()
        bus.ordem = request.POST["ordem"]
        bus.dataHora = request.POST["dataHora"]
        bus.linha = request.POST["linha"]
        bus.latitude = request.POST["latitude"]
        bus.longitude = request.POST["longitude"]
        bus.velocidade = request.POST["velocidade"]
        bus.sentido =request.POST["sentido"]
        bus.street = request.POST["street"]
        bus.streetAndroid = request.POST["address_android"]
        bus.horaServidor = request.POST["horaServidor"]
        bus.dataServidor = request.POST["dataServidor"]

        addressReceived =  ''.join(x for x in bus.streetAndroid if x in string.ascii_letters).lower()
        if addressLA in addressReceived:
            saveBusLA.saveBusOnDatabases(bus)
        elif addressGJ in addressReceived:
            saveBusGJ.saveBusOnDatabases(bus)

        response = {'Sucesso':'onibus recebido com suceso'}
    return HttpResponse(json.dumps(response), mimetype="application/json")


def populateBusQueue(request):
    aidCheck = aid.aid(busQueue)
    aidCheck.start()
    response = {'Sucesso':'Criando pilhas com os onibus'}
    return HttpResponse(json.dumps(response), mimetype="application/json")
