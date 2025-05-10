Highcharts.chart('container', {

    title: {
        text: 'Women in Government Over Time',
        align: 'left'
    },

    subtitle: {
        text: 'Percent of parliament seats held by women, 2000-2023. By Region. Source: <a href="https://data.un.org/default.aspx">United Nations</a>.',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Percent Female Parlimentarians'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2000 to 2020'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                enabled: false
            },
            pointStart: 2000,
            pointInterval: 5,
        }
    },

    series: [{
        name: 'Northern Africa',
        data: [
            5.4,	10.8,	13.2,	24.6,	20.1,	20.48
        ]
    }, {
        name: 'Sub-Saharan Africa',
        data: [
            11.5,	14.4,	18.4,	22.6,	24.3,	26.5
        ]
    }, {
        name: 'Northern America',
        data: [
            16.3,	17.5,	19,	21.8,	25.9,	30
        ]
    }, {
        name: 'Latin America & the Caribbean',
        data: [
            15.2,	19,	22.7,	27.4,	32.1,	35.8
        ]
    }, {
        name: 'Asia',
        data: [
            12.1,	13.3,	16.8,	17.8,	19.5,	20.2
        ]
    }, {
        name: 'Europe',
        data: [
           16.8,	20.5,	23.2,	26.7,	31.4,	32.4
        ]
    }, {
        name: 'Oceania',
        data: [
           11.3,	11.2,	13.2,	13.2,	16.6,	19.5
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Female Seats in Government',
        align: 'left'
    },
    subtitle: {
        text: 'Percent of parliment seats held by women in top 10 most populated countries. Source: <a href="https://data.un.org/default.aspx">United Nations</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['China', 'India', 'U.S.','Indonesia','Pakistan','Nigeria',
        'Brazil','Bangladesh','Russia','Mexico'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent Female Parliamentarians',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Percent',
        data: [24.9, 15.1, 29.4, 21.6, 20.5, 3.6, 17.7, 20.9, 16.4, 50],
        showInLegend: false,
    }]
});
