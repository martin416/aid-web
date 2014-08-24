var map;

function init(){
    var iconFeature = new ol.Feature({
      geometry: new ol.geom.Point([0, 0]),
      name: 'Null Island',
      population: 4000,
      rainfall: 500
    });

    var iconStyle = new ol.style.Style({
      image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: DJANGO_STATIC_URL+'img/icon_bus.png'
      }))
    });

    iconFeature.setStyle(iconStyle);

    var vectorSource = new ol.source.Vector({
      features: [iconFeature]
    });

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource
    });

    map = new ol.Map({
        target: 'map',
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            }), vectorLayer
          ],
        view: new ol.View({
          center: ol.proj.transform([-43.209586899999980000,-22.903539300000000000], 'EPSG:4326', 'EPSG:3857'),
          zoom: 11
        })
    });
}

