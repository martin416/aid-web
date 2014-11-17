# -*- coding: utf-8 -*-
import threading
import time
import DataManager
import FilterGpsBus
import SaveBusMongoDB
import Util

class MonitorBus(threading.Thread):
    def __init__(self,polys,street,busQueue):
        threading.Thread.__init__(self)
        self.street = street
        self.saveBus = SaveBusMongoDB.SaveBusMongoDB(street)
        self.polys = polys
        self.dataManager = DataManager.DataManager()
        self.util =  Util.Util()
        self.busQueue = busQueue
        self.data = time.strftime("%d/%m/%Y")
        self.hora = time.strftime("%H:%M")


    def run(self):
        print "..:: Get First Bus Dict "+ self.street+ ' ' + self.data + " " + self.hora  +" ::..";
        self.busDictFirst = self.dataManager.getFilteredData(self.polys)
        print "..:: Get Second Bus Dict "+ self.street+ ' ' + self.data + " " + self.hora  +" ::..";
        self.populateSecondVector()
        self.util.setDirection(self.busDictFirst, self.busDictSecond)
        self.saveBus.saveBusOnDatabase(self.data,self.hora)
        for key in  self.busDictFirst:
            self.busDictFirst[key].street = self.street
            self.busDictFirst[key].dataServidor = self.data
            self.busDictFirst[key].horaServidor = self.hora
            self.busQueue.append(self.busDictFirst[key])


    def populateSecondVector(self):
        while True:
            self.busDictSecond = self.dataManager.getAllData()
            if not self.util.compareDictWithBus(self.busDictFirst,self.busDictSecond):
                break