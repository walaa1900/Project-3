// Load the insurance data using D3.js
d3.csv("https://raw.githubusercontent.com/walaa1900/Project-3/main/Resources/insurance.csv").then(function(data) {
    // Filter the data for males and females
    var males = data.filter(function(d) { return d.sex === "male"; });
    var females = data.filter(function(d) { return d.sex === "female"; });

    // Calculate the total charges for males and females
    var totalChargesMales = d3.sum(males, function(d) { return parseFloat(d.charges); });
    var totalChargesFemales = d3.sum(females, function(d) { return parseFloat(d.charges); });

    //  a pie chart using Highcharts to compare charges
    Highcharts.chart('pieChartContainer', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Charges Comparison: Males vs. Females'
        },
        title: {
            text: 'Charges Comparison: Males vs. Females',
            style: {
                fontSize: '24px'
            }
        },
        series: [{
            name: 'Charges',
            data: [
                {
                    name: 'Males',
                    y: totalChargesMales
                },
                {
                    name: 'Females',
                    y: totalChargesFemales
                }
            ]
        }]
    });
});
