var index = 0;

window.setInterval(function(){ main() }, 5000);

function main(){
    var url = "http://localhost:8000/getnextjson/"+index+"/"
        var i = 0;
        var y = 1;
    $.getJSON( url, function( data ) {
        $.each(data.sector, function(idx, obj) {
            console.log(i);
            ctxLinhaAmarela.datasets[0].bars[i].value = obj.amountBus;
            i++;

        });
        ctxLinhaAmarela.update();
        i  = 0;
        console.log( data.sector[0]);
    });
    if(index < resultQtd - 1){
        index++
    }else{
        index = 0
    }
}
