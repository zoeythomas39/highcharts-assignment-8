// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic 

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Kiwis','Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Rory and Lorelai\'s house'
      }
    },
    series: [{
      name: 'Rory',
      data: [6, 1, 0, 4]
    }, {
      name: 'Lorelai',
      data: [6, 5, 7, 3]
    }]
  });
