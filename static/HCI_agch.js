document.addEventListener("DOMContentLoaded", function() {
    // Load the insurance data using D3.js
    d3.csv("Resources/insurance.csv").then(function(data) {
        // Parse the data using JavaScript's map() function
        var ages = data.map(function(d) { return parseFloat(d.age); });
        var charges = data.map(function(d) { return parseFloat(d.charges); });

        // Create a scatter plot using Highcharts for Age vs. Charges
        Highcharts.chart('scatterContainer', {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Age vs. Charges'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Age'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Charges'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
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
