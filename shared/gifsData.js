const gifsData = [
  { 
    width: 1000, 
    height: 511, 
    src:'./shared/gifs/ddp-demo.gif', 
    descr: `The Data Dashboard is a tool that I developed and designed for the StreetEasy Research team to showcase their NYC market research data. The dashboard provides interactive charts that are custom built to each metric, allowing users to quickly gauge trends in the market.`, 
    title: 'StreetEasy Data Dashboard', 
    link: 'https://streeteasy.com/blog/data-dashboard/'
  },
  { 
    width: 600, 
    height: 484, 
    src:'./shared/gifs/natgeo.gif', 
    descr: 'A data visualization piece I wrote for National Geographic on research about tracking immigrant community integration using Twitter data. I designed and developed the visualization and wrote the copy.', 
    title: 'National Geographic', 
    link: 'https://www.nationalgeographic.com/culture/2018/09/researchers-using-twitter-data-immigration-migration-graphic/'
  },
  { 
    width: 1270, 
    height: 1512, 
    src:'./shared/images/example.png', 
    descr: 'An Observable notebook on how to build ImageQuilts, a Edward Tufte concept for visualization with images. I use HSL decomposition to extract primary colors from artworks and use that to order images into a quilt.', 
    title: 'ImageQuilts', 
    link: 'https://observablehq.com/@pstuffa/imagequilts'
  },
  { 
    width: 1000, 
    height: 904, 
    src:'./shared/gifs/demand3.gif', 
    descr: 'An article on how StreetEasy can predict rental demand throughout the year, featuring interactive visualizations highlighting seasonality by neighborhoods.', 
    title: 'StreetEasy Rental Demand', 
    link: 'https://streeteasy.com/blog/when-renter-demand-is-highest/'
  },
  { 
    width: 800, 
    height: 796, 
    src:'./shared/gifs/newgrads.gif', 
    descr: `A map visualization tool for new college graduates to see where the most affordable apartments are in New York City. Uses Uber's H3 hexbins to show the results.`, 
    title: 'StreetEasy Homes for New Graduates', 
    link: 'https://streeteasy.com/blog/nyc-apartments-for-new-grads/'
  },
  { 
    width: 967, 
    height: 1024, 
    src:'./shared/images/taxes.png', 
    descr: 'A report on the changes in property taxes for New York City Condos over time. We found that many building in New York City have tax abatments that are beginning to run out, dramatically raising housing costs. Visualization done with D3.js.', 
    title: 'StreetEasy Tax Abatements', 
    link: 'https://streeteasy.com/blog/nyc-tax-abatements-expiring/'
  },
  { 
    width: 1000, 
    height: 676, 
    src:'./shared/gifs/zebra.gif', 
    descr: `When I started as a freelancer, I did a personal project called "Thirty Days Thirty Observables." Each day, I came up with an idea for an Observable notebook, wrote it, and published that day. Having come from a company where I couldn't share my work, it was a great way to push lots of stuff out there in a short period of time.`, 
    title: 'Thirty Days Thirty Observables', 
    link: 'https://observablehq.com/@pstuffa/30-days-30-observables'
  },
  { 
    width: 700, 
    height: 538, 
    src:'./shared/gifs/550.gif', 
    descr: 'A project I am working on that takes multiple open source datasets and combines them to paint a picture of how condominiums sell their apartments. The visualization plays an animation showing the progress of sales for a particular building.', 
    title: 'Apartment Analysis', 
    link: 'https://beta.observablehq.com/@pstuffa/550-vanderbilt'
  },
  { 
    width: 600, 
    height: 304, 
    src:'./shared/gifs/streeteasy.gif', 
    descr: 'A tool I made in collaboration with Streeteasy for potentional homeowners to see how long they buy a home until they will break even with their investment. We visualize the cost of homeownership agaisnt property vale appreciation. Users can select different neighborhoods to see specific results.', 
    title: 'Streeteasy', 
    link: 'https://streeteasy.com/tippingpoint'
  },
  { 
    width: 500, 
    height: 437, 
    src:'./shared/gifs/jiggle.gif', 
    descr: 'I taught a two part workshop at ITP, an NYU program, on how to do data visualization with D3.js. This is one of the notebooks we went through in the class. It goes over how to make contour density maps with D3 and Census data.', 
    title: 'ITP Workshop', 
    link: 'https://beta.observablehq.com/@pstuffa/making-maps-with-nyc-open-data'
  },
  { 
    width: 400, 
    height: 288, 
    src:'./shared/gifs/prospect.gif', 
    descr: 'A visualization of building permits issued in Prospect Heights, a neighborhood in Brooklyn. Uses a building permit API by NYC Open Data and title vector maps.', 
    title: 'Prospect Heights', 
    link: 'https://beta.observablehq.com/@pstuffa/nyc-building-permits-api-prospect-heights/2'
  },
  { 
    width: 380, 
    height: 512, 
    src:'./shared/gifs/obama.gif', 
    descr: 'A fork of a Voronoi Stipling notebook that creates faux stained-glass portraits.', 
    title: 'Stained Glass Portraits', 
    link: 'https://observablehq.com/@pstuffa/voronoi-stained-glass-portraits'
  },
  { 
    width: 500, 
    height: 298, 
    src:'./shared/gifs/run.gif', 
    descr: "I am an avid runner, and I've done several visaulization on running data. This is the first part of a series that explores how to best visualize a run.", 
    title: 'Visualizing Running - Part I', 
    link: 'https://beta.observablehq.com/@pstuffa/visualizing-running-part-i'},
  { 
    width: 1000, 
    height: 612, 
    src:'./shared/gifs/run4.gif', 
    descr: 'Part six of my series on visaulizing running, this piece explores ways of comparing heart rate data across several training runs to better see how one improves consistency in heart rate.', 
    title: 'Visualizing Running - Part VI', 
    link: 'https://beta.observablehq.com/@pstuffa/visualizing-running-part-vi'
  },
  { 
    width: 1000, 
    height: 859, 
    src:'./shared/gifs/run6.gif', 
    descr: 'Part five of my series on visualizing running, I take an attempt at improving the map visualizations that are so often used in running aps.',
    title: 'Visualizing Running - Part V', 
    link: 'https://beta.observablehq.com/@pstuffa/visualizing-running-part-v'
  },
  { 
    width: 500, 
    height: 365, 
    src:'./shared/gifs/run5.gif', 
    descr: 'Part seven of my series on visualizing running, this piece tries to tackle comparing both heart rate and pace for training runs over time. Each run is visualized as an area chart that on the top represents heart rate and the bottom pace.', 
    title: 'Visualizing Running - Part VII', 
    link: 'https://beta.observablehq.com/@pstuffa/visualizing-running-part-vii'
  },
  { 
    width: 600, 
    height: 600, 
    src:'./shared/gifs/process.gif', 
    descr: 'A recreation in D3 of Op Art by Jean-Pierre Vasarely, aka Yvaral', 
    title: 'Yvaral', 
    link: 'https://beta.observablehq.com/@pstuffa/yvaral-in-d3'
  },
  { 
    width: 400, 
    height: 400, 
    src:'./shared/gifs/yvaralswave.gif', 
    descr: 'Another recreation in D3 of Op Art by Jean-Pierre Vasarely, aka Yvaral', 
    title: 'Yvaral II', 
    link: 'https://beta.observablehq.com/@pstuffa/yvaral-ii'
  },
  { 
    width: 500, 
    height: 224, 
    src:'./shared/gifs/morphing.gif', 
    descr: 'An exploration for how to create inkblots using D3', 
    title: 'Rorschach Tests', 
    link: 'https://beta.observablehq.com/@pstuffa/making-inkblots-in-d3'
  },
  { 
    width: 500, 
    height: 461, 
    src:'./shared/gifs/noisey.gif', 
    descr: 'An attempted recreation of the famous piece by Bridget Riley, Blaze 1964', 
    title: 'Bridget Riley', 
    link: 'https://beta.observablehq.com/@pstuffa/bridget-riley'
  }
]
