const url ="https://drive.google.com/file/d/1p-JBwXgmjCF9sFdrbDVd9NxBsL_dfUCg/view?usp=sharing"
// the default plots
function init() {

    // Use D3 to read the data from the url
    let dropdownMenu = d3.select("#selDataset");

    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        let names = data.age;

        // Iterate through the names Array
        ages.forEach((age) => {
            dropdownMenu.append("option").text(age).property("value", age);
        });

        let name = ages[0];

        // Call the functions to make the demographic panel, bar chart, and bubble chart
        demo(age);
       
    });
}

