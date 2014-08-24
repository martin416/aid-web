from django.http import HttpResponse
from django.template import RequestContext, loader


def index(request):
    #latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('page/index.html')
    context = RequestContext(request,{'boldmessage': "I am bold font from the context"})
    return HttpResponse(template.render(context))
