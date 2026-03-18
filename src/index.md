

# Paul Buffa
## [Portfolio](./index) || [About Me](./about)

```js
import {work} from './work.js';
```

```js
const categories = Array.from(new Set(work.map(d => d.category)));
const color = d3.scaleOrdinal()
  .domain(categories)
  .range(d3.schemeObservable10);

const checkboxes = Inputs.checkbox(categories, {value: categories,
    format: (x) =>
      html`<span style="
          border-bottom: solid 2px ${color(x)};
          margin-bottom: -2px;
        ">${x}</span>`});

const selected = view(checkboxes);
```


```js
function portfolio(data, {width} = {}) {

  const div = html`<div class="grid grid-cols-4" style="grid-auto-rows: 250px;"></div>`;

  d3.select(div)
    .selectAll(".card")
    .data(data, d => d.title)
    .join()
    .attr("class", d => `card grid-colspan-${width <= 1100 ? 1 : d.cols} grid-rowspan-${width <= 1100 ? 1 : d.rows} work`)
    .each(function(d) {
      portfolioCard(d, {container: this})
    })

  return div;
}

function portfolioCard(data, {container} = {}) {

  const card = d3.select(container);

  const detail = card.append("div")
    .attr("class", "detail")
    .style("background-image", d => `url(${d.src})`)
    .style("border", d => `2px solid ${color(d.category)}`)

  const cover = card
    .append("div")
    .attr("class", "cover")
    .style("background-color", d => `rgb(from ${color(d.category)} r g b / 0.9)`)

  const title = card.append("div")
    .attr("class", "title")
  
  title.append("h1").text(d => d.title)
  title.append("h2").text(d => d.date)
  title.append("p").text(d => d.descr)

  const link = card.filter(d => d.link)
    .append("a")
    .text("Click to view")
    .attr("target", "_blank")
    .attr("href", d => d.link);

  card
    .on("mouseenter", (event, d) => {
      title.transition().style("opacity", 1);
      cover.transition().style("opacity", 1);
      link.transition().style("opacity", 1);
    })
    .on("mouseleave", (event, d) => {

      title.transition().style("opacity", 0);
      cover.transition().style("opacity", 0);
      link.transition().style("opacity", 0);
    })

  return card.node()

}
```

<style>

  form {
    max-width: 100%;
  }

  .work {
    position: relative;
    padding: 0px;
  }

  .title {
    opacity: 0;
    padding: 10px;
    position: absolute;
    top: 0px;
    left: 0px;
    color: #fff;
  }

  .card a {
    position: absolute;
    right: 0px;
    bottom: 0px;
    padding: 10px;
    opacity: 0;
    color: var(--theme-background);
  }

  .title h1, .title h2, .title p {
    color: var(--theme-background);
  }

  .detail {
    height: 100%;
    border-radius: 5px;
  }

  .cover {
    background-color: rgb(from var(--theme-foreground) r g b / 0.85);
    position: absolute;
    top: 2px;
    left: 2px;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    opacity: 0;
  }

</style>

```js
display(portfolio(work.filter(d => selected.includes(d.category)), {width}));
```

