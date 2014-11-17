# -*- coding: utf-8 -*-
import CheckInSector
import CollectData
import unicodedata
import string

class FilterGpsBus:
    def __init__(self):
        self.check = CheckInSector.CheckInSector()
        self.data = CollectData.CollectData()

    def filterByLocationForLines(self,busDictAll,polys):
        busDictFiltered = {}
        for key in busDictAll:
            if self.check.ispointinside(busDictAll[key].latitude,busDictAll[key].longitude,polys) == True:
                busDictFiltered[key] = busDictAll[key]
        return busDictFiltered

    def filterByGoogleApi(self,busDict,streetNameGoogle):
        lineDict = {}
        for key in busDict:
            response = self.data.getLocation(busDict[key].latitude,busDict[key].longitude)
            for address in response['results']:
                if address.get('formatted_address'):
                    addressJson  =  ''.join(x for x in unicodedata.normalize('NFKD', address.get('formatted_address')) if x in string.ascii_letters).lower()
                    addressCheck =  ''.join(x for x in streetNameGoogle if x in string.ascii_letters).lower()
                    if addressCheck in addressJson:
                        lineDict[busDict[key].linha] = busDict[key].linha
        return lineDict
