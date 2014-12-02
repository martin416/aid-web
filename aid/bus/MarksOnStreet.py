# -*- coding: utf-8 -*-
from collections import namedtuple
from pprint import pprint as pp
import sys

Pt = namedtuple('Pt', 'x, y')               # Point
Edge = namedtuple('Edge', 'a, b')           # Polygon edge from a to b
Poly = namedtuple('Poly', 'name, edges')    # Polygon
Street = namedtuple('Street', 'marks, reference')

class MarksOnStreet:

    def __init__(self):
        self.polys = Street(marks=[
            Poly(name='square', edges=(
                Edge(a=Pt(x=-22.916345, y=-43.262776), b=Pt(x=-22.916879, y=-43.263313)),
                Edge(a=Pt(x=-22.916879, y=-43.263313), b=Pt(x=-22.915317, y=-43.264493)),
                Edge(a=Pt(x=-22.915317, y=-43.264493), b=Pt(x=-22.914448, y=-43.264321)),
                Edge(a=Pt(x=-22.914448, y=-43.264321), b=Pt(x=-22.916345, y=-43.262776))
            )),
            Poly(name='square', edges=(
                Edge(a=Pt(x=-22.914311, y=-43.266821), b=Pt(x=-22.916999, y=-43.264418)),
                Edge(a=Pt(x=-22.916999, y=-43.264418), b=Pt(x=-22.928857, y=-43.286047)),
                Edge(a=Pt(x=-22.928857, y=-43.286047), b=Pt(x=-22.920161, y=-43.29154)),
                Edge(a=Pt(x=-22.920161, y=-43.29154),  b=Pt(x=-22.914311, y=-43.266821))
            )), 
            Poly(name='square', edges=(
                Edge(a=Pt(x=-22.858631, y=-43.234763), b=Pt(x=-22.863388, y=-43.234034)),
                Edge(a=Pt(x=-22.863388, y=-43.234034), b=Pt(x=-22.905773, y=-43.30184)),
                Edge(a=Pt(x=-22.905773, y=-43.30184),  b=Pt(x=-22.901661, y=-43.30802)),
                Edge(a=Pt(x=-22.901661, y=-43.30802),  b=Pt(x=-22.858631, y=-43.23476))
            )),
            Poly(name='square', edges=(
                Edge(a=Pt(x=-22.901661, y=-43.30802),  b=Pt(x=-22.905773, y=-43.30184)),
                Edge(a=Pt(x=-22.905773, y=-43.30184),  b=Pt(x=-22.953676, y=-43.354883)),
                Edge(a=Pt(x=-22.953676, y=-43.354883), b=Pt(x=-22.952411, y=-43.361063)),
                Edge(a=Pt(x=-22.952411, y=-43.361063),  b=Pt(x=-22.901661, y=-43.30802))
            )),         
        ],reference='MAIOR')
