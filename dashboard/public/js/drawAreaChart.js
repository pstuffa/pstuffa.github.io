function drawAreaChart(originalData) { 

  var margin;
  var width,
      height;

  if(window.DashboardVersion == "Country") {
      margin = {top: 20, right: 10, bottom: 40, left: 90};
      width = 250 - margin.left - margin.right;
      height = 600 - margin.top - margin.bottom;
  }
  else {
      margin = {top: 60, right: 10, bottom: 40, left: 120};
      width = 250 - margin.left - margin.right;
      height = 220 - margin.top - margin.bottom;
  }

  var filteredData = originalData.filter(function(d) {return d["Product"] == window.SpotifyProduct })

  var format = d3.format(",d"),
      formatDate = d3.timeFormat("%B");

  var regions = d3.set(originalData.map(function(d) { return d["Region Name"]; })).values(),
      countries = d3.set(originalData.map(function(d) { return d["Country Name"]; })).values(),
      months = d3.set(originalData.map(function(d) { return d["FormatteDate"]; })).values(),
      minDate = formatDate(d3.min(originalData, function(d) { return d["Date"]})),
      maxDate = formatDate(d3.max(originalData, function(d) { return d["Date"]}));

  var metrics = ["Monthly Active Users","Daily Active Users", "Subscribers", "Total Content Hours"]

  var nestedCountries = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .sortKeys(d3.descending)
      .entries(filteredData);

  var nestedCountryMonths = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .key(function(d) { return d["FormatteDate"]})
      .map(filteredData);

  var countryScale = d3.scalePoint()
      .domain(countries)
      .rangeRound([height, 0]);

  var monthScale = d3.scalePoint()
      .domain(months)
      .rangeRound([0, width]);

  var mauScale = d3.scaleLinear()
      .range([0, countryScale.step()])

  var colorScale = d3.scaleLinear()
      .domain([-.2,0,.2])
      .range(["#fb584f", "#efefef", "#18b13e"])

  var countryAxis = d3.axisLeft(countryScale)
      .tickSize(-width)

  var xAxis = d3.axisBottom(monthScale);

  var svg = d3.select("#AreaChart")
    .selectAll(".AreaChart")
      .data(metrics)
    .enter().append("svg")
      .attr("class", "AreaChart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("text")
      .attr("x", width/2)
      .attr("dy", function() { return window.DashboardVersion == "Country" ? -2 : -35 })
      .style("text-anchor","middle")
      .style("font", "12px sans-serif")
     .text(function(d) { console.log(d); return d});

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform","translate(0," + height + ")")
      .call(xAxis)

  var countryG = svg.selectAll(".countryArea")
      .data(nestedCountries, function(d) { return d.key })
    .enter().append("g")
      .attr("class","countryArea")
      .attr("transform", function(d, i) { return  "translate(0," + countryScale(d.key) + ")"; })

  countryG.each(function(regionData) {

      var svg = d3.select(this);
      var metric = svg.node().parentNode.__data__;
      var performance = nestedCountryMonths["$"+regionData.key]["$" + maxDate][0][metric]/nestedCountryMonths["$"+regionData.key]["$" + minDate][0][metric] - 1;

      mauScale.domain(d3.extent(regionData.values, function(d) { return d[metric]; }))

      var countryArea = d3.area()
          .curve(d3.curveCardinal)
          .x(function(d) { return monthScale(d["FormatteDate"]); })
          .y0(function(d) { return 0 - mauScale(d[metric]) ; })
          .y1(0)


      svg.append("path")
          .attr("class","countryArea")
          .style("fill", function(d, i) { return  colorScale(performance); })
          .attr("d", function(d) { return countryArea(d.values); }) 

      svg.append("text")
          .attr("class","countryArea")
          .style("text-anchor","end")
          .style("font","10px sans-serif")
          .style("stroke", "none")
          .style("fill", "#000")
          .text(function(d) { return d.key })

    })

  d3.selectAll(".countryArea")
    .on("mouseenter", function(e) {
      d3.selectAll(".countryArea")
        .filter(function(d) { return d.key != e.key })
        .style("fill-opacity", .01)
    })
    .on("mouseleave", function(e) {
      d3.selectAll(".countryArea")
        .filter(function(d) { return d.key != e.key })
        .style("fill-opacity", .95)
    })

}

function updateAreaChart(originalData) {


  var margin;
  var width,
      height;

  if(window.DashboardVersion == "Country") {
      margin = {top: 20, right: 10, bottom: 40, left: 95};
      width = 250 - margin.left - margin.right;
      height = 600 - margin.top - margin.bottom;
  }
  else {
      margin = {top: 60, right: 10, bottom: 40, left: 120};
      width = 250 - margin.left - margin.right;
      height = 220 - margin.top - margin.bottom;
  }

  var filteredData = originalData.filter(function(d) {return d["Product"] == window.SpotifyProduct })

  var format = d3.format(",d"),
      formatDate = d3.timeFormat("%B");

  var regions = d3.set(filteredData.map(function(d) { return d["Region Name"]; })).values(),
      countries = d3.set(filteredData.map(function(d) { return d["Country Name"]; })).values(),
      months = d3.set(filteredData.map(function(d) { return d["FormatteDate"]; })).values(),
      minDate = formatDate(d3.min(filteredData, function(d) { return d["Date"]})),
      maxDate = formatDate(d3.max(filteredData, function(d) { return d["Date"]}));


  var metrics = ["Monthly Active Users","Daily Active Users", "Subscribers", "Total Content Hours"]

  var nestedCountries = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .sortKeys(d3.descending)
      .entries(filteredData);

  var nestedCountryMonths = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .key(function(d) { return d["FormatteDate"]})
      .map(filteredData);

  var countryScale = d3.scalePoint()
      .domain(countries)
      .rangeRound([height, 0]);

  var monthScale = d3.scalePoint()
      .domain(months)
      .rangeRound([0, width]);

  var mauScale = d3.scaleLinear()
      .domain(d3.extent(filteredData, function(d) { return d[window.SpotifyMetric]; }))
      .range([0, countryScale.step()])

  var colorScale = d3.scaleLinear()
      .domain([-.2,0,.2])
      .range(["#fb584f", "#efefef", "#18b13e"])

  if(window.yScaleOption == "Universal y-Axis") {

      var svg = d3.select("#AreaChart")
          .selectAll(".AreaChart")
          .select("g");

      var countryG = svg.selectAll(".countryArea")
          .data(nestedCountries, function(d) { return d.key })
          .each(function(regionData) {

          var svg = d3.select(this);
          var metric = svg.node().parentNode.__data__;
          var performance = nestedCountryMonths["$"+regionData.key]["$" + maxDate][0][metric]/nestedCountryMonths["$"+regionData.key]["$" + minDate][0][metric] - 1;

          mauScale.domain(d3.extent(originalData.filter(function(d) { return d.Product == window.SpotifyProduct; }), function(d) { return d[metric]; }))

          var countryArea = d3.area()
              .curve(d3.curveCardinal)
              .x(function(d) { return monthScale(d["FormatteDate"]); })
              .y0(function(d) { return 0 - mauScale(d[metric]) ; })
              .y1(0)

          svg.select("path")
              .transition()
              .duration(1200)
              .style("fill", function(d, i) { return  colorScale(performance); })
              .attr("d", function(d) { return countryArea(d.values); }) 

        })

      }
  else {
    console.log("hey1")

      var svg = d3.select("#AreaChart")
          .selectAll(".AreaChart")
          .select("g")
  

      var countryG = svg.selectAll(".countryArea")
          .data(nestedCountries, function(d) { return d.key })
          .each(function(regionData) {

          var svg = d3.select(this);
          var metric = svg.node().parentNode.__data__;
          var performance = nestedCountryMonths["$"+regionData.key]["$" + maxDate][0][metric]/nestedCountryMonths["$"+regionData.key]["$" + minDate][0][metric] - 1;

          mauScale.domain(d3.extent(regionData.values, function(d) { return d[metric]; }))

          var countryArea = d3.area()
              .curve(d3.curveCardinal)
              .x(function(d) { return monthScale(d["FormatteDate"]); })
              .y0(function(d) { return 0 - mauScale(d[metric]) ; })
              .y1(0)

          svg.select("path")
              .transition()
              .duration(1200)
              .style("fill", function(d, i) { return  colorScale(performance); })
              .attr("d", function(d) { return countryArea(d.values); }) 

        })
      }




}



