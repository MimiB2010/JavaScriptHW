// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
function loadTable(dataArray) {
    // First, clear out any existing data
    tbody.html("");
    // Iterate over the data, create a new variable to append
    // a row to the table body
    dataArray.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        // Append a cell to the row for each value
        // in the UFO sighting object
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            // console.log("value", value)
            cell.text(value);
        });
    });
};

var submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the form from refreshing the page
    d3.event.preventDefault();
    
    var date = d3.select("#datetime").property("value");
    // console.log(date)

    var filterData = tableData;
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filterData = filterData.filter(row => row.datetime === date);
    };
    // console.log(filterData);
    loadTable(filterData)
});
loadTable(tableData)