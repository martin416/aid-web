var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var ctxLinhaAmarela
var barChartDataLA = {
    labels : ["Sector1","Sector2","Sector3","Sector4","Sector5","Sector6","Sector7","Sector8","Sector9","Sector10","Secto11","Sector12"
              ,"Sector13","Sector14","Secto15","Sector16","Sector17"],
    datasets : [
        {
            label: "Indo",
            fillColor : "rgba(5,18,255,0.8)",
            strokeColor : "rgba(5,18,255,0.9)",
            highlightFill: "rgba(5,18,255,0.75)",
            highlightStroke: "rgba(5,18,255,1)",
            data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
            label: "Vindo",
            fillColor : "rgba(255,5,5,0.8)",
            strokeColor : "rgba(255,5,5,0.9)",
            highlightFill: "rgba(255,5,5,0.75)",
            highlightStroke: "rgba(255,5,5,1)",
            data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
            fillColor : "rgba(255,255,255,0.0)",
            strokeColor : "rgba(255,255,255,0.0)",
            highlightFill: "rgba(255,255,255,0.0)",
            highlightStroke: "rgba(255,255,255,0.0)",
            data : [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
        }
    ]

}

var barChartDataGJ = {
    labels : ["Sector1","Sector2","Sector3","Sector4","Sector5","Sector6","Sector7","Sector8","Sector9","Sector10"
              ,"Sector11","Sector12","Sector13","Sector14","Sector15","Sector16","Sector17","Sector18","Sector19",
               "Sector20","Sector21","Sector22","Sector23","Sector24","Sector25"],
    datasets : [
        {
            label: "Indo",
            fillColor : "rgba(5,18,255,0.8)",
            strokeColor : "rgba(5,18,255,0.9)",
            highlightFill: "rgba(5,18,255,0.75)",
            highlightStroke: "rgba(5,18,255,1)",
            data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
            label: "Vindo",
            fillColor : "rgba(255,5,5,0.8)",
            strokeColor : "rgba(255,5,5,0.9)",
            highlightFill: "rgba(255,5,5,0.75)",
            highlightStroke: "rgba(255,5,5,1)",
            data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
            fillColor : "rgba(255,255,255,0.0)",
            strokeColor : "rgba(255,255,255,0.0)",
            highlightFill: "rgba(255,255,255,0.0)",
            highlightStroke: "rgba(255,255,255,0.0)",
            data : [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
        }
    ]

}

function drawChart(){
    var ctx = document.getElementById("myChartLA").getContext("2d");
    ctxLinhaAmarela = new Chart(ctx).Bar(barChartDataLA, {
        responsive : true,
        scaleFontSize: 16,
        scaleSteps: 1,
        barValueSpacing : 2,
        scaleGridLineWidth : 1,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    });
    var ctx = document.getElementById("myChartGJ").getContext("2d");
    ctxGrajau = new Chart(ctx).Bar(barChartDataGJ, {
        responsive : true,
        scaleFontSize: 16,
        scaleSteps: 1,
        barValueSpacing : 2,
        scaleGridLineWidth : 1,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    });
}
