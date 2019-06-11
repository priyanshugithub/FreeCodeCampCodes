const dataset = [12 , 31 , 22 , 17 , 25 , 18 , 29 , 14 , 9];
const w = 500;
const h = 100;
const padding = 60 ;
const xScale = d3.scaleLinear()
                 .domain([ 0 , d3.max(dataset, (d) => d[ 0 ])])
                 .range([padding, w - padding]);
const yScale = d3.scaleLinear()
                 .domain([ 0 , d3.max(dataset, (d) => d[ 1 ])])
                 .range([h - padding, padding]);
                 
const xAxis = d3.axisBottom(xScale);

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

// d3.select("body").selectAll("div")
//     .data(dataset)
//     .enter()
//     .append("div")
//     .attr("class", "bar");

    svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i* 30)
    .attr("y", (d, i) => h - 3 * d)
    .attr( "width" , 25 )
    .attr( "height", (d, i) => 3 * d)
    .attr("fill", "orange");
    svg.append("g")
.attr("transform", "translate(0, " + (h - padding) + ")")
.call(xAxis);