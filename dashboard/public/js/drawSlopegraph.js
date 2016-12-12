
function drawSlopegraph(originalData) {

  var margin;
  var width,
      height;

  if(window.DashboardVersion == "Country") {
      margin = {top: 20, right: 120, bottom: 20, left: 120};
      width = 400 - margin.left - margin.right;
      height = 600 - margin.top - margin.bottom;
  }
  else {
      margin = {top: 20, right: 120, bottom: 20, left: 120};
      width = 480 - margin.left - margin.right;
      height = 150 - margin.top - margin.bottom;
  }

  var format = d3.format(",d"),
      formatDate = d3.timeFormat("%B");

  var regions = d3.set(originalData.map(function(d) { return d["Region Name"]; })).values(),
      countries = d3.set(originalData.map(function(d) { return d["Country Name"]; })).values(),
      months = d3.set(originalData.map(function(d) { return d["FormatteDate"]; })).values(),
      minDate = formatDate(d3.min(originalData, function(d) { return d["Date"]})),
      maxDate = formatDate(d3.max(originalData, function(d) { return d["Date"]}))

  var filteredData = originalData.filter(function(d) {return d["Product"] == window.SpotifyProduct })

  var nestedMonths = d3.nest()
        .key(function(d) { return d["FormatteDate"]})
        .rollup(function(values) { return { 
          maxValue: d3.max(values, function(d) { return d[window.SpotifyMetric]}),
          length: values.length,
          allValues: values
        }})
        .map(filteredData);

  var nestedCountryMonths = d3.nest()
        .key(function(d) { return d["Country Name"] })
        .key(function(d) { return d["FormatteDate"]})
        .map(filteredData);

  var nestedCountries = d3.nest()
        .key(function(d) { return d["Country Name"] })
        .sortKeys(d3.descending)
        .entries(filteredData);

  var countryScale = d3.scalePoint()
        .domain(countries)
        .rangeRound([height, 0]);

  var monthScale = d3.scalePoint()
        .domain(d3.set(filteredData, function(d) { return d["FormatteDate"]; }).values())
        .rangeRound([0, width]);

  var xAxis = d3.axisBottom(monthScale);

    //https://en.wikipedia.org/wiki/Percentile_rank
  var rankDict = {};
  filteredData.forEach(function(row) {
        var countryValue =  nestedCountryMonths["$" + row["Country Name"]]["$" + row["FormatteDate"]][0][window.SpotifyMetric]
        var n = nestedMonths["$" + row["FormatteDate"]]["length"];
        var c = d3.sum(nestedMonths["$" + row["FormatteDate"]]["allValues"]
              .map(function(d) { return d[window.SpotifyMetric] < countryValue ? 1 : 0}));

        var f = d3.sum(nestedMonths["$" + row["FormatteDate"]]["allValues"]
              .map(function(d) { return d[window.SpotifyMetric] == countryValue ? 1 : 0}));
        var rank = (c+.5*f)/n*1;
        row["rank"] = rank;
        rankDict[row["FormatteDate"]+row["Country Name"].replace(" ","")] = rank;
  })

  var yScale = d3.scaleLinear()
      .domain([0, 1])
      .range([height, 0])

  var colorScale = d3.scaleLinear()
      .domain([-.1,0,.1])
      .range(["#a50026", "black", "#18b13e"])

  var countryArea = d3.line()
      .x(function(d) { return monthScale(d["FormatteDate"]); })
      .y(function(d) { return yScale(d.rank) })

  var svg = d3.select("#SlopegraphChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("g")
      .attr("class", "x axis top")
      .call(d3.axisTop(monthScale))

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform","translate(0," + height + ")")
      .call(xAxis)

  var countryG = svg.selectAll(".country")
      .data(nestedCountries, function(d) { return d.key })
    .enter().append("g")
      .attr("class","country")
    .each(function(regionData) {

      var svg = d3.select(this)

      svg.append("path")
          .attr("class", "country")
          .attr("d", function(d) { return countryArea(d.values); }) 
          .style("stroke-opacity", function(d) {
            var lookupValue = d.key.replace(" ","");
            return Math.abs(rankDict[maxDate +lookupValue] - rankDict[minDate + lookupValue])*10 + .5 ;
          })
          .style("stroke-width", function(d) {
            var lookupValue = d.key.replace(" ","");
            return Math.abs(rankDict[maxDate +lookupValue] - rankDict[minDate + lookupValue])*10 + 1 ;
          })
          .style("stroke", function(d) {
            var lookupValue = d.key.replace(" ","");
            return colorScale(rankDict[maxDate +lookupValue] - rankDict[minDate + lookupValue]) ;
          })

      svg.append("text")
          .style("text-anchor","end")
          .classed("text-left", true)
          .style("fill", "#000")
          .attr("y", function(d) { return  yScale(d.values[0].rank) })
          .attr("x", 0)
          .attr("dy", 3)
          .attr("dx", -3)
          .text(function(d) { 
              var lookupValue = d.key.replace(" ","");
              return Math.round(rankDict[minDate +lookupValue]*100) + " -  " + d.key
          })

      svg.append("text")
          .style("fill", "#000")
          .style("text-anchor","top")
          .classed("text-right", true)
          .attr("y", function(d) { return  yScale(d.values[d.values.length-1].rank) })
          .attr("x", width)
          .attr("dy", 3)
          .attr("dx", 3)
          .text(function(d) { 
              var lookupValue = d.key.replace(" ","");
              return  d.key + " - " + Math.round(rankDict[maxDate +lookupValue]*100)
          })

    })


  d3.selectAll(".country")
    .on("mouseenter", function(e) {

      d3.selectAll(".country")
        .filter(function(d) { return d.key != e.key })
        .style("stroke-opacity", 0)

      d3.selectAll(".country")
        .filter(function(d) { return d.key != e.key })
        .selectAll("text")
        .style("fill-opacity", .2)

      d3.selectAll(".country")
        .filter(function(d) { return d.key == e.key })
        .style("stroke-opacity", 1)

    })
    .on("mouseleave", function(e) {

      d3.selectAll(".country")
        .selectAll("text")
        .style("fill-opacity", 1)

      d3.selectAll(".country")
        .style("stroke-opacity", function(d) {
            var lookupValue = d.key.replace(" ","");
            return Math.abs(rankDict[maxDate +lookupValue] - rankDict[minDate + lookupValue])*2 + 2 ;
          })
    })

}


function updateRankSlopeGraph(originalData) {
  
  var margin;
  var width,
      height;

  if(window.DashboardVersion == "Country") {
      margin = {top: 20, right: 120, bottom: 20, left: 120};
      width = 400 - margin.left - margin.right;
      height = 600 - margin.top - margin.bottom;
  }
  else {
      margin = {top: 20, right: 120, bottom: 20, left: 120};
      width = 480 - margin.left - margin.right;
      height = 150 - margin.top - margin.bottom;
  }

  var format = d3.format(",d"),
      formatDate = d3.timeFormat("%B");

  var regions = d3.set(originalData.map(function(d) { return d["Region Name"]; })).values(),
      countries = d3.set(originalData.map(function(d) { return d["Country Name"]; })).values(),
      months = d3.set(originalData.map(function(d) { return d["FormatteDate"]; })).values(),
      minDate = formatDate(d3.min(originalData, function(d) { return d["Date"]})),
      maxDate = formatDate(d3.max(originalData, function(d) { return d["Date"]}))

  var filteredData = originalData.filter(function(d) {return d["Product"] == window.SpotifyProduct })

  var nestedMonths = d3.nest()
        .key(function(d) { return d["FormatteDate"]})
        .rollup(function(values) { return { 
          maxValue: d3.max(values, function(d) { return d[window.SpotifyMetric]}),
          length: values.length,
          allValues: values
        }})
        .map(filteredData);

  var nestedCountryMonths = d3.nest()
        .key(function(d) { return d["Country Name"] })
        .key(function(d) { return d["FormatteDate"]})
        .map(filteredData);

  var nestedCountries = d3.nest()
        .key(function(d) { return d["Country Name"] })
        .sortKeys(d3.descending)
        .entries(filteredData);

  var countryScale = d3.scalePoint()
        .domain(countries)
        .rangeRound([height, 0]);

  var monthScale = d3.scalePoint()
        .domain(d3.set(filteredData, function(d) { return d["FormatteDate"]; }).values())
        .rangeRound([0, width]);

    //https://en.wikipedia.org/wiki/Percentile_rank
  var rankDict = {};
  filteredData.forEach(function(row) {
        var countryValue =  nestedCountryMonths["$" + row["Country Name"]]["$" + row["FormatteDate"]][0][window.SpotifyMetric]
        var n = nestedMonths["$" + row["FormatteDate"]]["length"];
        var c = d3.sum(nestedMonths["$" + row["FormatteDate"]]["allValues"]
              .map(function(d) { return d[window.SpotifyMetric] < countryValue ? 1 : 0}));

        var f = d3.sum(nestedMonths["$" + row["FormatteDate"]]["allValues"]
              .map(function(d) { return d[window.SpotifyMetric] == countryValue ? 1 : 0}));
        var rank = (c+.5*f)/n*1;
        row["rank"] = rank;
        rankDict[row["FormatteDate"]+row["Country Name"].replace(" ","")] = rank;
  })

  var yScale = d3.scaleLinear()
      .domain([0, 1])
      .range([height, 0])

  var colorScale = d3.scaleLinear()
      .domain([-.1,0,.1])
      .range(["#a50026", "black", "#18b13e"])

  var countryArea = d3.line()
      .x(function(d) { return monthScale(d["FormatteDate"]); })
      .y(function(d) { return yScale(d.rank) })

  d3.select("#SlopegraphChart")
    .selectAll(".country")
    .data(nestedCountries, function(d) { return d.key })
    .each(function(regionData, i) {

      d3.select("#metricSelected").text(window.SpotifyMetric + " - " + window.SpotifyProduct);

      var svg = d3.select(this)

      var t = d3.transition()
          .duration(1000)
          .ease(d3.easeLinear);

      svg.select("path")
          .transition(t)
          .attr("d", function(d) { return countryArea(d.values); }) 
          .style("stroke-opacity", function(d) {
            var lookupValue = d.key.replace(" ","");
            return Math.abs(rankDict[maxDate +lookupValue] - rankDict[minDate + lookupValue])*10 + .2 ;
          })
          .style("stroke-width", function(d) {
            var lookupValue = d.key.replace(" ","");
            return Math.abs(rankDict[maxDate +lookupValue] - rankDict[minDate + lookupValue])*10 + .2 ;
          })
          .style("stroke", function(d) {
            var lookupValue = d.key.replace(" ","");
            return colorScale(rankDict[maxDate +lookupValue] - rankDict[minDate + lookupValue]) ;
          })

      svg.select(".text-left")
          .transition(t)
          .attr("y", function(d) { return  yScale(d.values[0].rank) })
          .text(function(d) { 
              var lookupValue = d.key.replace(" ","");
              return Math.round(rankDict[minDate +lookupValue]*100) + " -  " + d.key
          })

      svg.select(".text-right")
          .transition(t)
          .attr("y", function(d) { return  yScale(d.values[d.values.length-1].rank) })
          .text(function(d) { 
              var lookupValue = d.key.replace(" ","");
              return  d.key + " - " + Math.round(rankDict[maxDate +lookupValue]*100)
          })
    });
  }