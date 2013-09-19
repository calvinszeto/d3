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

## The Questions

1. How do I grab this CSV data from the Javascript?

2. How do I make the stacked bar chart?
