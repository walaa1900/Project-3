document.addEventListener("DOMContentLoaded", function() {
    // Load the insurance data using D3.js
    d3.csv("https://raw.githubusercontent.com/walaa1900/Project-3/main/Resources/insurance.csv").then(function(data) {
        // using JavaScript's map() function
        var ages = data.map(function(d) { return parseFloat(d.age); });
        var charges = data.map(function(d) { return parseFloat(d.charges); });

        // a scatter plot using Highcharts for Age vs. Charges
        Highcharts.chart('scatterContainer', {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Age vs. Charges',
                style: {
                    fontSize: '32px' 
                }
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Age',
                    style: {
                        fontSize: '24px' 
                    }
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Charges',
                    style: {
                        fontSize: '24px' 
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 9,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: 'Age: {point.x}, Charges: {point.y}'
                    }
                }
            },
            series: [{
                name: 'Insurance Data',
                color: 'rgba(223, 83, 83, .5)',
                data: ages.map(function(age, i) {
                    return [age, charges[i]];
                })
            }]
        });
    });
});
