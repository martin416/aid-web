from django.http import HttpResponse
from django.template import RequestContext, loader
from map.MongoDB import MongoDB
from django.utils import simplejson
from bson.json_util import dumps
from map.PostForm import PostForm
import json
import sys

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
