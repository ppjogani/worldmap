(function(window) {

  var data,
      width=window.screen.availWidth,
      height=window.screen.availHeight,
      xy = d3
            .geo
            .equirectangular()
            .scale(200)
            .translate([width/2, height/2]),
      graticule = d3.geo.graticule(),
      path = d3
              .geo
              .path()
              .projection(xy),
      svg = d3
              .select("#map_container1")
              .append('svg'),
      places = {
              GSFC: [-74.0059, 40.7127],
              KSC: [72.8258, 18.97]
              },
      route = {
            type: "LineString",
            coordinates: [
              places.GSFC,
              places.KSC
            ]
          },
      countries = svg
                    .append('svg')
                    .attr('id', 'countries');
 
  /* World Map */
  countries.selectAll('path')
    .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
    .enter()
    .append('svg:path')
    .attr('d', path)
    .attr('fill', 'rgba(29,91,25,1)')
    .attr('stroke-width', 1);
  svg.append("path")
          .datum(route)
          .attr("class", "route")
          .attr("d", path)
          .attr("stroke", "orange")
          .attr("stroke-width", "2")
          .attr("fill", "none");
  svg.append("path")
          .datum(route)
          .attr("class", "route")
          .attr("d", path)
          .style("opacity",0.15);
//  console.log("route:" + route.coordinates[0][1]	);
}(this));