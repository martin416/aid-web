# -*- coding: utf-8 -*-
import MarksOnStreet
import MonitorBus

class aid:
	def __init__(self):
		self.busQueue =  []

	def checkForAid(self):
		marks = MarksOnStreet.MarksOnStreet()
		#monitorBusGJ = MonitorBus.MonitorBus(marks.grajauJacarepagua.marks,"grajau_jacarepagua",self.busQueue)
		#monitorBusGJ.start()

		monitorBusLA = MonitorBus.MonitorBus(marks.linhaAmarela.marks,"linhaAmarela",self.busQueue)
		monitorBusLA.start()

		#monitorBusGJ.join()
		monitorBusLA.join()

		import pdb; pdb.set_trace()