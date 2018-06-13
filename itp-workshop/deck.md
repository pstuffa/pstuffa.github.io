## Intro to Data Visualization


Why visualize?
<br />
& how do I make it effective?

---

## Why Visualize?

<i>A primary goal of data visualization is to communicate information clearly and efficiently via statistical graphics, plots and information graphics.</i>

---

## Why Visualize?

Great data visualiation can be very effective at commmunicating trends, such as this example from the New York Times on the current NYC Subway situation.

<a href="https://www.nytimes.com/interactive/2017/06/28/nyregion/subway-delays-overcrowding.html">
	<img height="200" alt="" src="https://user-images.githubusercontent.com/8422826/41360685-54e68edc-6efb-11e8-83fe-7f8312d6bce0.png">
</a>

<a href="https://www.nytimes.com/interactive/2017/06/28/nyregion/subway-delays-overcrowding.html">
	<img height="200" alt="" src="https://user-images.githubusercontent.com/8422826/41360698-5c0c1614-6efb-11e8-8168-85f47869e608.png">
</a>

---

## Why Visualize?

Visualization is effective for even more complicated data, though it has its limits.

<img height="200" alt="" src="https://user-images.githubusercontent.com/8422826/41360596-22223d98-6efb-11e8-9bd6-bab5a02aaf80.png">

<p style="font-size: 18px"> 
	"We find that viewers accurately estimate trends in many standard visualizations of bivariate data, but that both visual features (e.g., "within-the-bar" bias) and data features (e.g., the presence of outliers) can result in visual estimates that systematically diverge from standard least-squares regression models.""
</p>

<p style="font-size: 14px"> 
	[Regression by Eye: Estimating Trends in Bivariate Visualizations](https://idl.cs.washington.edu/papers/regression-by-eye/)
		By Michael Correll, Jeffrey Heer
</p>

---

## Why Visualize?

Data visualization lends itself better to certain categories more than others. Here are a couple use cases where data visualization can be most effective. 

<!-- .element: class="fragment" data-fragment-index="1" -->
Thought #1<br />
<!-- .element: class="fragment" data-fragment-index="2" -->
To describe geography

--- 

### Seashell Voting 

<a href="http://www.vigorousnorth.com/2008/11/black-belt-how-soil-types-determined.html">
	<img height="400" src="https://user-images.githubusercontent.com/8422826/41360555-066f5392-6efb-11e8-9d4b-42482408e6d5.png">
</a>

<p style="font-size: 16px"> 
	Maps are (understandably) effective when the data has geographic trends. This map shows the presidential voting by county in the South, and when we compare to cotton production from the 1860s, we can see some incredible geographic trends. 
</p>

---

## Why Visualize?

Thought #1:<br />
To describe geography

Thought #2:<br />
<!-- .element: class="fragment" data-fragment-index="1" -->
To show patterns

--- 

### The Pay Gap 

<a href="http://graphics.wsj.com/gender-pay-gap/"> 
	<img height="400" src="https://user-images.githubusercontent.com/8422826/41360509-f2d0b286-6efa-11e8-8d7d-752c39fc238e.png">
</a>

<p style="font-size: 16px"> 
	Visualization is effective at communicating general trends and patterns. Here we are looking at the difference in pay between men and women in 446 US occupations. Visualization can clearly show that women earn less than men in almost all these occupations, and considerably less in higher salary positions.<br /><br />

	Dot plots are very effective for highlighting the differences between two groups for a single metric. Adding a line to show the delta helps emphasize the distance between the two values.
</p>

---

## Why Visualize?

Thought #1:<br />
To describe geography

Thought #2:<br />
To show patterns

Thought #3:<br />
<!-- .element: class="fragment" data-fragment-index="1" -->
To reveal outliers

--- 

### Steph Curry

<a href="https://www.nytimes.com/interactive/2016/04/16/upshot/stephen-curry-golden-state-warriors-3-pointers.html" class="subtext">
	<img height="500" src="https://user-images.githubusercontent.com/8422826/41360473-dc1f91e2-6efa-11e8-9273-22ae496e1cdf.png">
</a>

<p style="font-size: 16px"> 
	Steph Curry's three point shooting is incredible, and undeniably unique when you compare to the rest of the NBA. He broke his record of the most 3's scored in a single season way before the season was over. 
</p>

---

## Why Visualize?

Thought #1:<br />
To describe geography

Thought #2:<br />
To show patterns

Thought #3:<br />
To reveal outliers

Thought #4:<br />
<!-- .element: class="fragment" data-fragment-index="1" -->
To provide context

---

### Moon Landing 

<img height="550" src="https://history.nasa.gov/alsj/a11/A11vsFootball.gif">

<p style="font-size: 16px"> 
	Here we have a map of the Appollo 11 lunar landing compared to a soccer field. You can see that much of the excursion happened in a small area, about the size of half a soccer field. 
</p>

---

## Why Visualize?

Thought #1:<br />
To describe geography

Thought #2:<br /> 
To show patterns

Thought #3:<br />
To reveal outliers

Thought #4:<br />
To provide context

Thought #5:<br />
<!-- .element: class="fragment" data-fragment-index="1" -->
To help explain complicated analysis

--- 

### The Emotional Arc of Inaguration Speeches 

<a href="http://emotions.periscopic.com/inauguration/">
	<img height="400" src="https://user-images.githubusercontent.com/8422826/41360440-c9930cfc-6efa-11e8-94d2-0b695f28aaff.png">
</a>

<p style="font-size: 18px"> 
	Periscopic used the Microsoft Emotion API to detect facial expressions of presidents while speaking during their inauguration speaches, and mapped them over time to show the emotional arc. 
<p>

--- 

### The Duality Between Maze and Tree

<a href="https://bost.ocks.org/mike/algorithms/">
	<img height="600" alt="" src="https://user-images.githubusercontent.com/8422826/41360406-b211307c-6efa-11e8-84f5-cbbe4663bfde.png">
</a>

---

## Make It Effective

Thought #1:<br />
<!-- .element: class="fragment" data-fragment-index="1" -->
Don't just count things

---

### Steps

<img height="400" src="http://style.org/images/stdp3/STDP3_095.jpg">

<p style="font-size: 14px"> 
	It's showing me 31 numbers, it's showing me a random top number that's not my goal. It doesn't show me my goal. And it shows me a random bottom number that is not zero.<br /> <br />

	It also shows me three dates, but it's very difficult to match the lines — I find myself counting: “What is that day? What day was that?”<br /> <br />

	So there are clearly patterns here. They're clearly patterns that I, as a user - the person who did this walking - I may have something to say about that. Or there might be patterns that I recognize. But there's no way for me to add any of that annotation, any of that human overlay on the numbers.
</p>

<p style="font-size: 8px">
	[See, Think, Design, Produce in San Francisco on Feb. 11, 2015](http://style.org/stdp3/)
	By Jonathan Corum
</p>

---

## Make It Effective

Thought #1:<br />
Don't just count things

Thought #2:<br />
<!-- .element: class="fragment" data-fragment-index="1" -->
Customize for your situation.

--- 

### Heart Rate Training

<img height="400" alt="" src="https://user-images.githubusercontent.com/8422826/41360327-8296328e-6efa-11e8-8fad-cf7d8e0f8deb.png">

<p style="font-size: 18px"> 
	This visualization of average heart rate (BPM) by Garmin Connect is supposed to show you how much you excert during your workouts. It aggregates by either months, weeks or days, depending on the timeframe you select. This would imply that my Heart Rate has been fairly consistent for this 12 month timeframe.
</p>

--- 

### Heart Rate Training
<a href="http://bl.ocks.org/pstuffa/7bc57cc0dde8ad77ee90effbb03f2b2a">
	<img width="840" alt="" src="https://user-images.githubusercontent.com/8422826/41360264-5d849224-6efa-11e8-8ac2-20130a839670.png">
</a>

<p style="font-size: 18px"> 
	I was less interested in averages though and more interested in maintaining the right heart rate range, with a gradual warmup. I had to heavily edit the original dataset to be in a useable format, then find a form that highlighted the specific features of interest.
</p>

---

## Make It Effective

Thought #1:<br />
Don't just count things

Thought #2:<br />
Customize for your situation.

Thought #3:<br />
<!-- .element: class="fragment" data-fragment-index="1" -->
Annotate!

---

### Sleep Quality

<img height="400" src="http://style.org/images/stdp3/STDP3_104.jpg">

<p style="font-size: 18px"> 
	For many timeline visualizations, outliers and trends can be explained through simple annotation. Help guide your reader (when you can) about these situations.<br /><br />
	This is a visualization of sleep quality over time. Here was can see the user, Jonathan Corum, can easily explain the trends by annotating specific life events. This is something that happens in many sectors, especially in the sales and marketing, where extraordinary events can often explain any odd trends. 
</p>

<p style="font-size: 8px">
	[See, Think, Design, Produce in San Francisco on Feb. 11, 2015](http://style.org/stdp3/)
	By Jonathan Corum
</p>

---

## Make It Effective

Thought #1:<br />
Don't just count things

Thought #2:<br />
Customize for your situation.

Thought #3:<br />
Annotate!

Thought #4:<br />
<!-- .element: class="fragment" data-fragment-index="1" -->
Just Show the Data

---

### Data to Ink Ratio

<img height="500" src="https://cdn-images-1.medium.com/max/800/1*ZF-3-ih4QwSVTVXZeVV-iA.gif">

<p style="font-size: 16px"> 
	This gif does an excellent job demonstrating the concept of a data to ink ratio. The idea is to make sure your visualizations don't have additional "Chart Junk" that obfuscates the data.
</p>

---

## Make It Effective

Thought #1:<br />
Don't just count things

Thought #2:<br />
Customize for your situation.

Thought #3:<br />
Annotate!

Thought #4:<br />
Just Show the Data

Thought #5:<br />
<!-- .element: class="fragment" data-fragment-index="1" -->
Avoid Visual Trumperies

---

### Visual Trumpery

<img height="500" src="https://cdn-images-1.medium.com/max/800/1*A5x-zMrlAwt6mZt_uERQFw.png">

<p style="font-size: 16px"> 
	An excellent voice in the Data Visualization field, Alberto Cairo has been going on tour talking about his concept of Visual Trumpery. This is a slide from his deck, talking about a few of the ideas. Alberto analyzes the ways that users get the wrong takeaways from visualizations and calls such techniques "Visual Trumpery." These are just a few of his ideas.
</p>

---

### Visual Trumpery

<img height="500" src="https://pbs.twimg.com/media/C31bQEQWQAAli69.jpg">

<p style="font-size: 16px"> 
	Alberto redesigns this chart that he says is full of visual trumpery. Where is it?
</p>

---

## Q & A

---
