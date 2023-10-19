const_url = "https://drive.google.com/uc?id=1p-JBwXgmjCF9sFdrbDVd9NxBsL_dfUCg"; // Make sure the sharing settings allow access
d3.csv(const_url).then(function(data) {
    // Your data processing code here
});

var data = [
    {
        "Age": 25,
        "Sex": "male",
        "BMI": 22.5,
        "Children": 0,
        "Smoker": "no",
        "Region": "Northeast",
        "Charges": 4500
    },
    // Add more data here
];
var reportConfig = {
    dataSource: {
        data: data, // Use the data source defined in your-data-source.js
    },
    slice: {
        rows: [
            { uniqueName: "Region" },
        ],
        columns: [
            { uniqueName: "Sex" },
        ],
        measures: [
            {
                uniqueName: "Charges",
                aggregation: "sum",
                format: "currency",
            },
        ],
    },
};

