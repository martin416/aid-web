# -*- coding: utf-8 -*-
import MarksOnStreet
import MonitorBus
import threading


class aid(threading.Thread):
	def __init__(self,busQueue):
		threading.Thread.__init__(self)
		self.busQueue = busQueue
		self.streetPolys = MarksOnStreet.MarksOnStreet()
		self.monitorBus = MonitorBus.MonitorBus(self.streetPolys.polys.marks,self.busQueue)

	def run(self):
		if len(self.busQueue) == 0:
			self.monitorBus.mountQueue()
			print "..:: Tamanho Fila -> " + str(len(self.busQueue))
		threading.Timer(120, self.run).start()