

var data,
      width=window.screen.availWidth,
      height=window.screen.availHeight,
      xy = d3
            .geo
            .equirectangular()
            .scale(220)
            .translate([width/2, height/2]),
      graticule = d3.geo.graticule(),
      path = d3
              .geo
              .path()
              .projection(xy),
      svg0 = d3
          .select("#map_container0")
          .append('svg')
          .attr("width", width)
          .attr("height", height),
	  countries0 = svg0
	            .append('g')
	            .attr('id', 'countries');

countries0.selectAll('path')
	.data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
	.enter()
	.append('path')
	.attr('d', path)
	.attr('fill', 'rgba(211,211,211,1)')
	.attr('stroke-width', 1);