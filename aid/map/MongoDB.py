#coding: utf-8
import pymongo

class MongoDB:

    def connect(self):
        try:
            self.mongo=pymongo.MongoClient('127.0.0.1')
        except pymongo.errors.ConnectionFailure, e:
            print "Could not connect to MongoDB: %s" % e
        mongo_db = self.mongo['aid']

        self.mongoLinhaAmarela = mongo_db['bus_linha_amarela']
        self.mongoGrajau = mongo_db['bus_grajau_jacarepagua']

    def retrieveGrajauObjectByHour(self,hora):
        hora = '^'+str(hora)+'.*'
        return self.mongoGrajau.find({'time': {'$regex':hora}}).sort([('date',1),('sense',1)])

    def retrieveLinhaAmarelaObjectByHour(self,hora):
        hora = '^'+str(hora)+'.*'
        return self.mongoLinhaAmarela.find({'time': {'$regex':hora}}).sort([('date',1),('time',1),('sense',1)])

    def retrieveAllLinhaAmarela(self):
        return self.mongoLinhaAmarela.find({}).sort([('date',1),('time',1),('sense',1)])

    def retrieveAllGrajau(self):
            return self.mongoGrajau.find({}).sort([('date',1),('time',1),('sense',1)])
