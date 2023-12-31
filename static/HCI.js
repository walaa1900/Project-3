// Load the insurance data using D3.js
d3.csv("https://raw.githubusercontent.com/walaa1900/Project-3/main/Resources/insurance.csv").then(function(data) {
    // Print the first few rows of the data
    console.log(data.slice(0, 5));

    //  a dropdown menu for smokers and non-smokers
    const smokerDropdown = document.getElementById("smoker");
    smokerDropdown.addEventListener("change", function() {
        const selectedValue = smokerDropdown.value;
        console.log("Selected value:", selectedValue);

        // Filter the data based on the selected value
        let filteredData;
        if (selectedValue === "yes") {
            filteredData = data.filter(function(d) {
                return d.smoker === "yes";
            });
        } else if (selectedValue === "no") {
            filteredData = data.filter(function(d) {
                return d.smoker === "no";
            });
        } else {
            filteredData = data;
        }

        // Remove the existing circles
        svg.selectAll("circle").remove();

        // a scatter plot of age vs. charges with the filtered data
        svg.selectAll("dot")
            .data(filteredData)
            .enter()
            .append("circle")
            .text("Bar Chart Title")
            .attr("cx", function (d) { return x(d.age); } )
            .attr("cy", function (d) { return y(d.charges); } )
            .attr("r", 5)
            .style("fill", function(d) {
                return d.smoker === "yes" ? "#ff0000" : "#0000ff";
            });
    });

    

    // a scatter plot of age vs. charges with the initial data
    const margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleLinear()
        .domain([18, 80])
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    const y = d3.scaleLinear()
        .domain([0, 60000])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    svg.selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d.age); } )
        .attr("cy", function (d) { return y(d.charges); } )
        .attr("r", 5)
        .style("fill", function(d) {
            return d.smoker === "yes" ? "#ff0000" : "#0000ff";
            
        });

    // Add "All" option to the dropdown menu
    const allOption = document.createElement("option");
    smokerDropdown.add(allOption, 0);
});


d3.csv("https://raw.githubusercontent.com/walaa1900/Project-3/main/Resources/insurance.csv").then(function(data) {
    let trace = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: data[0].Age,
        title: { text: "<b>Insured Person's Age</b>", font: {size: 20}},
        type: "indicator", 
        mode: "gauge+number",
        gauge: {
          axis: {range: [null, 100]}, 
          bar: {color: "#013220"},
          steps: [
            { range: [0, 20], color: "#013220" },
            { range: [20, 40], color: "#023020" },
            { range: [40, 60], color: "#43A047" },
            { range: [60, 80], color: "#43AF50"},
            { range: [80, 100], color: "#8BC34A" }
          ],
          width: 50,
          height: 50
        }
    }];

    Plotly.newPlot("gauge", trace);
});



