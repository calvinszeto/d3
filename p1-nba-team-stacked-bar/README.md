# D3.js, A first try

This is a documentation of my first attempt to learn some D3.js. My
method will be to locate some data source, think of some sort of
visualization I can make out of it, and learn D3.js along the way.

## The Data

For the data, I'll be using a CSV file of NBA team data. This dataset
contains a row for each team from the NBA or ABA, past or present.
Fields on each row consist of league, years of existence, and various
win/loss statistics.

## The Idea

I have a few ideas about what could be interesting from this dataset.
First, the data is interesting historically; it's interesting to see the
relative ages of the teams we know today, and where they came from,
although the latter isn't actually in the data. Geography could play a
role here, we could easily join in location data and implement that in
the visualization.

An idea for the next project: grabbing yearly win/loss statistics for
each team, joined with location data. Having the teams, mapped out by
location, and showing the success of each team as the user browses
through the years, would be useful to show the rise and fall of
different teams, and which teams dominated during any particular time.
Would be helpful for sporcle!

For this first project, I'll keep it simple. A stacked bar chart that
shows the win/loss statistics for each team; an easy way to compare
franchises in their longevity and success.

## The Process

For a simple stacked bar chart, there are plenty of examples to learn
from. This chart copies from the example on the d3 website:
http://bl.ocks.org/mbostock/3886208.

The linked example shows population data by state, so the first task at
hand is to change the x axis to Franchise, and the y axis to game
statistics. Most of the changes happen to the scales, which have to
adapt to the different number of fields and names of the new axes.

After the first iteration, there are immediately three problems to be
solved:
* The Franchise names are too long; they get squished together and are
  illegible
* Franchises with the same name are being joined into the same bar, so
  we see weirdly integrated win/loss statistics
* The numbers on the y axis are cut off

For the first issue, I find the answer with a quick Google search: I'll
just rotate the text on the x axis:
http://www.d3noob.org/2013/01/how-to-rotate-text-labels-for-x-axis-of.html.
After copying over the code and tinkering with it a bit, I have slightly
more legible labels. After a font-size change and making the graph a lot
bigger, I am pretty satisfied. Further, changing the size of the graph
also solved issue 3!
