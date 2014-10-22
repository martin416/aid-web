/**
** Variaveis Globais
*/
var busListLA = [];
var busListGJ = [];

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
    drawChart();
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

    var iconStyleBusParado = new ol.style.Style({
      image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: DJANGO_STATIC_URL+'img/icon_bus.png'
      }))
    });

    var busFeature = new ol.source.Vector({});
    for (i = 0; i <  busListGJ.length; i++) {
        iconFeature = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([ parseFloat(busListGJ[i].longitude),  parseFloat(busListGJ[i].latitude)], 'EPSG:4326', 'EPSG:3857'))});
        if(busListGJ[i].sentido == 'INDO'){
            iconFeature.setStyle(iconStyleBusIndo);    
        } else if (busListGJ[i].sentido == 'VINDO'){
            iconFeature.setStyle(iconStyleBusVindo);    
        } else if (busListGJ[i].sentido == 'PARADO'){
            iconFeature.setStyle(iconStyleBusParado);    
        }    
        busFeature.addFeature(iconFeature);
    }

    for (i = 0; i <  busListLA.length; i++) {
        iconFeature = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([ parseFloat(busListLA[i].longitude),  parseFloat(busListLA[i].latitude)], 'EPSG:4326', 'EPSG:3857'))});
        if(busListLA[i].sentido == 'INDO'){
            iconFeature.setStyle(iconStyleBusIndo);    
        } else if (busListLA[i].sentido == 'VINDO'){
            iconFeature.setStyle(iconStyleBusVindo);    
        } else if (busListLA[i].sentido == 'PARADO'){
            iconFeature.setStyle(iconStyleBusParado);    
        }    
        busFeature.addFeature(iconFeature);
    }
    var busLayer = new ol.layer.Vector({source: busFeature});
    map.addLayer(busLayer);
}

function mountStreetMark(){

    var vectorSource = new ol.source.Vector({});
    var vectorLayer = new ol.layer.Vector({source: vectorSource});
    return vectorLayer;
}


