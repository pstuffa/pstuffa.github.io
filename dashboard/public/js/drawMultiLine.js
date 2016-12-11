function drawMultiLineChart(originalData) { 

  var margin;
  var width,
      height;

  if(window.DashboardVersion == "Country") {
      margin = {top: 20, right: 60, bottom: 40, left: 50};
      width = 350 - margin.left - margin.right;
      height = 250 - margin.top - margin.bottom;
  }
  else {
      margin = {top: 20, right: 10, bottom: 40, left: 100};
      width = 1100 - margin.left - margin.right;
      height = 200 - margin.top - margin.bottom;
  }

  var filteredData = originalData.filter(function(d) {return d["Product"] == window.SpotifyProduct })

  var format = d3.format(",d"),
      formatDate = d3.timeFormat("%B");

  var regions = d3.set(originalData.map(function(d) { return d["Region Name"]; })).values(),
      countries = d3.set(originalData.map(function(d) { return d["Country Name"]; })).values(),
      months = d3.set(originalData.map(function(d) { return d["FormatteDate"]; })).values(),
      minDate = formatDate(d3.min(originalData, function(d) { return d["Date"]})),
      maxDate = formatDate(d3.max(originalData, function(d) { return d["Date"]}));

  var nestedCountries = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .sortKeys(d3.descending)
      .entries(filteredData);

  var nestedCountryMonths = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .key(function(d) { return d["FormatteDate"]})
      .map(filteredData);

  var nestedRegions = d3.nest()
      .key(function(d) { return d["Region Name"] })
      .key(function(d) { return d["Country Name"] })
      .entries(filteredData);

  var monthScale = d3.scalePoint()
      .domain(months)
      .rangeRound([0, width]);

  var mauScale = d3.scaleLinear()
      .range([height, 0])

  var colorScale = d3.scaleOrdinal(d3.schemeDark2)
      .domain(countries);

  var countryLineGenerator = d3.line()
      .x(function(d) { return monthScale(d["FormatteDate"]); })
      .y(function(d) { return mauScale(d[window.SpotifyMetric]); })

  var xAxis = d3.axisBottom(monthScale);

  var regionSVG = d3.select("#MultiLineChart")
    .selectAll(".region")
      .data(nestedRegions, function(d) { return d.key })

    .enter().append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("class","region")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  regionSVG.append("text")
      .text(function(d) { return d.key });

  regionSVG.each(function(regionData) {

      var svg = d3.select(this);
      var flatData = []

      regionData.values.forEach(function(country) {
        country.values.forEach(function(row) {
          flatData.push(row);
        })
      })

      mauScale.domain(d3.extent(flatData, function(d) { return d[window.SpotifyMetric]; }))

      var yAxis = d3.axisLeft(mauScale);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform","translate(0," + height + ")")
          .call(xAxis)

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)

     var countryLines = svg.selectAll(".countryGroup")
          .data(function(d) { return d.values })
        .enter().append("g")
          .attr("class","countryGroup")

      countryLines.append("path")
          .attr("class","country")
          .style("stroke", function(d, i) { return colorScale(d.key); })
          .attr("d", function(d) { return countryLineGenerator(d.values); }) 

     countryLines.append("text")
          .attr("class","countryText")
          .style("fill","#000")
          .attr("y", function(d) { return 100 } ) 
          .attr("x", function(d) { return 0; }) 

    })

}

function updateMultiLineChart(originalData) {

  var margin;
  var width,
      height;

  if(window.DashboardVersion == "Country") {
      margin = {top: 20, right: 20, bottom: 40, left: 50};
      width = 350 - margin.left - margin.right;
      height = 250 - margin.top - margin.bottom;
  }
  else {
      margin = {top: 20, right: 10, bottom: 40, left: 100};
      width = 1100 - margin.left - margin.right;
      height = 200 - margin.top - margin.bottom;
  }

  var filteredData = originalData.filter(function(d) {return d["Product"] == window.SpotifyProduct })

  var format = d3.format(",d"),
      formatDate = d3.timeFormat("%B");

  var regions = d3.set(originalData.map(function(d) { return d["Region Name"]; })).values(),
      countries = d3.set(originalData.map(function(d) { return d["Country Name"]; })).values(),
      months = d3.set(originalData.map(function(d) { return d["FormatteDate"]; })).values(),
      minDate = formatDate(d3.min(originalData, function(d) { return d["Date"]})),
      maxDate = formatDate(d3.max(originalData, function(d) { return d["Date"]}));

  var nestedCountries = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .sortKeys(d3.descending)
      .entries(filteredData);

  var nestedCountryMonths = d3.nest()
      .key(function(d) { return d["Country Name"] })
      .key(function(d) { return d["FormatteDate"]})
      .map(filteredData);

  var nestedRegions = d3.nest()
      .key(function(d) { return d["Region Name"] })
      .key(function(d) { return d["Country Name"] })
      .entries(filteredData);

  var monthScale = d3.scalePoint()
      .domain(months)
      .rangeRound([0, width]);

  var mauScale = d3.scaleLinear()
      .range([height, 0])

  var colorScale = d3.scaleOrdinal(d3.schemeDark2)
      .domain(countries);

  var countryLineGenerator = d3.line()
      .x(function(d) { return monthScale(d["FormatteDate"]); })
      .y(function(d) { return mauScale(d[window.SpotifyMetric]); })

  var xAxis = d3.axisBottom(monthScale);

  var regionSVG = d3.select("#MultiLineChart")
      .selectAll(".region")
      .data(nestedRegions, function(d) { return d.key })
      .select("g")
      .each(function(regionData) {

        var svg = d3.select(this);
        var flatData = []

        regionData.values.forEach(function(country) {
          country.values.forEach(function(row) {
            flatData.push(row);
          })
        })

        var t = d3.transition()
          .duration(1000);

        mauScale.domain(d3.extent(flatData, function(d) { return d[window.SpotifyMetric]; }))

        var yAxis = d3.axisLeft(mauScale);

        svg.select(".x")
            .transition(t)
            .call(xAxis)

        svg.select(".y")
            .transition(t)
            .call(yAxis)

       var countryLines = svg.selectAll(".countryGroup")
            .data(function(d) { return d.values });

        countryLines.select("path")
            .transition(t)
            .style("stroke", function(d, i) { return colorScale(d.key); })
            .attr("d", function(d) { return countryLineGenerator(d.values); }) 

    })


}