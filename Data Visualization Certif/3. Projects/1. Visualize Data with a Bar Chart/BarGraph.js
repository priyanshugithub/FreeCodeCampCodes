const dataset = [12, 31, 22, 34, 15];

d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", d => (d * 10 + "px"))
