/**
** Variaveis Globais
*/
var indexLA = 0;
var indexGJ = 0;
/**
** Funções
*/
window.setInterval(function(){ main() }, 10000);

/*função chamada a cada 10seg para atualizar o gráfico e mapa*/
function main(){
    handleLinhaAmarela();
    handleGrajau();
    
}

/*função chamada para controlar a linha amarela exibir seus pontos*/
function handleLinhaAmarela(){
    var url = "http://localhost:8000/map/getnextjson-la/"+indexLA+"/"
    getJson(url,'#horarioLA')
    if(indexLA < resultQtdLA - 1){
        indexLA++
    }else{
        indexLA = 0
    }
}

/*função chamada para controlar a grajaú exibir seus pontos*/
function handleGrajau(){
    var url = "http://localhost:8000/map/getnextjson-gj/"+indexGJ+"/"
    getJson(url,'#horarioGJ')
    if(indexGJ < resultQtdGJ - 1){
        indexGJ++
    }else{
        indexGJ = 0
    }
}

/*função que retorna o json que contem um snapshot da rodovia em dado instante*/
function getJson(url,tag){
    busListLA.length = 0;
    busListGJ.length = 0;
    $.getJSON( url, function( data ) {
        treatJson(data,tag)
        addBusLayer();
        updateChartLA();
        updateChartGJ();
    });
}

/*função que limpa os dados e os exibe na tela*/
function treatJson(snapshotJson,tag){
    var qtdBus = 0;
    $.each(snapshotJson.bus_indo, function(idx, bus) {
        bus.sentido = 'INDO'
        if(tag == '#horarioGJ'){
            busListGJ.push(bus)
        }else{
            busListLA.push(bus)
        }
       
    });
    $.each(snapshotJson.bus_parado, function(idx, bus) {
        bus.sentido = 'VINDO'
        if(tag == '#horarioGJ'){
            busListGJ.push(bus)
        }else{
            busListLA.push(bus)
        }
    });
    $.each(snapshotJson.bus_vindo, function(idx, bus) {
        bus.sentido = 'PARADO'
        if(tag == '#horarioGJ'){
            busListGJ.push(bus)
        }else{
            busListLA.push(bus)
        }
    });
    qtdBus = snapshotJson.qtd_indo + snapshotJson.qtd_vindo + snapshotJson.qtd_parado
    $(tag).text(snapshotJson.date + ' - ' + snapshotJson.time + '- qtd:' + qtdBus )
}
