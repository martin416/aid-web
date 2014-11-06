from django.http import HttpResponse
from django.core.context_processors import csrf
from django.middleware.csrf import CsrfViewMiddleware, get_token
from django.utils.decorators import decorator_from_middleware, available_attrs
from functools import wraps
from django.template import RequestContext, loader
from map.MongoDB import MongoDB
from django.utils import simplejson
from bson.json_util import dumps
from map.PostForm import PostForm
from functools import wraps
import json
import sys

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

def index(request):
    #latest_question_list = Question.objects.order_by('-pub_date')[:5]
    mongo = MongoDB()
    mongo.connect()
    resultLA = []
    resultGJ = []
    for jsonBD in mongo.retrieveAllLinhaAmarela():
        resultLA.append(dumps(jsonBD))

    for jsonBD in mongo.retrieveAllGrajau():
        resultGJ.append(dumps(jsonBD))

    request.session['resultLA'] = resultLA
    request.session['resultGJ'] = resultGJ
    template = loader.get_template('page/index.html')

    context = RequestContext(request,{'resultQtdLA': len(resultLA),'resultQtdGJ': len(resultGJ)})
    return HttpResponse(template.render(context))

def getNextJsonLA(request, id = None):
    result = request.session.get('resultLA',{})
    return HttpResponse(result[int(id)], mimetype="application/json")

def getNextJsonGJ(request, id = None):
    result = request.session.get('resultGJ',{})
    return HttpResponse(result[int(id)], mimetype="application/json")

def getNextBusToConvert(request, id = None):
    result = request.session.get('resultGJ',{})
    return HttpResponse(json.dumps({'nome': 'Gustavo Daniel'}), mimetype="application/json")

@csrf_exempt
def receiveUserPhonePosition(request):
    if request.method == 'POST':
        print  request.POST['latitude']
        print  request.POST['longitude']
        print  request.POST['endereco']
    return HttpResponse('')

@csrf_exempt
def receiveBusPosition(request):
    if request.method == 'POST':
        print  request.POST['latitude']
        print  request.POST['longitude']
        print  request.POST['endereco']
    return HttpResponse('')