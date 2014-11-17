# -*- coding: utf-8 -*-
import pycurl
import io
import urllib
import json

class CollectData:

    def getDataUrl(self):
        # Send the GET request
        try:
            url = 'http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/obterTodasPosicoes'
            buf = io.BytesIO()

            c = pycurl.Curl()
            c.setopt(c.URL, url)
            c.setopt(c.WRITEFUNCTION, buf.write)
            c.perform()

            busPosition = buf.getvalue()
            buf.close()
            return busPosition
        except Exception:
            return 1

    def getLocation(self,latitude,longitude):
        url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true_or_false'
        response = urllib.urlopen(url)
        data = json.load(response)
        return data
