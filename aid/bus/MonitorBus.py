# -*- coding: utf-8 -*-
import time
import DataManager
import FilterGpsBus
import SaveBusMongoDB
import Util

class MonitorBus:
    def __init__(self,polys,busQueue):
        self.polys = polys
        self.saveBusLA = SaveBusMongoDB.SaveBusMongoDB("linha_amarela")
        self.saveBusGJ = SaveBusMongoDB.SaveBusMongoDB("grajau_jacarepagua")
        self.dataManager = DataManager.DataManager()
        self.util =  Util.Util()
        self.busQueue = busQueue
        self.data = time.strftime("%d/%m/%Y")
        self.hora = time.strftime("%H:%M")


    def mountQueue(self):
        print "..:: Start Collect Data "+ ' ' + self.data + " " + self.hora  +" ::..";
        print "..:: Get First Bus Dict "+ ' ' + self.data + " " + self.hora  +" ::..";
        self.busDictFirst = self.dataManager.getFilteredData(self.polys)
        print "..:: Get Second Bus Dict "+ ' ' + self.data + " " + self.hora  +" ::..";
        self.populateSecondVector()
        self.util.setDirection(self.busDictFirst, self.busDictSecond)
        self.saveBusLA.addRegisterDatabase(self.data,self.hora)
        self.saveBusGJ.addRegisterDatabase(self.data,self.hora)
        for key in  self.busDictFirst:
            self.busDictFirst[key].dataServidor = self.data
            self.busDictFirst[key].horaServidor = self.hora
            self.busQueue.append(self.busDictFirst[key])
        print "..:: Finish Collect Data "+ ' ' + self.data + " " + self.hora  +" ::..";



    def populateSecondVector(self):
        while True:
            self.busDictSecond = self.dataManager.getAllData()
            if not self.util.compareDictWithBus(self.busDictFirst,self.busDictSecond):
                break