# -*- coding: utf-8 -*-
import Bus

class ConvertDataString2Bus:

    #"DATAHORA","ORDEM","LINHA","LATITUDE","LONGITUDE","VELOCIDADE"
    def string2Bus(self,gpsData):
        busGps = {}
        if "[[" in str(gpsData):
            gpsData = gpsData.split("],[")
            for text in gpsData:
                text = text[text.find("[[")+2:len(text)]
                text =  text[0:text.find("]]")]
                values = text.split(",")

                b = Bus.Bus();
                b.dataHora  = values[0]
                b.ordem  = values[1].replace('"','')
                b.linha  = values[2]
                b.latitude  = values[3]
                b.longitude  = values[4]
                b.velocidade  = values[5]
                busGps[b.ordem] =  b
        return busGps
