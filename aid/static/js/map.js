/**
** Variaveis Globais
*/
var busLat = [];
var busLong = [];
var busSentido = []

/*mapa da tela como variável global*/
var map = new ol.Map({
    target: 'map',
    view: new ol.View({
      center: ol.proj.transform([-43.295574,-22.90469], 'EPSG:4326', 'EPSG:3857'),
      zoom: 13
    })
});

/**
** Funções
*/

/*  */
function init(){
    streetMarkLayer = mountStreetMark();
    map.addLayer(new ol.layer.Tile({source: new ol.source.OSM()}));
    map.addLayer(streetMarkLayer);
    map.addLayer(streetMarkLayer);
    drawChart()
    main()
}

function addBusLayer(){
    var featuresArray = [];
    var layerToRemove = map.getLayers().item(2)
    map.removeLayer(layerToRemove)

    var iconStyleBusIndo  = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: DJANGO_STATIC_URL+'img/blue_bus_icon.png'
      }))
    });

    var iconStyleBusVindo = new ol.style.Style({
      image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: DJANGO_STATIC_URL+'img/red_bus_icon.png'
      }))
    });

    var busFeature = new ol.source.Vector({});
    for (i = 0; i <  busLat.length; i++) {
        iconFeature = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([ parseFloat(busLong[i]),  parseFloat(busLat[i])], 'EPSG:4326', 'EPSG:3857'))});
        if(busSentido[i] == 'INDO' ){
            iconFeature.setStyle(iconStyleBusIndo)
        }else{
            iconFeature.setStyle(iconStyleBusVindo)
        }
        busFeature.addFeature(iconFeature);
    }
    var busLayer = new ol.layer.Vector({source: busFeature});
    map.addLayer(busLayer);

}

function mountStreetMark(){
    var iconStyleFlagBlue  = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: DJANGO_STATIC_URL+'img/flag_blue.png'
      }))
    });

    var iconStyleFlagPink  = new ol.style.Style({
      image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: DJANGO_STATIC_URL+'img/flag_pink.png'
      }))
    });


    iconFeature1 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.263313,-22.916879], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature2 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.264493,-22.915317], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature3 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.264321,-22.914448], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature4 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.262776,-22.916345], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature5 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.27166,-22.916187], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature6 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.271917,-22.915515], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature7 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.278741,-22.917946], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature8 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.279341,-22.91678], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature9 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.283097,-22.918578], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature10 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.283848,-22.916879], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature11 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.281316,-22.923401], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature12 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.285328,-22.921859], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature13 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.286154,-22.927099], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature14 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.288901,-22.92457], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature15 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.297312,-22.924016], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature16 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.297527,-22.922277], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature17 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.309886,-22.924214], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature18 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.310015,-22.922317], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature19 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.317955,-22.929115], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature20 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.319929,-22.926585], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature21 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.327482,-22.934055], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature22 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.330572,-22.93204], 'EPSG:4326', 'EPSG:3857'))});

    iconFeatureLa1 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.233669,-22.860173], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa2 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.238218,-22.863317], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa3 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.239012,-22.862704], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa4 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.234291,-22.859679], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa5 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.2406,-22.86824], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa6 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.241801,-22.867805], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa7 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.24914,-22.87251], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa8 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.250213,-22.871561], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa9 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.262143,-22.872589], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa10 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.262315,-22.870889], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa11 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.272915,-22.876385], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa12 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.273473,-22.875357], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa13 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.28609,-22.883463], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa14 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.287978,-22.882197], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa15 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.297763,-22.892872], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa16 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.299823,-22.891765], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa17 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.304029,-22.906314], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa18 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.306003,-22.905049], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa19 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.311496,-22.909397], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa20 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.314843,-22.906867], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa21 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.322825,-22.91841], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa22 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.324027,-22.917184], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa23 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.347266,-22.937099], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa24 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.348467,-22.936427], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa25 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.355184,-22.949554], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa26 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.356814,-22.94908], 'EPSG:4326', 'EPSG:3857'))});

    iconFeature1.setStyle(iconStyleFlagBlue);
    iconFeature2.setStyle(iconStyleFlagBlue);
    iconFeature3.setStyle(iconStyleFlagBlue);
    iconFeature4.setStyle(iconStyleFlagBlue);
    iconFeature5.setStyle(iconStyleFlagBlue);
    iconFeature6.setStyle(iconStyleFlagBlue);
    iconFeature7.setStyle(iconStyleFlagBlue);
    iconFeature8.setStyle(iconStyleFlagBlue);
    iconFeature9.setStyle(iconStyleFlagBlue);
    iconFeature10.setStyle(iconStyleFlagBlue);
    iconFeature11.setStyle(iconStyleFlagBlue);
    iconFeature12.setStyle(iconStyleFlagBlue);
    iconFeature13.setStyle(iconStyleFlagBlue);
    iconFeature14.setStyle(iconStyleFlagBlue);
    iconFeature15.setStyle(iconStyleFlagBlue);
    iconFeature16.setStyle(iconStyleFlagBlue);
    iconFeature17.setStyle(iconStyleFlagBlue);
    iconFeature18.setStyle(iconStyleFlagBlue);
    iconFeature19.setStyle(iconStyleFlagBlue);
    iconFeature20.setStyle(iconStyleFlagBlue);
    iconFeature21.setStyle(iconStyleFlagBlue);
    iconFeature22.setStyle(iconStyleFlagBlue);

    iconFeatureLa1.setStyle(iconStyleFlagPink);
    iconFeatureLa2.setStyle(iconStyleFlagPink);
    iconFeatureLa3.setStyle(iconStyleFlagPink);
    iconFeatureLa4.setStyle(iconStyleFlagPink);
    iconFeatureLa5.setStyle(iconStyleFlagPink);
    iconFeatureLa6.setStyle(iconStyleFlagPink);
    iconFeatureLa7.setStyle(iconStyleFlagPink);
    iconFeatureLa8.setStyle(iconStyleFlagPink);
    iconFeatureLa9.setStyle(iconStyleFlagPink);
    iconFeatureLa10.setStyle(iconStyleFlagPink);
    iconFeatureLa11.setStyle(iconStyleFlagPink);
    iconFeatureLa12.setStyle(iconStyleFlagPink);
    iconFeatureLa13.setStyle(iconStyleFlagPink);
    iconFeatureLa14.setStyle(iconStyleFlagPink);
    iconFeatureLa15.setStyle(iconStyleFlagPink);
    iconFeatureLa16.setStyle(iconStyleFlagPink);
    iconFeatureLa17.setStyle(iconStyleFlagPink);
    iconFeatureLa18.setStyle(iconStyleFlagPink);
    iconFeatureLa19.setStyle(iconStyleFlagPink);
    iconFeatureLa20.setStyle(iconStyleFlagPink);
    iconFeatureLa21.setStyle(iconStyleFlagPink);
    iconFeatureLa22.setStyle(iconStyleFlagPink);
    iconFeatureLa23.setStyle(iconStyleFlagPink);
    iconFeatureLa24.setStyle(iconStyleFlagPink);
    iconFeatureLa25.setStyle(iconStyleFlagPink);
    iconFeatureLa26.setStyle(iconStyleFlagPink);


    var vectorSource = new ol.source.Vector({
      features: [
                iconFeature1,iconFeature2,iconFeature3,iconFeature4,iconFeature5,iconFeature6,
                iconFeature7,iconFeature8,iconFeature9,iconFeature10,iconFeature11,iconFeature12,
                iconFeature13,iconFeature14,iconFeature15,iconFeature16,iconFeature17,iconFeature18,
                iconFeature19,iconFeature20,iconFeature21,iconFeature22,
                iconFeatureLa1,iconFeatureLa2,iconFeatureLa3,iconFeatureLa4,iconFeatureLa5,
                iconFeatureLa6,iconFeatureLa7,iconFeatureLa8,iconFeatureLa9,iconFeatureLa10,
                iconFeatureLa11,iconFeatureLa12,iconFeatureLa13,iconFeatureLa14,iconFeatureLa15,
                iconFeatureLa16,iconFeatureLa17,iconFeatureLa18,iconFeatureLa19,iconFeatureLa20,
                iconFeatureLa21,iconFeatureLa22,iconFeatureLa23,iconFeatureLa24,iconFeatureLa25,
                iconFeatureLa26
               ]
    });

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource
    });

    return vectorLayer;
}


