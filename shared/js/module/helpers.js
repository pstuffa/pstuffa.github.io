const isMobile = (width) => {
  return width < 600
}

const lineData = (n) => {

  const points = d3.range(n).map(Object);

  points.forEach((d, i) => {

    if(Math.floor(i/3) % 2 == 0) {

      if(i % 3 == 1) {
          d.x = .0
      } else if (i % 3 == 2) {
          d.x = .5
      } else {
          d.x = .5
      }
      d.y = i;

    } else {

      if(i % 3 == 1) {
          d.y = .0
      } else if (i % 3 == 2) {
          d.y = .5
      } else {
          d.y = .5
      }
      d.x = i;
    }

  });

  return points;

}


function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = moment(startDate, "YYYY-MM-DD");
  var stopDate = moment(stopDate, "YYYY-MM-DD");
  while (currentDate <= stopDate) {
      dateArray.push( moment(currentDate).format('MM-DD-YYYY') )
      currentDate = moment(currentDate).add(1, 'days');
  }
  return dateArray;
}

function movingAverage(values, N) {
let i = 0;
let sum = 0;
const means = new Float64Array(values.length).fill(NaN);
for (let n = Math.min(N - 1, values.length); i < n; ++i) {
  sum += values[i];
}
for (let n = values.length; i < n; ++i) {
  sum += values[i];
  means[i] = sum / N;
  sum -= values[i - N + 1];
}
return means;
}

function movingAvgData(dateArray, byDateDays, N) {

const input = dateArray.map(d => {
  return {
    date: d,
    value: byDateDays[`$${d}`] == undefined ? 0 : byDateDays[`$${d}`]
  }
})

const movingAvg = movingAverage(input.map(d => d.value), N)

const returnObject = {};

dateArray.forEach((date,i) => {
  returnObject[`$${date}`] = movingAvg[i]
})

return returnObject
}

function generateCumulative (mergedDenver, byDate, mvData) {
const returnArray = [];

const nest = d3.nest()
  .key(d => d.year)
  .entries(mergedDenver)

const lyLookup = {}
byDate.forEach(year => {
  
  const innerArray = [];
  let cum = 0;
  year.values.sort((a,b) => moment(a.key, "MM-DD-YYYY") - moment(b.key, "MM-DD-YYYY")).forEach(date => {
    let yoy = undefined 
    if(year.key == '2019') {
      lyLookup[date.key.replace("-2019", "")] = date.value;
    } else {
      if(lyLookup[date.key.replace("-2020", "")] != undefined) {
        yoy = date.value - lyLookup[date.key.replace("-2020", "")]
      } 
    }
    cum += date.value;
    innerArray.push({
      key: date.key,
      lookupKey: date.key.replace("2020", "2019"),
      value: date.value,
      cum: cum,
      yoy: yoy,
      roll: isNaN(mvData[`$${date.key}`]) ? 0 : mvData[`$${date.key}`]
    })
  });
  
  returnArray.push({
    key: year.key,
    values: innerArray
  })
  
})

return returnArray;
}
