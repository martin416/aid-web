var indexLA = 0;
var indexGJ = 0;
var vector = new ol.layer.Vector();

window.setInterval(function(){ main() }, 5000);

function main(){
    //vector.destroy();
    linhaAmarela();
    grajau();
}

function linhaAmarela(){
    var url = "http://localhost:8000/getnextjson-la/"+indexLA+"/"
    var i = 0;
    var y = 1;
    $.getJSON( url, function( data ) {
        $.each(data.sectorIndo, function(idx, sector) {
            ctxLinhaAmarela.datasets[0].bars[i].value = sector.amountBus;
            $.each(sector.buses, function(idx, bus) {
                bus.latitude
            });
            i++;
        });
        i=0
        $.each(data.sectorVindo, function(idx, sector) {
            ctxLinhaAmarela.datasets[1].bars[i].value = sector.amountBus;
            i++;

        });
        $('#horarioLA').text(data.date + ' - ' + data.time)
        ctxLinhaAmarela.update();
        i  = 0;
    });
    if(indexLA < resultQtdLA - 1){
        indexLA++
    }else{
        indexLA = 0
    }
}

function grajau(){
    var url = "http://localhost:8000/getnextjson-gj/"+indexGJ+"/"
    var i = 0;
    var y = 1;
    $.getJSON( url, function( data ) {
        $.each(data.sectorIndo, function(idx, obj) {
            ctxGrajau.datasets[0].bars[i].value = obj.amountBus;
            i++;
        });
        i=0
        $.each(data.sectorVindo, function(idx, obj) {
            ctxGrajau.datasets[1].bars[i].value = obj.amountBus;
            i++;

        });
        ctxGrajau.update();
        $('#horarioGJ').text(data.date + ' - ' + data.time)
        i  = 0;
    });
    if(indexGJ < resultQtdLA - 1){
        indexGJ++
    }else{
        indexGJ = 0
    }
}
