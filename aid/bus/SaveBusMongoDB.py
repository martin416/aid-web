import pymongo
from datetime import datetime
from collections import namedtuple
import time

busDB = namedtuple('busDB','ordem, lat, long')

class SaveBusMongoDB:

	def __init__(self,street):
		self.street = street
		self.dafWeek = ['segunda','terca','quarta','quinta','sexta','sabado','domingo']
		self.startConnection()

	def  addRegisterDatabase(self,data, hora):
		
		print "..::Add register for "+ time.strftime("%H:%M") +" in Mongo::.."
		snapshotSave = {'street': self.street,'date': data,'time': hora,'dayOfWeek':self.dafWeek[datetime.today().weekday()]}
		
		busListIndo = []
		busListVindo = []
		busListParado = []

		snapshotSave["bus_indo"] = []
		snapshotSave["qtd_indo"] = 0
		snapshotSave["bus_vindo"] = []
		snapshotSave["qtd_vindo"] = 0
		snapshotSave["bus_parado"] = []
		snapshotSave["qtd_parado"] = 0
		self.mongoCollection.insert(snapshotSave)

	def startConnection(self):
		try:
			mongo=pymongo.MongoClient('127.0.0.1')
			mongo_db = mongo['aid']
			collectionName='bus_'+ self.street
			self.mongoCollection = mongo_db[collectionName]
		except pymongo.errors.ConnectionFailure, e:
				print "Could not connect to MongoDB"

	def saveBusOnDatabases(self, bus):
		if bus.sentido == 'INDO':
			self.mongoCollection.update({'time': bus.horaServidor , 'date': bus.dataServidor}, {'$inc':{'qtd_indo':+1},'$push': {'bus_indo':{'ordem':bus.ordem,'latitude':bus.latitude,'longitude':bus.longitude , 'velocidade': bus.velocidade }}}, True)
		elif bus.sentido == 'VINDO':
			self.mongoCollection.update({'time': bus.horaServidor , 'date': bus.dataServidor}, {'$inc':{'qtd_vindo':+1},'$push': {'bus_vindo':{'ordem':bus.ordem,'latitude':bus.latitude,'longitude':bus.longitude, 'velocidade': bus.velocidade}}}, True)
		elif bus.parado == 'PARADO':
			self.mongoCollection.update({'time': bus.horaServidor , 'date': bus.dataServidor}, {'$inc':{'qtd_parado':+1},'$push': {'bus_parado':{'ordem':bus.ordem,'latitude':bus.latitude,'longitude':bus.longitude, 'velocidade': bus.velocidade}}}, True)

	def mountBusList(self,busDictToSave,busListIndo,busListVindo,busListParado):
		for key in busDictToSave:
			value = {'ordem':busDictToSave[key].ordem,'latitude':busDictToSave[key].latitude,'longitude':busDictToSave[key].longitude}
			if busDictToSave[key].sentido == 'INDO':
				busListIndo.append(value)
			elif busDictToSave[key].sentido == 'VINDO':
				busListVindo.append(value)
			elif busDictToSave[key].sentido == 'PARADO':
				busListParado.append(value)