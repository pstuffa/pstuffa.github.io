# Dashboard Assignment

Paul Buffa

p.buffa@gmail.com

[my blocks](http://bl.ocks.org/pstuffa)

# Please Note!
*All of the data in this dashboard is fake - this is just an example of a possible dashboard for businesses to track their performance*

Go to [http://pstuffa.github.io/dashboard/](http://pstuffa.github.io/dashboard/) to see the prototype!


##### Visualization Process

I typically start out new projects by opening up the data and look at it, if I can, row by row. The type of features in the data greatly determines how you want to visualize it. After looking through, it seemed that the important features for this dataset where geography and time, so I wanted to prototype line charts, maps and slopegraphs. I first sketched a few ideas and made some lo-fi charts:

<img width="505" alt="screen shot 2016-12-09 at 10 55 35 pm" src="https://cloud.githubusercontent.com/assets/8422826/21086126/84dbec5a-bfe7-11e6-8f21-9b57388d0175.png">

<img width="1205" alt="screen shot 2016-12-10 at 4 17 43 pm" src="https://cloud.githubusercontent.com/assets/8422826/21086127/86261054-bfe7-11e6-97a8-adc6ae663659.png">

<img width="350" alt="screen shot 2016-12-11 at 10 09 14 pm" src="https://cloud.githubusercontent.com/assets/8422826/21086870/89e99a7e-bfee-11e6-9605-492ce97ed161.png">

I noticed a few things immediately: the United States was by far the largest in any metric. Comparing countries to each other would mean I would need to somehow handle the United States so that it didn't dwarf all the other results. Also, there was only four months worth of data, so I might be able to do small multiples types of visualizations, like sparklines. 

The project goals given in the assignment said that the goal was to "help business users understand how different markets
are performing compared to each other," so I wanted to focus on how to show which countries and regions were changing the most and how they were ranking up. It seemed that line charts and slopegraphs would be good options, as they can trends in time and rank very well.


I liked this chart I had seen recently in [The Upshot](http://www.nytimes.com/interactive/2016/12/06/upshot/how-to-know-what-donald-trump-really-cares-about-look-at-who-hes-insulting.html) and wanted to see if something similar would work here:

<img width="1129" alt="screen shot 2016-12-11 at 9 32 44 pm" src="https://cloud.githubusercontent.com/assets/8422826/21086319/693bf326-bfe9-11e6-9296-7fd545991ff0.png">

My version:

<img width="1229" alt="screen shot 2016-12-10 at 4 28 16 pm" src="https://cloud.githubusercontent.com/assets/8422826/21086324/7f3da62e-bfe9-11e6-97c2-9960a6bb35cb.png">

Time in the dataset was just for four months, so I thought I might be able to make the x axis very narrow, as one can read a 4 point trend with relatively little ink. The new real estate made it so I could see all four of the metrics provided (Monthly Active Users, Daily Active Users, Subscribers, Total Content Hours) simulaneously. Also, I added a color to the area chart so you could also tell right away if the trend was negative (red) or positive (green).

<img width="1192" alt="screen shot 2016-12-11 at 5 50 27 pm" src="https://cloud.githubusercontent.com/assets/8422826/21086508/2a611d78-bfeb-11e6-9fb1-d2a3beff4462.png">

I like the line chart approach, so I designed the slopegraph similarly. As I noted before though, the dataset had a lot of outliers. Certain countries, like the US, were dwarfing other countries in comparison. To remedy this, I could either make a new metric or use an exponential scale. I decided to make a percentile rank and use visual cues, like stroke color and stroke width, to highlight countries that had shifted greatly in the four months:

<img width="615" alt="screen shot 2016-12-10 at 10 29 28 pm" src="https://cloud.githubusercontent.com/assets/8422826/21086515/47662bb6-bfeb-11e6-9761-2ed568795803.png">

I tried making a few maps of the dataset, but I didn't see any interesting trends. Maps can be lousy for representing changes over time, and for this dataset, it seemed geography was more categorical than, well, geographical. I decided to nix it:

<img width="953" alt="screen shot 2016-12-11 at 7 50 11 pm" src="https://cloud.githubusercontent.com/assets/8422826/21086548/932cb8da-bfeb-11e6-9cde-9f05afd65742.png">

I put together a few of the visualizations I created side-by-side to see how they might work in conjunction:

<img width="1254" alt="screen shot 2016-12-19 at 8 35 13 pm" src="https://cloud.githubusercontent.com/assets/8422826/21335163/c4686fda-c62a-11e6-8543-48d255213836.png">

I like the combination of the slopegraph, sparkline and area charts, so I built that out and made a version for country and region.

<img width="1234" alt="screen shot 2016-12-19 at 8 35 30 pm" src="https://cloud.githubusercontent.com/assets/8422826/21335168/cd9c66a6-c62a-11e6-9bb4-9d7741cab47a.png">


##### Tech Used:

I wrote all the visualizations in D3. I used Bootstrap for the design. I didn't bother with making a database, as the dataset was fairly small.

For larger projects, I typically would build a Node.js application, connecting to a Postgres or MySQL instance.

##### Areas I would explore more if I had more time

  * Allowing a user to sort the visualizations in different ways.
  * Custom grouping of countries and regions.
  * Use a framework to better manage the code. I like [this approach](https://bost.ocks.org/mike/chart/) for D3.  
  * More analysis of the data, such as the ratio between paid and free products.



