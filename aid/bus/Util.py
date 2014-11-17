# -*- coding: utf-8 -*-
import datetime
class Util:

	def compareDictWithBus(self,dict1,dict2):
		for key in dict1:
			if key in dict2:
				dt_obj1 = datetime.datetime.strptime(dict1[key].dataHora, '%m-%d-%Y %H:%M:%S\"')
				dt_obj2 = datetime.datetime.strptime(dict2[key].dataHora, '%m-%d-%Y %H:%M:%S\"')
				if dt_obj2-dt_obj1 > datetime.timedelta(0):
					return False
		return True

	def setDirection(self,dict1,dict2):
		for key in dict1:
			if key in dict2:
				if float(dict1[key].latitude) > float(dict2[key].latitude) and float(dict1[key].longitude) > float(dict2[key].longitude) :
					dict1[key].sentido = "INDO"
				elif float(dict1[key].latitude) < float(dict2[key].latitude) and float(dict1[key].longitude) < float(dict2[key].longitude) :
					dict1[key].sentido = "VINDO"
				else:
					dict1[key].sentido = "PARADO"