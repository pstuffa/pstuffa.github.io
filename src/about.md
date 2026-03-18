# Paul Buffa
## [Portfolio](./index) || [About Me](./about)

```js
display(image)
```


Hi! I'm Paul. I'm a data visualization developer with a background in analysis and data science. I'm an expert in open-source libraries such as D3, Observable Plot and Observable Framework. I have years of experience building data visualizations, stories and dashboards in business intelligence, observability, machine learning, people analytics, finance, marketing, fitness, and real estate. I am passionate about iterative and ethical design.

I have taught data visualization to thousands of students, through live and asynchronous content. I love working with new visualization developers and helping them build bespoke and insightful visualizations.

Check out [my LinkedIn](https://www.linkedin.com/in/paul-buffa/) to see my work history. 

```js
import * as PathData from 'path-data';
import {require} from "npm:d3-require";
const potrace = require("potrace-js-dev@0.0.3/lib/dist/index.js");
const profile = FileAttachment("./shared/images/profile 3.jpg").image()
```

```js

function abs([re, im]) {
  return Math.hypot(re, im);
}

function expim(im) {
  return [Math.cos(im), Math.sin(im)];
}

function add([rea, ima], [reb, imb]) {
  return [rea + reb, ima + imb];
}

function mul([rea, ima], [reb, imb]) {
  return [rea * reb - ima * imb, rea * imb + ima * reb];
}
```

```js
class PathSampler {
  constructor(source) {
    const data = PathData.parse(source, {normalize: true});
    const d0 = data[0];
    const d1 = data[data.length - 1];
    if (d0.type !== "M") throw new Error("expected M");
    if (d1.type !== "Z") throw new Error("expected Z");
    const segments = Array.from({length: data.length - 2}, (_, i) => {
      const {type, values} = data[i + 1];
      switch (type) {
        case "C": return new C(data[i].values.slice(-2).concat(values));
        case "L": return new L(data[i].values.slice(-2).concat(values));
      }
    });
    const start = d0.values.slice(0, 2);
    const end = data[data.length - 2].values.slice(-2);
    if (start[0] !== end[0] || start[1] !== end[1]) {
      segments.push(new L(end.concat(start)));
    }
    this.segments = segments.filter(d => d != undefined);
  }
  pointAt(t) {
    const n = this.segments.length;
    if (!((t *= n) >= t)) return;
    const i = Math.max(0, Math.min(n - 1, Math.floor(t)));
    return this.segments[i].pointAt(t % 1);
  }
}

class L {
  constructor(values) {
    this.values = values;
  }
  pointAt(t) {
    const [x0, y0, x1, y1] = this.values;
    const a = t;
    const b = 1 - t;
    return [
      a * x0 + b * x1,
      a * y0 + b * y1
    ];
  }
}

class C {
  constructor(values) {
    this.values = values;
  }
  pointAt(t) {
    const [x0, y0, x1, y1, x2, y2, x3, y3] = this.values;
    const a = (1 - t) ** 3;
    const b = 3 * (1 - t) ** 2 * t;
    const c = 3 * (1 - t) * t ** 2;
    const d = t ** 3;
    return [
      a * x0 + b * x1 + c * x2 + d * x3,
      a * y0 + b * y1 + c * y2 + d * y3
    ];
  }
}
```

```js
function* generateDFTArray(input) {
 
  const data = input.map(d => `M ${d.points.map(e => `${e.x} ${e.y}`).join("L ")} Z`)

  const output = []
  for(let i = 0; i < data.length; i++) {
    const array = data[i]
    const sampler = new PathSampler(array);
    const P = Array.from({length: N}, (_, i) => sampler.pointAt(i / N));
    const K = Int16Array.from({length: M}, (_, i) => (1 + i >> 1) * (i & 1 ? -1 : 1));
    const DFT = Array.from(K, k => {
        let x = [0, 0];
        for (let i = 0; i < N; ++i) {
          x = add(x, mul(P[i], expim(k * i * 2 / N * -Math.PI)));
        }
        return [x[0] / N, x[1] / N];
      })
    output.push({
      P: P,
      K: K,
      DFT: DFT,
      sampler: sampler,
      array: array
    })
  }
 
  yield output

}
```

```js
const canvas = document.createElement("canvas")
canvas.width = profile.width;
canvas.height = profile.height;
const ctx = canvas.getContext("2d");

ctx.drawImage(profile, 0, 0);
const data = {
    image: ctx.getImageData(0, 0, profile.width, profile.height).data,
    width: profile.width,
    height: profile.height,
    canvas: ctx
  };
```

```js
const svgData = potrace.traceCanvas(data.canvas.canvas);
```


```js
const dftArray = generateDFTArray(svgData)
```

```js
const colorScale = d3.scaleSequential(d3.interpolateSpectral)
  .domain([0, dftArray.length])
```
```js

function* generateImage() {

const displayCanvas = document.createElement("canvas")
displayCanvas.width = data.width;
displayCanvas.height = data.height;
const context = displayCanvas.getContext("2d");
  context.lineCap = "round";
  context.lineJoin = "round";
  for (let m = 0; true; m = (m + 1) % M) {
    const t = m/M;
    context.save();
    context.fillStyle = "rgba(246, 244, 231, 1)";
    context.fillRect(0, 0, data.width, data.height);
    for(let x = 0; x < dftArray.length; x++) {
      const thisPath = dftArray[x];
      context.beginPath();
      for (let t = 0; t < q; ++t) {
        const a = t * 2 / q * Math.PI;
        let p = [0, 0];
        for (let i = 0; i < m; ++i) {
          p = add(p, mul(thisPath.DFT[i], expim(a * thisPath.K[i])));
        }
        if (t === 0) context.moveTo(...p);
        else context.lineTo(...p);
      }
      context.closePath();
      context.fillStyle = 'black';
      context.fill();      
      context.stroke();
    }
    context.restore();
    context.canvas.value = m;
    yield context.canvas;
    
  }

}
```

```js
const N = 200;
const M = 200;
const q = 300;
```

```js
const image = generateImage();
```
