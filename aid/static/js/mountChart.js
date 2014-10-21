google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
var chartLA;

var options = {
    hAxis: {title: 'latitude', minValue:-22.940788 , maxValue:-22.859192},
    vAxis: {title: 'longitude', minValue: -43.346043, maxValue: -43.219357},
    legend: 'none'
  };

function drawChart() {
  var data = google.visualization.arrayToDataTable([['latitude', 'longitude'],[-22.906736,-43.307419]]);

  chartLA = new google.visualization.ScatterChart(document.getElementById('chart_div_la'));
  chartLA.draw(data, options);
}


function updateChart(){
  console.log(busList.length)
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'latitude');
  data.addColumn('number', 'longitude');
  for (i = 0; i <  busList.length; i++) {  
    data.addRow([parseFloat(busList[i].latitude),  parseFloat(busList[i].longitude)]);
  }
  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div_la'));
  chart.draw(data, options);
}