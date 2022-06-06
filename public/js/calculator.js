   // A point click event that uses the Renderer to draw a label next to the point
// On subsequent clicks, move the existing label instead of creating a new one.

Highcharts.chart('container', {

    chart: {
        scrollablePlotArea: {
            minWidth: 500
        },
    
    },
    legend: {
        enabled : false
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
        }
    },

    yAxis: [{ // left y axis
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: 10,
            y: 0,
            format: '{value:.,0f}',
            enabled: false
        },
        gridLineWidth: 0,
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
    data: [4, 4.4, 4.8, 5, 5.5, 5.9, 8, 10],
    color: '#D30000',
    lineWidth: 1
}, {
    name: 'Tabungan Biasa',
    data: [4, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2],
    color: 'purple',
    lineWidth: 1
    }]
});
