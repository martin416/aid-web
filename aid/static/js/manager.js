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
    var url = "http://localhost:8000/getnextjson-la/"+indexLA+"/"
    getJson(url,ctxLinhaAmarela,'#horarioLA')
    if(indexLA < resultQtdLA - 1){
        indexLA++
    }else{
        indexLA = 0
    }
    console.log("Passou")
}

/*função chamada para controlar a grajaú exibir seus pontos*/
function handleGrajau(){
    var url = "http://localhost:8000/getnextjson-gj/"+indexGJ+"/"
    getJson(url,ctxGrajau,'#horarioGJ')
    if(indexGJ < resultQtdLA - 1){
        indexGJ++
    }else{
        indexGJ = 0
    }
}

/*função que retorna o json que contem um snapshot da rodovia em dado instante*/
function getJson(url,chart,tag){
    busLat.length = 0;
    busLong.length = 0;
    busSentido.length = 0;
    qtdBusLa = 0;
    qtdBusGj = 0;
    $.getJSON( url, function( data ) {
        treatJson(data,chart,tag)
        addBusLayer();
    });
}

/*função que limpa os dados e os exibe na tela*/
function treatJson(snapshotJson,chart,tag){
    var i = 0;
    var qtdBus = 0;
    $.each(snapshotJson.sectorIndo, function(idx, sector) {
        $.each(sector.buses, function(idy, bus) {
           busLat.push(bus.latitude);
           busLong.push(bus.longitude);
           busSentido.push('INDO');
        });
        qtdBus += sector.amountBus;
        chart.datasets[0].bars[i].value = sector.amountBus;
        i++;
    });
    i=0

    $.each(snapshotJson.sectorVindo, function(idx, sector) {
        $.each(sector.buses, function(idy, bus) {
           busLat.push(bus.latitude);
           busLong.push(bus.longitude);
           busSentido.push('VINDO');
        });
        qtdBus += sector.amountBus
        chart.datasets[1].bars[i].value = sector.amountBus;
        i++;
    });
    chart.update();
    $(tag).text(snapshotJson.date + ' - ' + snapshotJson.time + '- qtd:' + qtdBus)
}
