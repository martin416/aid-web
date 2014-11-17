# -*- coding: utf-8 -*-
class Bus:

    def __init__(self):
        #Data e Hora da posicao do onibus
        self.dataHora =""
        # Numeracao do onibus
        self.ordem=""
        #Linha do onibus
        self.linha=""
        # Latitude da posicao do GPS
        self.latitude=""
        # Longitude da posicao do GPS
        self.longitude=""
        # Velocidade do onibus
        self.velocidade=""
        # Velocidade do onibus
        self.sentido=""
        # rua que se encontra o onibus
        self.street=""
        self.streetAndroid=""
        #hora Servidor
        self.horaServidor = ""
        #data Servidor
        self.dataServidor = ""
        #Armazeno o setor da rua que se encontra o onibus
        self.sectorList = []

    def listHasTwoDifferentSectors(self):
        aux = -1
        for sector in self.sectorList:
            if aux != -1:
                if aux != self.sectorList:
                    return True
            else:
                aux = sector.sectorNumber
        return False
