google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
var chartLA;
var chartGJ;

var options = {
    hAxis: {title: 'latitude', minValue:-22.940788 , maxValue:-22.859192},
    vAxis: {title: 'longitude', minValue: -43.346043, maxValue: -43.219357},
    legend: 'none'
  };

function drawChart() {
  var data = google.visualization.arrayToDataTable([['latitude', 'longitude'],[-22.906736,-43.307419]]);

  chartLA = new google.visualization.ScatterChart(document.getElementById('chart_div_la'));
  chartLA.draw(data, options);

  chartLA = new google.visualization.ScatterChart(document.getElementById('chart_div_gj'));
  chartLA.draw(data, options);
}


function updateChartLA(){
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'latitude');
  data.addColumn('number', 'longitude');
  for (i = 0; i <  busListLA.length; i++) {  
    data.addRow([parseFloat(busListLA[i].latitude),  parseFloat(busListLA[i].longitude)]);
  }
  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div_la'));
  chart.draw(data, options);
}

function updateChartGJ(){
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'latitude');
  data.addColumn('number', 'longitude');
  for (i = 0; i <  busListGJ.length; i++) {  
    data.addRow([parseFloat(busListGJ[i].latitude),  parseFloat(busListGJ[i].longitude)]);
  }
  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div_gj'));
  chart.draw(data, options);
}