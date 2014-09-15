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

    iconFeature1 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.263484,-22.916701], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature2 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.264471,-22.915317], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature3 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.263956,-22.914566], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature4 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.262755,-22.916286], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature5 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.266896,-22.915831], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature6 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.267111,-22.914981], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature7 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.270823,-22.916029], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature8 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.270909,-22.915436], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature9 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.274041,-22.916958], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature10 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.274921,-22.91591], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature11 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.27947,-22.917867], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature12 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.279535,-22.916898], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature13 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.281337,-22.917274], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature14 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.281766,-22.916384], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature15 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.282946,-22.91846], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature16 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.28432,-22.918361], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature17 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.28447,-22.921227], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature18 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.285371,-22.921602], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature19 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.282152,-22.922452], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature20 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.283204,-22.922946], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature21 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.282152,-22.922452], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature22 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.283204,-22.922946], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature23 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.281509,-22.924408], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature24 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.283869,-22.923401], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature25 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.285586,-22.926068], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature26 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.285843,-22.92508], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature27 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.290178,-22.925792], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature28 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.28977,-22.924586], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature29 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.290178,-22.925792], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature30 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.28977,-22.924586], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature31 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.293504,-22.924843], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature32 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.293096,-22.923401], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature33 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.297538,-22.92342], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature34 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.29758,-22.922511], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature35 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.301507,-22.92342], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature36 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.301829,-22.922452], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature37 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.305305,-22.923223], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature38 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.305413,-22.922175], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature39 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.309876,-22.923677], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature40 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.310369,-22.922689], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature41 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.312064,-22.925357], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature42 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.313352,-22.923776], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature43 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.315476,-22.926978], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature44 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.316206,-22.926266], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature45 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.319961,-22.929191], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature46 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.320798,-22.927551], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature47 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.322707,-22.930871], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature48 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.323437,-22.929981], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature49 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.326076,-22.93259], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature50 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.327643,-22.931246], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature51 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.328179,-22.93427], 'EPSG:4326', 'EPSG:3857'))});
    iconFeature52 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.330604,-22.932294], 'EPSG:4326', 'EPSG:3857'))});

    iconFeatureLa1 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.235192,-22.85954], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa2 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.23442,-22.861715], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa3 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.241372,-22.866302], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa4 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.23957,-22.867805], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa5 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.249011,-22.872708], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa6 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.250299,-22.871285], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa7 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.261456,-22.873262], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa8 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.263001,-22.870415], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa9 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.271842,-22.876583], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa10 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.273129,-22.874922], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa11 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.279481,-22.881407], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa12 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.281283,-22.879904], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa13 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.288493,-22.884412], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa14 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.291154,-22.883779], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa15 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.297763,-22.893031], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa16 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.299479,-22.891686], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa17 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.303256,-22.902993], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa18 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.304715,-22.901886], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa19 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.306775,-22.908369], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa20 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.30832,-22.906235], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa21 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.313642,-22.909081], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa22 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.315358,-22.907974], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa23 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.319049,-22.916433], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa24 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.320079,-22.914931], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa25 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.331666,-22.923548], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa26 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.332438,-22.92173], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa27 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.34085,-22.928212], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa28 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.342738,-22.927264], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa29 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.345571,-22.935564], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa30 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.347459,-22.935168], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa31 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.351772,-22.94246], 'EPSG:4326', 'EPSG:3857'))});
    iconFeatureLa32 = new ol.Feature({geometry: new ol.geom.Point(ol.proj.transform([-43.352737,-22.942183], 'EPSG:4326', 'EPSG:3857'))});


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
    iconFeature23.setStyle(iconStyleFlagBlue);
    iconFeature24.setStyle(iconStyleFlagBlue);
    iconFeature25.setStyle(iconStyleFlagBlue);
    iconFeature26.setStyle(iconStyleFlagBlue);
    iconFeature27.setStyle(iconStyleFlagBlue);
    iconFeature28.setStyle(iconStyleFlagBlue);
    iconFeature30.setStyle(iconStyleFlagBlue);
    iconFeature31.setStyle(iconStyleFlagBlue);
    iconFeature32.setStyle(iconStyleFlagBlue);
    iconFeature33.setStyle(iconStyleFlagBlue);
    iconFeature34.setStyle(iconStyleFlagBlue);
    iconFeature35.setStyle(iconStyleFlagBlue);
    iconFeature36.setStyle(iconStyleFlagBlue);
    iconFeature37.setStyle(iconStyleFlagBlue);
    iconFeature38.setStyle(iconStyleFlagBlue);
    iconFeature39.setStyle(iconStyleFlagBlue);
    iconFeature40.setStyle(iconStyleFlagBlue);
    iconFeature41.setStyle(iconStyleFlagBlue);
    iconFeature42.setStyle(iconStyleFlagBlue);
    iconFeature43.setStyle(iconStyleFlagBlue);
    iconFeature44.setStyle(iconStyleFlagBlue);
    iconFeature45.setStyle(iconStyleFlagBlue);
    iconFeature46.setStyle(iconStyleFlagBlue);
    iconFeature47.setStyle(iconStyleFlagBlue);
    iconFeature48.setStyle(iconStyleFlagBlue);
    iconFeature49.setStyle(iconStyleFlagBlue);
    iconFeature50.setStyle(iconStyleFlagBlue);
    iconFeature51.setStyle(iconStyleFlagBlue);
    iconFeature52.setStyle(iconStyleFlagBlue);

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
    iconFeatureLa29.setStyle(iconStyleFlagPink);
    iconFeatureLa30.setStyle(iconStyleFlagPink);
    iconFeatureLa31.setStyle(iconStyleFlagPink);
    iconFeatureLa32.setStyle(iconStyleFlagPink);

    var vectorSource = new ol.source.Vector({
      features: [
                iconFeature1,iconFeature2,iconFeature3,iconFeature4,iconFeature5,iconFeature6,
                iconFeature7,iconFeature8,iconFeature9,iconFeature10,iconFeature11,iconFeature12,
                iconFeature13,iconFeature14,iconFeature15,iconFeature16,iconFeature17,iconFeature18,
                iconFeature19,iconFeature20,iconFeature21,iconFeature22,iconFeature23,iconFeature24,
                iconFeature25,iconFeature26,iconFeature27,iconFeature28,iconFeature30,iconFeature31,
                iconFeature32,iconFeature33,iconFeature34,iconFeature35,iconFeature36,iconFeature37,
                iconFeature38,iconFeature39,iconFeature40,iconFeature41,iconFeature42,iconFeature43,
                iconFeature44,iconFeature45,iconFeature46,iconFeature47,iconFeature48,iconFeature49,
                iconFeature50,iconFeature51,iconFeature52,
                iconFeatureLa1,iconFeatureLa2,iconFeatureLa3,iconFeatureLa4,iconFeatureLa5,
                iconFeatureLa6,iconFeatureLa7,iconFeatureLa8,iconFeatureLa9,iconFeatureLa10,
                iconFeatureLa11,iconFeatureLa12,iconFeatureLa13,iconFeatureLa14,iconFeatureLa15,
                iconFeatureLa16,iconFeatureLa17,iconFeatureLa18,iconFeatureLa19,iconFeatureLa20,
                iconFeatureLa21,iconFeatureLa22,iconFeatureLa23,iconFeatureLa24,iconFeatureLa25,
                iconFeatureLa26,iconFeatureLa27,iconFeatureLa28,iconFeatureLa29,iconFeatureLa30,
                iconFeatureLa31,iconFeatureLa32

               ]
    });

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource
    });

    return vectorLayer;
}


