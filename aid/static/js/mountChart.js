var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var ctxLinhaAmarela
var barChartDataLA = {
    labels : ["Sector1","Sector2","Sector3","Sector4","Sector5","Sector6","Sector7","Sector8","Sector9","Sector10","Secto11","Sector12","Sector13"],
    datasets : [
        {
            label: "Indo",
            fillColor : "rgba(178,178,178,0.8)",
            strokeColor : "rgba(178,178,178,0.9)",
            highlightFill: "rgba(178,178,178,0.75)",
            highlightStroke: "rgba(178,178,178,1)",
            data : [0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
            label: "Vindo",
            fillColor : "rgba(247,5,5,0.8)",
            strokeColor : "rgba(247,5,5,0.9)",
            highlightFill: "rgba(247,5,5,0.75)",
            highlightStroke: "rgba(247,5,5,1)",
            data : [0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
            fillColor : "rgba(255,255,255,0.0)",
            strokeColor : "rgba(255,255,255,0.0)",
            highlightFill: "rgba(255,255,255,0.0)",
            highlightStroke: "rgba(255,255,255,0.0)",
            data : [10,10,10,10,10,10,10,10,10,10,10,10,10]
        }
    ]

}

var barChartDataGJ = {
    labels : ["Sector1","Sector2","Sector3","Sector4","Sector5","Sector6","Sector7","Sector8","Sector9","Sector10"],
    datasets : [
        {
            label: "Indo",
            fillColor : "rgba(178,178,178,0.8)",
            strokeColor : "rgba(178,178,178,0.9)",
            highlightFill: "rgba(178,178,178,0.75)",
            highlightStroke: "rgba(178,178,178,1)",
            data : [0,0,0,0,0,0,0,0,0,0]
        },
        {
            label: "Vindo",
            fillColor : "rgba(247,5,5,0.8)",
            strokeColor : "rgba(247,5,5,0.9)",
            highlightFill: "rgba(247,5,5,0.75)",
            highlightStroke: "rgba(247,5,5,1)",
            data : [0,0,0,0,0,0,0,0,0,0]
        },
        {
            fillColor : "rgba(255,255,255,0.0)",
            strokeColor : "rgba(255,255,255,0.0)",
            highlightFill: "rgba(255,255,255,0.0)",
            highlightStroke: "rgba(255,255,255,0.0)",
            data : [10,10,10,10,10,10,10,10,10,10]
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
