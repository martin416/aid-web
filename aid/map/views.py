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
    result = []
    for jsonBD in mongo.retrieveAllLinhaAmarela():
        result.append(dumps(jsonBD))

    request.session['result'] = result
    template = loader.get_template('page/index.html')

    context = RequestContext(request,{'resultQtd': len(result)})
    return HttpResponse(template.render(context))

def getNextJson(request, id = None):
    result = request.session.get('result',{})
    return HttpResponse(result[int(id)], mimetype="application/json")
