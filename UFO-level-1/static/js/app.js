// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log for sanity test
//console.log(data);

// loop through data and use d3 to update the columns/rows with values needed
function buildTable(data) {
    //use tbody.html("") to clear out rows to reset and populate the table
    tbody.html("");
    data.forEach(function(ufoData) {

        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]) {

      // Append a cell to the row for each value within our data
        var cell = row.append("td");
        cell.text(value);
        });
    });
}
//Filter the table and build the filtered table 

// Assign the data from `data.js` to a new variable
var sightings = data;

// Select the button
var button = d3.selectAll("#filter-btn");

// Select the form
var form = d3.selectAll("#filters");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the appropriate value
  var inputElement = d3.select("#datetime").property("value");
  console.log(inputElement);

  // Get the value property of the input element
  var inputValue = d3.select("date");

  // Use the form input to filter the data by date
  var filteredData = sightings.filter(sighting => sighting.datetime === inputElement);
  console.log(filteredData);
  buildTable(filteredData);
};

buildTable(data);