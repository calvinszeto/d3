// Used for setting width/height of chart
var margin = {top: 00, right: 100, bottom: 200, left: 100},
width = 1600 - margin.left - margin.right,
height = 1024 - margin.top - margin.bottom;

// https://github.com/mbostock/d3/wiki/Ordinal-Scales
// Set the scale for the x axis
var x = d3.scale.ordinal()
.rangeRoundBands([0, width], .1);
// rangeRoundBands has antialiasing: http://en.wikipedia.org/wiki/Spatial_anti-aliasing

// https://github.com/mbostock/d3/wiki/Quantitative-Scales
var y = d3.scale.linear()
.rangeRound([height, 0]);

// Green for wins, Red for losses
var color = d3.scale.ordinal()
.range(["#00FF50", "#B20300"]);

// https://github.com/mbostock/d3/wiki/SVG-Axes

var xAxis = d3.svg.axis()
.scale(x)
.orient("bottom");

var yAxis = d3.svg.axis()
.scale(y)
.orient("left")
.tickFormat(d3.format(".2s"));

// Set up the HTML for what's about to happen!
var svg = d3.select("body").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Grab the data
d3.csv("data/nba_team_index.csv", function(error, data) {
	// Associate colors with the W and L columns
	color.domain(d3.keys(data[0]).filter(function(key) { return key == "W" || key == "L"; }));

	// What's happening here?
	data.forEach(function(d) {
		var y0 = 0;
		d.ages = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
		d.total = d.ages[d.ages.length - 1].y1;
	});

	data.sort(function(a, b) { return b.total - a.total; });

	x.domain(data.map(function(d) { return d.Franchise; }));
	y.domain([0, d3.max(data, function(d) { return d.total; })]);

	// X Axis
	svg.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis)
	.selectAll("text")  
		.style("text-anchor", "end")
		.attr("dx", "-.8em")
		.attr("dy", ".65em")
		.style("font-family", "Arial")
		.style("font-size", "12px")
		.attr("transform", function(d) {
			return "rotate(-45)" 
		});

	svg.append("g")
	.attr("class", "y axis")
	.call(yAxis)
	.append("text")
	.attr("transform", "rotate(-90)")
	.attr("y", 6)
	.attr("dy", ".71em")
	.style("text-anchor", "end")
	.text("Games");

	var franchise = svg.selectAll(".franchise")
	.data(data)
	.enter().append("g")
	.attr("class", "g")
	.attr("transform", function(d) { return "translate(" + x(d.Franchise) + ",0)"; });

	franchise.selectAll("rect")
	.data(function(d) { return d.ages; })
	.enter().append("rect")
	.attr("width", x.rangeBand())
	.attr("y", function(d) { return y(d.y1); })
	.attr("height", function(d) { return y(d.y0) - y(d.y1); })
	.style("fill", function(d) { return color(d.name); });

	var legend = svg.selectAll(".legend")
	.data(color.domain().slice().reverse())
	.enter().append("g")
	.attr("class", "legend")
	.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

	legend.append("rect")
	.attr("x", width - 18)
	.attr("width", 18)
	.attr("height", 18)
	.style("fill", color);

	legend.append("text")
	.attr("x", width - 24)
	.attr("y", 9)
	.attr("dy", ".35em")
	.style("text-anchor", "end")
	.text(function(d) { return d; });

});
