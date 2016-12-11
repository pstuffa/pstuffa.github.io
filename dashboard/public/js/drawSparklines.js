function drawSparklines(originalData) {

  var margin;
  var width,
      height;

  if(window.DashboardVersion == "Country") {
      margin = {top: 5, right: 30, bottom: 5, left: 30};
      width = 90 - margin.left - margin.right;
      height = 15 - margin.top - margin.bottom;
  }
  else {
      margin = {top: 5, right: 30, bottom: 5, left: 30};
      width = 120 - margin.left - margin.right;
      height = 25 - margin.top - margin.bottom;
  }

  var format = d3.format(",d"),
      formatDate = d3.timeFormat("%B");

  var regions = d3.set(originalData.map(function(d) { return d["Region Name"]; })).values(),
      countries = d3.set(originalData.map(function(d) { return d["Country Name"]; })).values(),
      months = d3.set(originalData.map(function(d) { return d["FormatteDate"]; })).values(),
      minDate = formatDate(d3.min(originalData, function(d) { return d["Date"]})),
      maxDate = formatDate(d3.max(originalData, function(d) { return d["Date"]}));

  var yScale = d3.scaleLinear()
      .range([height, 0])

  var colorScale = d3.scaleLinear()
      .domain([-.2,0,.2])
      .range(["#fb584f", "#cfcfcf", "#18b13e"])

  var countryArea = d3.line()
      .x(function(d) { return monthScale(d["FormatteDate"]); })
      .y(function(d) { return yScale(d[window.SpotifyMetric]) })

  var xAxis = d3.axisBottom(monthScale);

  var filteredData = originalData.filter(function(d) {return d["Product"] == window.SpotifyProduct })

  var nestedCountryMonths = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .key(function(d) { return d["FormatteDate"]})
      .map(filteredData);

  var nestedCountries = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .sortKeys(d3.descending)
      .entries(filteredData);

  var monthScale = d3.scalePoint()
      .domain(d3.set(filteredData, function(d) { return d["FormatteDate"]; }).values())
      .rangeRound([0, width]);

  var yScale = d3.scaleLinear()
      .range([height, 0])

  var colorScale = d3.scaleLinear()
      .domain([-.2,0,.2])
      .range(["#fb584f", "#000", "#18b13e"])

  var countryArea = d3.line()
      .x(function(d) { return monthScale(d["FormatteDate"]); })
      .y(function(d) { return yScale(d[window.SpotifyMetric]) })

  var xAxis = d3.axisBottom(monthScale);

  var countryG = d3.select("#SparklineChart")
      .selectAll(".country")
      .data(nestedCountries)
    .enter().append("div")
      .attr("class","countryDiv")

  d3.selectAll(".countryDiv")
    .each(function(regionData) {

    var performance = nestedCountryMonths["$"+regionData.key]["$" + maxDate][0][window.SpotifyMetric]/nestedCountryMonths["$"+regionData.key]["$" + minDate][0][window.SpotifyMetric] - 1,
        formatPerc = d3.format(".0%"),
        formatPerformance = formatPerc(performance)

    d3.select(this)
      .append("div")
      .attr("class","textDiv")
      .html("<b>" + regionData.key + "</b> is " + (performance > 0 ? "up by " + formatPerformance : "down by" + formatPerformance))

      yScale.domain(d3.extent(regionData.values, function(d) { return d[window.SpotifyMetric]; }));

      var svg = d3.select(this).append("svg")
          .attr("class", "countrySVG")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      svg.append("path")
          .attr("class", "country")
          .attr("d", function(d) { return countryArea(d.values); })
          .style("stroke-width", performance*2 + 2)
          .style("stroke", colorScale(performance))

      svg.append("text")
          .attr("class", "country")
          .style("fill", "#000")
          .style("text-anchor","top")
          .classed("text-right", true)
          .attr("y", function(d) { return  yScale(d.values[d.values.length-1][window.SpotifyMetric]) })
          .attr("x", width)
          .attr("dy", 2)
          .text(function(d) { 
              return  format(nestedCountryMonths["$"+d.key]["$" + maxDate][0][window.SpotifyMetric])
          })

      svg.append("text")
          .attr("class", "country")
          .style("fill", "#000")
          .style("text-anchor","end")
          .classed("text-left", true)
          .attr("y", function(d) { return  yScale(d.values[0][window.SpotifyMetric]) })
          .attr("x", 0)
          .attr("dy", 2)
          .text(function(d) { 
              return  format(nestedCountryMonths["$"+d.key]["$" + minDate][0][window.SpotifyMetric])
          })

    })

}

function updateSparklineChart(originalData) {

  var margin;
  var width,
      height;

  if(window.DashboardVersion == "Country") {
      margin = {top: 5, right: 30, bottom: 5, left: 30};
      width = 90 - margin.left - margin.right;
      height = 15 - margin.top - margin.bottom;
  }
  else {
      margin = {top: 5, right: 30, bottom: 5, left: 30};
      width = 120 - margin.left - margin.right;
      height = 25 - margin.top - margin.bottom;
  }


  var parseDate = d3.timeParse("%Y-%m-%d"),
      formatDate = d3.timeFormat("%B"),
      format = d3.format(",d");

  var regions = d3.set(originalData.map(function(d) { return d["Region Name"]; })).values(),
      countries = d3.set(originalData.map(function(d) { return d["Country Name"]; })).values(),
      months = d3.set(originalData.map(function(d) { return d["FormatteDate"]; })).values(),
      minDate = formatDate(d3.min(originalData, function(d) { return d["Date"]})),
      maxDate = formatDate(d3.max(originalData, function(d) { return d["Date"]}));

  var yScale = d3.scaleLinear()
      .range([height, 0])

  var colorScale = d3.scaleLinear()
      .domain([-.2,0,.2])
      .range(["#fb584f", "#000", "#18b13e"])

  var countryArea = d3.line()
      .x(function(d) { return monthScale(d["FormatteDate"]); })
      .y(function(d) { return yScale(d[window.SpotifyMetric]) })

  var xAxis = d3.axisBottom(monthScale);

  var filteredData = originalData.filter(function(d) {return d["Product"] == window.SpotifyProduct })

  var nestedCountryMonths = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .key(function(d) { return d["FormatteDate"]})
      .map(filteredData);

  var nestedCountries = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .sortKeys(d3.descending)
      .entries(filteredData);

  var monthScale = d3.scalePoint()
      .domain(d3.set(filteredData, function(d) { return d["FormatteDate"]; }).values())
      .rangeRound([0, width]);

  var yScale = d3.scaleLinear()
      .range([height, 0])

  var colorScale = d3.scaleLinear()
      .domain([-.2,0,.2])
      .range(["#fb584f", "#cfcfcf", "#18b13e"])

  var countryArea = d3.line()
      .x(function(d) { return monthScale(d["FormatteDate"]); })
      .y(function(d) { return yScale(d[window.SpotifyMetric]) })

  var xAxis = d3.axisBottom(monthScale);


  d3.select("#SparklineChart")
    .selectAll(".countryDiv")
    .data(nestedCountries)
    .each(function(regionData, i) {

      d3.select("#SparklineMetricSelected").text(window.SpotifyMetric + " - " + window.SpotifyProduct);

      var performance = nestedCountryMonths["$"+regionData.key]["$" + maxDate][0][window.SpotifyMetric]/nestedCountryMonths["$"+regionData.key]["$" + minDate][0][window.SpotifyMetric] - 1,
          formatPerc = d3.format(".0%"),
          formatPerformance = formatPerc(performance)

      yScale.domain(d3.extent(regionData.values, function(d) { return d[window.SpotifyMetric]; }));

      d3.select(this)
        .select(".textDiv")
        .html("<b>" + regionData.key + "</b> is " + (performance > 0 ? "up by " + formatPerformance : "down by" + formatPerformance))

      var svg = d3.select(this).select(".countrySVG");

      var t = d3.transition()
          .delay(i*10)
          .duration(1000)
          .ease(d3.easeBackIn);

      svg.select("path")
          .transition(t)
          .attr("d", function(d) { return countryArea(d.values); })
          .style("stroke-width", performance*2 + 2)
          .style("stroke", colorScale(performance))

      svg.select(".text-left")
          .transition(t)
          .attr("y", function(d) { return  yScale(d.values[0][window.SpotifyMetric]) })
          .text(function(d) { 
              return  format(nestedCountryMonths["$"+d.key]["$" + minDate][0][window.SpotifyMetric])
          })

      svg.select(".text-right")
          .transition(t)
          .attr("y", function(d) { return  yScale(d.values[d.values.length-1][window.SpotifyMetric]) })
          .text(function(d) { 
              return  format(nestedCountryMonths["$"+d.key]["$" + maxDate][0][window.SpotifyMetric])
          })


    });
  }
