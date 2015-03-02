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
      places = {
          "NEWYORK": [-74.0059, 40.7127],
          "MUMBAI": [72.8258, 18.97],
          "LOSANGELES": [-118.243685, 34.052234],
          "SANFRANCISCO": [-122.419416, 37.774929],
          "AUSTIN": [ -97.743061, 30.267153],
          "BOSTON": [-71.059773 ,42.358431],
          "CHICAGO": [-87.629798 , 41.878114],
          "MANCHESTER": [-2.248485, 53.479324],
          "AMSTERDAM": [4.895168, 52.370216],
          "JOHANNESBURG": [28.047305 ,-26.204103],
          "HAWAII": [-155.582782, 19.896766],
          "SYDNEY": [151.206990, -33.867487],
          "BRASILIA":[-51.925280, -14.235004],
          "MOSCOW": [37.617300,55.755826],
          "NEWDELHI": [77.2089,28.6139],
          "TOKYO": [139.691706, 35.689487],
          "BANGKOK": [100.524123, 13.727896]
          },
      svg0 = d3
          .select("#map_container0")
          .append('svg')
          .attr("width", width)
          .attr("height", height),
      // svg1 = d3
      //     .select("#map_container1")
      //     .append('svg'),
      // svg2 = d3
      //     .select("#map_container2")
      //     .append('svg'),
      // svg3 = d3
      //     .select("#map_container3")
      //     .append('svg'),
      // svg4 = d3
      //     .select("#map_container4")
      //     .append('svg'),
      // svg5 = d3
      //     .select("#map_container5")
      //     .append('svg'),
      // svg6 = d3
      //     .select("#map_container6")
      //     .append('svg'),
      // svg7 = d3
      //     .select("#map_container7")
      //     .append('svg'),
      // svg8 = d3
      //     .select("#map_container8")
      //     .append('svg'),
      // svg9 = d3
      //     .select("#map_container9")
      //     .append('svg'),
      // svg10 = d3
      //     .select("#map_container10")
      //     .append('svg'),
      
      fnroute = function(source, destination){
            var route = {
                type: "LineString",
                coordinates: [
                  places[source],
                  places[destination]
                ]
            }

            //console.log(typeof newroute.coordinates);
            return route;
      },
  countries0 = svg0
                    .append('svg')
                    .attr('id', 'countries'),
    // countries1 = svg1
    //                 .append('svg')
    //                 .attr('id', 'countries'),
    // countries2 = svg2
    //                 .append('svg')
    //                 .attr('id', 'countries'),
    // countries3 = svg3
    //                 .append('svg')
    //                 .attr('id', 'countries'),
    // countries4 = svg4
    //                 .append('svg')
    //                 .attr('id', 'countries'),
    // countries5 = svg5
    //                 .append('svg')
    //                 .attr('id', 'countries'),
    // countries6 = svg6
    //                 .append('svg')
    //                 .attr('id', 'countries'),
    // countries7 = svg7
    //                 .append('svg')
    //                 .attr('id', 'countries'),
    // countries8 = svg8
    //                 .append('svg')
    //                 .attr('id', 'countries'),
    // countries9 = svg9
    //                 .append('svg')
    //                 .attr('id', 'countries'),
    // countries10 = svg10
    //                 .append('svg')
    //                 .attr('id', 'countries'),
    
    drawing = function(svg, route){
        svg.append("path")
                .datum(route)
                .attr("class", "route")
                .attr("d", path)
                .attr("stroke", "green")
                .attr("stroke-width", "2")
                .attr("fill", "none");
//        svg.append("path")
//                .datum(route)
//                .attr("class", "route")
//                .attr("d", path)
//                .style("opacity",0.15);

      },
    drawCity = function(svg, data){
        svg.selectAll("circle")
           .data(data)
           .enter()
           .append("circle")
           .attr("cx", function(d) {
                  console.log(d);
                   return xy(places[d])[0];
           })
           .attr("cy", function(d) {
                   return xy(places[d])[1];
           })
           .attr("r", 5)
           .style("fill", "red");
    },

  mySpreadsheet = "https://docs.google.com/spreadsheets/ccc?key=1Ay2YviaTHyZeCW6ISmpuytF50Jmk9XhA2WEAIS8mxwU#gid=0",

  //draw the path
  drawLine = function(data){
    var arr0=["SANFRANCISCO"],
    arr1=["SANFRANCISCO"],
    arr2=["SANFRANCISCO"],
    arr3=["SANFRANCISCO"],
    arr4=["SANFRANCISCO"],
    arr5=["SANFRANCISCO"],
    arr6=["SANFRANCISCO"],
    arr7=["SANFRANCISCO"],
    arr8=["SANFRANCISCO"],
    arr9=["SANFRANCISCO"]
    for(var i=0;i< data.table.rows.length;i++){
      //console.log(data.table.rows[i].c[3].v)
      var finalStr = data.table.rows[i].c[3].v;
      // var uppStr = str.toUpperCase();
      // var finalStr = uppStr.replace(/\s+/g, " ");
     switch(data.table.rows[i].c[1].v){
      case "000000":
        arr0.push(finalStr);
          break;
      // case "000001":
      //   arr1.push(finalStr);
      //     break;  
      // case "000002":
      //   arr2.push(finalStr);
      //     break;  
      // case "000003":
      //   arr3.push(finalStr);
      //     break;  
      // case "000004":
      //   arr4.push(finalStr);
      //     break;  
      // case "000005":
      //   arr5.push(finalStr);
      //     break;  
      // case "000006":
      //   arr6.push(finalStr);
      //     break;  
      // case "000007":
      //   arr7.push(finalStr);
      //     break;  
      // case "000008":
      //   arr8.push(finalStr);
      //     break;  
      // case "000009":
      //   arr9.push(finalStr);
      //     break;  
    }
  }
  drawCity(svg0, arr0);
    for(var i=1; i<arr0.length;i++){
      var r = fnroute(arr0[i-1],arr0[i]);
      drawing(svg0, r);
      //drawing(svg10,r);
    }
    // for(var i=1; i<arr1.length;i++){
    //   var r = fnroute(arr1[i-1],arr1[i]);
    //   drawing(svg1, r);
    //   drawing(svg10,r);
    // }
    // for(var i=1; i<arr2.length;i++){
    //   var r = fnroute(arr2[i-1],arr2[i]);
    //   drawing(svg2, r);
    //   drawing(svg10,r);
    // }
    // for(var i=1; i<arr3.length;i++){
    //   var r = fnroute(arr3[i-1],arr3[i]);
    //   drawing(svg3, r);
    //   drawing(svg10,r);
    // }
    // for(var i=1; i<arr4.length;i++){
    //   var r = fnroute(arr4[i-1],arr4[i]);
    //   drawing(svg4, r);
    //   drawing(svg10,r);
    // }
    // for(var i=1; i<arr5.length;i++){
    //   var r = fnroute(arr5[i-1],arr5[i]);
    //   drawing(svg5, r);
    //   drawing(svg10,r);
    // }
    // for(var i=1; i<arr6.length;i++){
    //   var r = fnroute(arr6[i-1],arr6[i]);
    //   drawing(svg6, r);
    //   drawing(svg10,r);
    // }
    // for(var i=1; i<arr7.length;i++){
    //   var r = fnroute(arr7[i-1],arr7[i]);
    //   drawing(svg7, r);
    //   drawing(svg10,r);
    // }
    // for(var i=1; i<arr8.length;i++){
    //   var r = fnroute(arr8[i-1],arr8[i]);
    //   drawing(svg8, r);
    //   drawing(svg10,r);
    // }
    // for(var i=1; i<arr9.length;i++){
    //   var r = fnroute(arr9[i-1],arr9[i]);
    //   drawing(svg9, r);
    //   drawing(svg10,r);
    // }
    
  }

 
  /* World Map */
  // countries0.selectAll('path')
  //   .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
  //   .enter()
  //   .append('svg:path')
  //   .attr('d', path)
  //   .attr('fill', 'rgba(211,211,211,1)')
  //   .attr('stroke-width', 1);

  /* World Map */
  countries0.selectAll('path')
    .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
    .enter()
    .append('svg:path')
    .attr('d', path)
    .attr('fill', 'rgba(211,211,211,1)')
    .attr('stroke-width', 1);
  // /* World Map */
  // countries1.selectAll('path')
  //   .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
  //   .enter()
  //   .append('svg:path')
  //   .attr('d', path)
  //   .attr('fill', 'rgba(211,211,211,1)')
  //   .attr('stroke-width', 1);
  // /* World Map */
  // countries2.selectAll('path')
  //   .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
  //   .enter()
  //   .append('svg:path')
  //   .attr('d', path)
  //   .attr('fill', 'rgba(211,211,211,1)')
  //   .attr('stroke-width', 1);
  // /* World Map */
  // countries3.selectAll('path')
  //   .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
  //   .enter()
  //   .append('svg:path')
  //   .attr('d', path)
  //   .attr('fill', 'rgba(211,211,211,1)')
  //   .attr('stroke-width', 1);
  // /* World Map */
  // countries4.selectAll('path')
  //   .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
  //   .enter()
  //   .append('svg:path')
  //   .attr('d', path)
  //   .attr('fill', 'rgba(211,211,211,1)')
  //   .attr('stroke-width', 1);
  // /* World Map */
  // countries5.selectAll('path')
  //   .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
  //   .enter()
  //   .append('svg:path')
  //   .attr('d', path)
  //   .attr('fill', 'rgba(211,211,211,1)')
  //   .attr('stroke-width', 1);
  // /* World Map */
  // countries6.selectAll('path')
  //   .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
  //   .enter()
  //   .append('svg:path')
  //   .attr('d', path)
  //   .attr('fill', 'rgba(211,211,211,1)')
  //   .attr('stroke-width', 1);
  // /* World Map */
  // countries7.selectAll('path')
  //   .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
  //   .enter()
  //   .append('svg:path')
  //   .attr('d', path)
  //   .attr('fill', 'rgba(211,211,211,1)')
  //   .attr('stroke-width', 1);
  // /* World Map */
  // countries8.selectAll('path')
  //   .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
  //   .enter()
  //   .append('svg:path')
  //   .attr('d', path)
  //   .attr('fill', 'rgba(211,211,211,1)')
  //   .attr('stroke-width', 1);
  // /* World Map */
  // countries9.selectAll('path')
  //   .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
  //   .enter()
  //   .append('svg:path')
  //   .attr('d', path)
  //   .attr('fill', 'rgba(211,211,211,1)')
  //   .attr('stroke-width', 1);
  // /* World Map */
  // countries10.selectAll('path')
  //   .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
  //   .enter()
  //   .append('svg:path')
  //   .attr('d', path)
  //   .attr('fill', 'rgba(211,211,211,1)')
  //   .attr('stroke-width', 1);

$('#statistics').sheetrock({
    url: "https://docs.google.com/spreadsheets/ccc?key=1Ay2YviaTHyZeCW6ISmpuytF50Jmk9XhA2WEAIS8mxwU#gid=0",
    dataHandler: drawLine
});