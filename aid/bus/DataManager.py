# -*- coding: utf-8 -*-
import CollectData
import ConvertDataString2Bus
import FilterGpsBus

class DataManager:

    def __init__(self):
        self.collectData = CollectData.CollectData()
        self.converter = ConvertDataString2Bus.ConvertDataString2Bus()
        self.filterBus = FilterGpsBus.FilterGpsBus()

    def getFilteredData(self,polys):
        while True:
            busPosition = self.collectData.getDataUrl()
            busDict = self.converter.string2Bus(busPosition)
            busDict = self.filterBus.filterByLocationForLines(busDict,polys)
            if len(busDict):
                return busDict

    def getAllData(self):
        while True:
            busPosition = self.collectData.getDataUrl()
            busDict = self.converter.string2Bus(busPosition)
            if len(busDict):
                return busDict
