(function() {
  var dataset = [];

  var randomDataset = function() {
    var arr = [];
    for (var i = 0; i < 25; i++) {           
      var newNumber = (Math.random() * 30).toFixed(2);   //random number (0-30)
      arr.push(newNumber);           
    }
    return arr;
  };
  dataset = randomDataset();

  colorFunc = function(a, b) {
    return b % 2 ? "maroon" : "teal";
  }

  d3.select("#barBox").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      return (d * 5) + "px";
    })
    .style("background-color", colorFunc);

  d3.select(".data").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function(a, b) {
      return b + ": " + a;
    })
    .style("color", colorFunc);


  document.querySelector("#dataBtn").addEventListener("click", function(e) {
    var dataset = randomDataset(); 
    d3.select("#barBox").selectAll("div")
    .data(dataset)
    .style("height", function(d) {
      return (d * 5) + "px";
    });

    d3.select(".data").selectAll("p")
    .data(dataset)
    .text(function(a, b) {
      return b + ": " + a;
    });
  });

  var SVGELEM = {w: 500, h: 50};
  var svg = d3.select("#svgElem")
    .append("svg")
    .attr("width", SVGELEM.w)
    .attr("height", SVGELEM.h),
  circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");
  circles.attr("cx", function(d, i) {
    return (i * 50) + 25;
  })
  .attr("cy", h/2)
  .attr("r", function(d) {
    return d;
  });
})();