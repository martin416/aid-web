var map;

function init(){

    streetMarkLayer = mountStreetMark();

    map = new ol.Map({
        target: 'map',
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            }), streetMarkLayer
          ],
        view: new ol.View({
          center: ol.proj.transform([-43.209586899999980000,-22.903539300000000000], 'EPSG:4326', 'EPSG:3857'),
          zoom: 11
        })
    });
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

    iconFeature1 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.263409, -22.916916], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature2 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.269353, -22.915888], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature3 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.269439, -22.914979], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature4 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.26283, -22.916263], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature5 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.276348, -22.91741], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature6 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.276498, -22.916046], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature7 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.282549, -22.918892], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature8 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.283644, -22.917489], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature9 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.281198, -22.923892], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature10 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.284137, -22.923042], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature11 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.28933, -22.925987], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature12 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.289738, -22.924386], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature13 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.296754, -22.923378], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature14 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.296647, -22.922449], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature15 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.303084, -22.923536], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature16 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.302891, -22.922173], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature17 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.311067, -22.925198], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature18 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.311667, -22.924289], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature19 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.319521, -22.929151], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature20 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.320165, -22.927254], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature21 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.328018, -22.934289], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature22 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.330507, -22.932313], 'EPSG:4326', 'EPSG:3857'))});

    iconFeatureLa1 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.23369,-22.861585], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa2 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.240728,-22.868387], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa3 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.241501, -22.867794], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa4 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.234549, -22.859925], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa5 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.250856, -22.872855], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa6 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.250942, -22.871788], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa7 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.263946, -22.87246], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa8 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.263988, -22.871076], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa9 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.273516, -22.876374], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa10 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.273687, -22.875504], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa11 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.283987, -22.882621], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa12 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.284845, -22.88187], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa13 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.296132, -22.890885], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa14 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.29669, -22.889817], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa15 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.283987, -22.882621], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa16 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.284845, -22.88187], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa17 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.301926, -22.899424], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa18 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.303428, -22.899029], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa19 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.315187, -22.911244], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa20 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.316646, -22.91077], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa21 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.331151, -22.923023], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa22 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.331838, -22.92164], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa23 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.342309, -22.929268], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa24 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.343639, -22.928675], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa25 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.350871, -22.94158], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa26 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.352222, -22.940847], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa27 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.356686, -22.954365], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa28 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.3578872, -22.954563], 'EPSG:4326', 'EPSG:3857'))});

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
    iconFeatureLa27.setStyle(iconStyleFlagPink);
    iconFeatureLa28.setStyle(iconStyleFlagPink);

    var vectorSource = new ol.source.Vector({
      features: [iconFeature1,iconFeature2,iconFeature3,iconFeature4,iconFeature5,iconFeature6,iconFeature7,iconFeature8,iconFeature9,iconFeature10,iconFeature11,
                 iconFeature12,iconFeature13,iconFeature14,iconFeature15,iconFeature16,iconFeature17,iconFeature18,iconFeature19,iconFeature20,iconFeature21,iconFeature22,
                 iconFeatureLa1,iconFeatureLa2,iconFeatureLa3,iconFeatureLa4,iconFeatureLa5,iconFeatureLa6,iconFeatureLa7,iconFeatureLa8,iconFeatureLa9,
                 iconFeatureLa10,iconFeatureLa11,iconFeatureLa12,iconFeatureLa13,iconFeatureLa14,iconFeatureLa15,iconFeatureLa16,iconFeatureLa17,iconFeatureLa18,iconFeatureLa19,
                 iconFeatureLa20,iconFeatureLa21,iconFeatureLa22,iconFeatureLa23,iconFeatureLa24,iconFeatureLa25,iconFeatureLa26,iconFeatureLa27,iconFeatureLa28,]
    });

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource
    });

    return vectorLayer;
}


