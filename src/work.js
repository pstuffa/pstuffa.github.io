import {FileAttachment} from "npm:@observablehq/stdlib";

export const work = [
  {
    "cols": 2,
    "rows": 1,
    "src": await FileAttachment("./shared/images/gpx.png").url(),
    "category": "JFA",
    "date": "04/2025",
    "descr": "I designed and built the GPX Explorer - a free tool for viewing fitness activity data. It uses Mapbox GL JS, D3 and Observable framework to build a highly-interactive 3D satellite map with fitness data overlaid in novel ways.",
    "title": "GPX Explorer",
    "link": "https://gpx-explorer.jasonforrestagency.com/"
  },
  {
    "cols": 2,
    "rows": 1,
    "src": await FileAttachment("./shared/images/jfa.png").url(),
    "category": "JFA",
    "date": "03/2025",
    "descr": "I built the homepage for the Jason Forrest Agency (JFA). The page is a custom site using Vite, with lots of CSS.",
    "title": "JFA",
    "link": "https://jasonforrestagency.com/"
  },
  {
    "cols": 2,
    "rows": 1,
    "src": await FileAttachment("./shared/images/d3-course.png").url(),
    "category": "Teaching",
    "date": "09/2023",
    "descr": "I taught a five-part course on the fundamentals of D3 and Observable. You can watch the entire course in this YouTube playlist and follow along with Google slides and notebooks.",
    "title": "D3 Course",
    "link": "https://www.youtube.com/watch?v=CCBTX2pI2fU&list=PLOHIJAFwtkEcK_mLLScnX2B-yHDjzSxuR"
  },
  {
    "cols": 2,
    "rows": 1,
    "src": await FileAttachment("./shared/images/web-logs.png").url(),
    "category": "Various",
    "date": "02/2024",
    "descr": "I worked with the Observable team to build out this example of a Observable Framework application, using web logs data. We visualize millions of data points to show trends in web traffic over time. Visualizations are built with D3, Plot and Canvas.",
    "title": "Web Logs",
    "link": "https://observablehq.observablehq.cloud/framework-example-api/"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/iso-map.png").url(),
    "category": "Various",
    "date": "09/2021",
    "descr": "SVG implementation of a density countour map using a neumorphism filter.",
    "title": "Neumorphism Contour Density Map",
    "link": "https://observablehq.com/@pstuffa/neumorphism-contour-density-map"
  },
  {
    "cols": 2,
    "rows": 1,
    "src": await FileAttachment("./shared/gifs/mapMove.gif").url(),
    "category": "McKinsey",
    "date": "01/2021",
    "descr": "I worked with the Covid Response Center at McKinsey to build this interactive data visualization on the impact of Covid-19 on unemployment rates. We look at a wide variety of metrics and segments to see where and when Covid had the largest impact on the workforce.",
    "title": "The Inclusive Economy",
    "link": "https://mhi.mckinsey.digital/crc/inclusive-economy-us-unemployment"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/pizza-paradise.png").url(),
    "category": "Data",
    "date": "07/2023",
    "descr": "I created a large realistic mock dataset called Pizza Paradise on a fake pizzeria franchise. It works well for product demos and for teaching purposes. We added in seasonal trends to make the data as realistic as possible.",
    "title": "Pizza Paradise",
    "link": "https://observablehq.com/@observablehq/pizza-paradise-data"
  },
  {
    "cols": 1,
    "rows": 2,
    "src": await FileAttachment("./shared/images/extracting.png").url(),
    "category": "Helpers",
    "date": "04/2022",
    "descr": "This Observable notebook walks through how you can extract image data to do various types of analysis, such as understanding the palletes used by artists over time. The main example is of work by Fernand Léger, found in the MET, called Divers, Blue and Black.",
    "title": "Image Data",
    "link": "https://observablehq.com/@observablehq/extracting-image-data"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/sql-course.jpg").url(),
    "category": "Teaching",
    "date": "05/2023",
    "descr": "I taught a four-part course on the fundamentals of SQL. You can watch the entire course in this YouTube playlist and follow along with Google slides and notebooks.",
    "title": "SQL Course",
    "link": "https://www.youtube.com/watch?v=5YrNBaapwIw&list=PLOHIJAFwtkEft5fmu5OJYUoLF7gOUcMXG"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/stack-overflow.png").url(),
    "category": "Data",
    "date": "06/2022",
    "descr": "Stack Overflow publishes a yearly report on their developer survey, and this notebook visualizes the data with Observable Plot to show the relationship between the languages that developers use and want to learn, over time.",
    "title": "Stack Overflow",
    "link": "https://observablehq.com/@observablehq/the-stack-overflow-survey-2022"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/gifs/nba-heads.gif").url(),
    "category": "Data",
    "date": "06/2022",
    "descr": "We collected data from the 2022 NBA Finals, between the Boston Celtics and Golden State Warriors. This notebook maeks it easy to work with the data and walks through a variety of visualizations made with D3 and Observable Plot.",
    "title": "NBA Finals",
    "link": "https://observablehq.com/@observablehq/nba-finals-boston-celtics-vs-golden-state-warriors-game-1?collection=@observablehq/nba-finals-players-data-jam"
  },
  {
    "cols": 2,
    "rows": 1,
    "src": await FileAttachment("./shared/gifs/streeteasy.gif").url(),
    "category": "NYC",
    "date": "06/2019",
    "descr": "A tool I made in collaboration with Streeteasy for potentional homeowners to see how long they buy a home until they will break even with their investment. We visualize the cost of homeownership agaisnt property vale appreciation. Users can select different neighborhoods to see specific results.",
    "title": "The Tipping Point",
    "id": "se-tip",
    "value": 50,
    "link": "https://streeteasy.com/tippingpoint"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/picasso.png").url(),
    "category": "Art",
    "date": "04/2021",
    "descr": "Application of a progressive fourier series with image tracing. In this example, I use the Picasso animal sketches as a dataset",
    "title": "Picasso Fourier",
    "link": "https://observablehq.com/@pstuffa/picasso-animal-sketches-fourier-series"
  },
  {
    "cols": 2,
    "rows": 1,
    "src": await FileAttachment("./shared/images/vaxmap.png").url(),
    "category": "McKinsey",
    "date": "05/2021",
    "descr": "I worked with the Covid Response Center at McKinsey to build out their Covid tracking tools, which was visualized as a bivariate choropleth that compared Covid-19 cases to vaccination rates by county. The piece was built using d3 in an Angular application and was one of the most popular pages for the entire McKinsey website when it was published.",
    "title": "Vaccination Map",
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/gifs/run6.gif").url(),
    "category": "Running",
    "date": "08/2018",
    "descr": "Part eight of my series on visualizing running data, I take an attempt at improving the map visualizations that are often used in running aps.",
    "title": "Visualizing Running VIII",
    "link": "https://beta.observablehq.com/@pstuffa/visualizing-running-part-v"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/us.png").url(),
    "category": "National Geographic",
    "date": "05/2020",
    "descr": "I built this Covid-19 tracking tool for National Geographic using d3. I worked closely with editors at NatGeo to find compelling visualization forms to show trends in this important dataset.",
    "title": "US Covid-19 Tracking",
    "link": "https://www.nationalgeographic.com/science/2020/05/graphic-tracking-coronavirus-infections-us/"
  },
  {
    "cols": 2,
    "rows": 2,
    "src": await FileAttachment("./shared/gifs/natgeo.gif").url(),
    "category": "National Geographic",
    "date": "09/2018",
    "descr": "A data visualization piece I wrote for National Geographic on research about tracking immigrant community integration using Twitter data. I both designed and developed the visualization and wrote the copy to the article, working closely with researchers on how to summarize the insights.",
    "title": "Integrating Immigrants",
    "link": "https://www.nationalgeographic.com/culture/2018/09/researchers-using-twitter-data-immigration-migration-graphic/"
  },
  {
    "cols": 1,
    "rows": 2,
    "src": await FileAttachment("./shared/gifs/ddp-demo.gif").url(),
    "category": "NYC",
    "date": "07/2019",
    "descr": "The Data Dashboard is a tool that I developed and designed for the StreetEasy Research team to showcase their NYC market research data. The dashboard provides interactive charts that are custom built to each metric, allowing users to quickly gauge trends in the market.",
    "title": "NYC Data Dashboard",
    "link": "https://streeteasy.com/blog/data-dashboard/"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/denver.png").url(),
    "category": "Various",
    "date": "09/2020",
    "descr": "I built this visualization for the Denver Data Storytellers club visualization contest to show Denver's housing eviction data. It won second place. Not great on mobile.",
    "title": "Denver Evictions",
    "link": "https://pstuffa.github.io/denver-dvc/evictions/"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/idw.png").url(),
    "category": "Helpers",
    "date": "03/2021",
    "descr": "JavaScript implementation of Inverse Distance Weighting, a type of deterministic method for multivariate interpolation with a known scattered set of points.",
    "title": "Inverse Distance Weighting",
    "link": "https://observablehq.com/@pstuffa/inverse-distance-weighting"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/seasonality.png").url(),
    "category": "Helpers",
    "date": "10/2022",
    "descr": "A seasonality index is an index that shows the relative change in a value for a specified window of time, e.g. week, month, year, etc. This notebook walks through a JavaScript implementation of seasonality indexes and how to visualize them with Observable Plot.",
    "title": "Seasonality Index",
    "link": "https://observablehq.com/@observablehq/seasonality-index"
  },
  {
    "cols": 3,
    "rows": 1,
    "src": await FileAttachment("./shared/images/mona.png").url(),
    "category": "Helpers",
    "date": "10/2022",
    "descr": "Fisheye distortion was made popular with the D3 library in it's early examples of custom visualization for the web. It's a method for doing a local zoom, often based on a user's interaction. This notebook provides a helper for doing cartesian fisheye distortion, which allows you to zoom on a single dimension.",
    "title": "Cartesian Fisheye Distortion",
    "link": "https://observablehq.com/@pstuffa/cartesian-fisheye-distortion-gallery"
  },
  {
    "cols": 1,
    "rows": 3,
    "src": await FileAttachment("./shared/images/nyc-apts.png").url(),
    "category": "NYC",
    "date": "06/2020",
    "descr": "Median NYC apartment prices by neighborhood over time, visualized as a slope graph.",
    "title": "NYC Apartment Prices",
    "link": "https://observablehq.com/@pstuffa/nyc-apt-prices"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/globe.png").url(),
    "category": "Various",
    "date": "10/2021",
    "descr": "Combining a few interesting techniques to make a faux 3D Globe with Observable Plot and SVG filter effects.",
    "title": "3D Globe",
    "link": "https://observablehq.com/@pstuffa/faux-3d-globe"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/matrix.png").url(),
    "category": "Helpers",
    "date": "05/2020",
    "descr": "You can transform SVG elements using the matrix multiplication, which combines scales, skew, rotation, and translation. This can be very helpful for making isomorphic projections.",
    "title": "SVG Matrix Transformation",
    "link": "https://observablehq.com/@pstuffa/svg-matrix-transformation"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/geo-matrix.png").url(),
    "category": "Helpers",
    "date": "05/2020",
    "descr": "This pairwise matrix uses density contours to highlight trends for several features. I've plugged in this template with some of my running data to show the relationship between heart rate, elevation, and distance.",
    "title": "Geo Contour Matrix",
    "link": "https://observablehq.com/@pstuffa/density-contour-matrix-for-geospatial-datasets"
  },
  {
    "cols": 2,
    "rows": 1,
    "src": await FileAttachment("./shared/images/3d-fourier.png").url(),
    "category": "Helpers",
    "date": "06/2020",
    "descr": "A continuation on my work with Fourier series, this example shows how you can recreate artworks in 3D using Fourier and Three.js",
    "title": "3D Fourier",
    "link": "https://observablehq.com/@pstuffa/fourier-series-threejs"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/zdog.png").url(),
    "category": "Various",
    "date": "09/2022",
    "descr": "A fun experiment with the Zdog library to make avatars. Adjust inputs to make different versions!",
    "title": "Zdog Avatars",
    "link": "https://observablehq.com/@pstuffa/zdog-avatar-generators"
  },
  {
    "cols": 2,
    "rows": 3,
    "src": await FileAttachment("./shared/gifs/newgrads.gif").url(),
    "category": "NYC",
    "date": "05/2019",
    "descr": "A visualization tool for new college graduates to see where the most affordable apartments are in New York City. Users can filter the results by their income level, which then filters apartments that are affordable for that salary, using the convential 1/3 logic. We then visualized the results using hexbins to show where the highest density of aparatments are located. ",
    "title": "Homes for New Graduates",
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/neumorphism.png").url(),
    "category": "Helpers",
    "date": "10/2021",
    "descr": "Neumorphism is a design trend that combines elements of skeuomorphism and minimalism. This notebook provides the logic for apply neumorphism for SVG, using a combination of SVG fitler effects.",
    "title": "Neumorphism",
    "link": "https://observablehq.com/@pstuffa/neumorphism"
  },
  {
    "cols": 1,
    "rows": 2,
    "src": await FileAttachment("./shared/images/taxes.png").url(),
    "category": "NYC",
    "date": "04/2019",
    "descr": "A report on the changes in property taxes for New York City Condos over time. We found that many building in New York City have tax abatments that are beginning to run out, dramatically raising housing costs. I built this static visualization using d3 and d3-annotation.",
    "title": "NYC Tax Abatements",
    "link": "https://streeteasy.com/blog/nyc-tax-abatements-expiring/"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/marilyn.png").url(),
    "category": "Art",
    "date": "06/2020",
    "descr": "A sort of Warhol-esque generator. Traces an image of Marilyn Monroe, then uses the generated SVG Path to create a wave effect, applying three color layers.",
    "title": "Marilyn Waves",
    "link": "https://observablehq.com/@pstuffa/marilyn-waves"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/feturbulence.png").url(),
    "category": "Various",
    "date": "04/2019",
    "descr": "An exploration of the SVG Filter Effect feTurbulence, and how it can be used in conjunction with other filter effects.",
    "title": "feTurbulence",
    "link": "https://observablehq.com/@pstuffa/svg-filters-feturbulence"
  },
  {
    "cols": 2,
    "rows": 2,
    "src": await FileAttachment("./shared/gifs/550.gif").url(),
    "category": "NYC",
    "date": "11/2018",
    "descr": "A passion project of mine to understand how apartments were sold over time for a large condominium in Brooklyn. Introduces novel visualization forms for showing apartment sales in a building over time.",
    "title": "550 Vanderbilt",
    "id": "se-550",
    "value": 40,
    "link": "https://beta.observablehq.com/@pstuffa/550-vanderbilt"
  },
  {
    "width": 500,
    "height": 437,
    "cols": 2,
    "rows": 1,
    "src": await FileAttachment("./shared/gifs/jiggle.gif").url(),
    "category": "Teaching",
    "date": "05/2018",
    "descr": "I taught a two part workshop at ITP, an NYU program, on how to do data visualization with d3. This is one of the notebooks we went through in the class. It goes over how to make contour density maps with D3 and census data.",
    "title": "ITP Workshop",
    "link": "https://beta.observablehq.com/@pstuffa/making-maps-with-nyc-open-data"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/gifs/run.gif").url(),
    "category": "Running",
    "date": "07/2018",
    "descr": "As an avid runner, I've had fun coming up with novel ways to visualize running data. This is the first part of a series that explores GPX data and how it can be used in non-convential ways.",
    "title": "Visualizing Running I",
    "link": "https://beta.observablehq.com/@pstuffa/visualizing-running-part-i"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/gifs/run4.gif").url(),
    "category": "Running",
    "date": "07/2018",
    "descr": "Part six of my series on visualizing running data, this piece explores ways of comparing heart rate data across several training runs to better see how one improves consistency in heart rate.",
    "title": "Visualizing Running VI",
    "link": "https://beta.observablehq.com/@pstuffa/visualizing-running-part-vi"
  },
  {
    "cols": 2,
    "rows": 2,
    "src": await FileAttachment("./shared/gifs/run5.gif").url(),
    "category": "Running",
    "date": "08-2018",
    "descr": "Part seven of my series on visualizing running data, this exploration tries to tackle comparing both heart rate and pace for training runs over time. Each run is visualized as an area chart that on the top represents heart rate and the bottom pace.",
    "title": "Visualizing Running VII",
    "link": "https://beta.observablehq.com/@pstuffa/visualizing-running-part-vii"
  },
  {
    "cols": 1,
    "rows": 2,
    "src": await FileAttachment("./shared/gifs/obama.gif").url(),
    "category": "Art",
    "date": "08/2018",
    "descr": "Generative art making stained-glass-esque portraits using voronoi stipling techniques.",
    "title": "Stained Glass Portraits",
    "link": "https://observablehq.com/@pstuffa/voronoi-stained-glass-portraits"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/yvaral.png").url(),
    "category": "Art",
    "date": "05-2018",
    "descr": "Inspired by a visit to the Tate Modern in London, I recreatied op art by Jean-Pierre Vasarely, aka Yvaral, with D3",
    "title": "Yvaral",
    "link": "https://beta.observablehq.com/@pstuffa/yvaral-in-d3"
  },
  {
    "width": 500,
    "height": 224,
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/images/inkblot.png").url(),
    "category": "Art",
    "date": "05/2018",
    "descr": "An exploration for how to create inkblots using D3",
    "title": "D3 Inkblots",
    "link": "https://beta.observablehq.com/@pstuffa/making-inkblots-in-d3"
  },
  {
    "cols": 1,
    "rows": 1,
    "src": await FileAttachment("./shared/gifs/zeb2.gif").url(),
    "category": "Art",
    "date": "11/2019",
    "descr": "A notebook demonstrating to generate multiple SVG path fourier series for iterative sampling",
    "title": "Fourier Series",
    "link": "https://next.observablehq.com/@pstuffa/multiple-path-progressive-fourier-series"
  },
  {
    "cols": 3,
    "rows": 1,
    "src": await FileAttachment("./shared/gifs/moma.gif").url(),
    "category": "Art",
    "date": "11/2019",
    "descr": "MoMA publishes their collection data on Github, making it easy to work with. This notebook explores this rich dataset in a variety of ways, using Observable and D3. I attempt a programatic way to create ImageQuilts, a concept coined by Edward Tufte, for laying out images in a collage.",
    "title": "The MoMA Collection",
    "link": "https://next.observablehq.com/@pstuffa/the-moma-collection-explorations"
  },
]
