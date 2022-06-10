   // A point click event that uses the Renderer to draw a label next to the point
// On subsequent clicks, move the existing label instead of creating a new one.

Highcharts.chart('container', {

    chart: {
        scrollablePlotArea: {
            minWidth: 500
        },
        heigh: 1000,
        backgroundColor: "rgba(0,0,0,0)"
    
    },
    legend: {
        enabled : false
    },

    events: {
        load: function() {
          var chart = this,
            tickPositions = chart.yAxis[0].tickPositions,
            yAxis = chart.yAxis[0],
            yExtremes = yAxis.getExtremes(),
            newMin = yExtremes.dataMin - 5,
            newMax = yExtremes.dataMax + 5;

          if (newMax - tickPositions[tickPositions.length - 1] < 5) {
            tickPositions.pop();
          }
          tickPositions.push(newMax);

          yAxis.setExtremes(newMin, newMax, true, false);
          yAxis.update({
            tickPositions: tickPositions
          });
        }
      },

    credits: {
        enabled: false
    },

    title: {
        text: null
    },


    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        ,
        crosshair: {
            width: 1,
            color: 'gray'
        },
        labels: {
            align: 'left',
            x: 10,
            y: 30,
            format: '{value:.,0f}',
            enabled: true,
            style: {
                fontSize: 15
            }
        },
    },

    yAxis: [{ // left y axis
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: 0,
            y: 0,
            format: '{value:.,0f}',
            enabled: false
        },
        gridLineWidth: 1,
        showFirstLabel: false
    }],

    tooltip: {
        shared: true,
        crosshairs: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: false,
            },
            labels: {
                enabled: false
            },
            cursor: 'pointer',
            className: 'popup-on-click',
            marker: {
                enabled: false,
                lineWidth: 1
            },
            poinStart: 4,
            yAxis: 0
        }
    },

    series: [{name: 'Investasi di Sinarmas',
    data: [7, 7.4, 7.8, 8, 8.5, 8.9, 9.5, 10],
    color: '#D30000',
    lineWidth: 2
}, {
    name: 'Deposito',
    data: [7, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.8],
    color: 'grey',
    lineWidth: 2
    }, {
        name: 'Tabungan Biasa',
        data: [7, 7, 7, 7, 7.1, 7.1, 7.1, 7.1],
        color: 'orange',
        lineWidth: 2
        }]
});
