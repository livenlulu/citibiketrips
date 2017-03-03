var layer = L.tileLayer('https://api.mapbox.com/styles/v1/livenlulu/civklqgt8007y2kqqt5b61zc9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGl2ZW5sdWx1IiwiYSI6ImNpZ3h0ZzltbzB1cTQ0cG0zamthcno1dmwifQ.vZrmbXCCq15ZVuF6g6vhkA',{
    attribution: ''
});

// var layer = L.tileLayer('https://api.mapbox.com/styles/v1/livenlulu/ciu0azvas00322in5xzze3u48/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGl2ZW5sdWx1IiwiYSI6ImNpZ3h0ZzltbzB1cTQ0cG0zamthcno1dmwifQ.vZrmbXCCq15ZVuF6g6vhkA',{
//     attribution: ''
// });
var map = L.map('myMap', { 
  attributionControl: false,
  tap:false
}).setView( [40.727486,-74.001160], 13);
map.addLayer(layer);

map.options.maxZoom = 15;
map.options.minZoom = 11;

var rentData = [];
rentData[0]={};
var currid=0;
var med=0;
    

var chart;
var chart2;
var chart3;

var manhattan = [40.763121,-73.948288];
var brooklyn = [40.637925,-73.948288];
var bronx = [40.841606, -73.874817];
var queens = [40.716298,-73.853874];
var statenisland = [40.571719,-74.148788];

var panOptions = {
    animate: true,
    duration: 2
 	}

      $(".myButton").click(function() {
      if($(this).attr('id') == 'one' ) {
        map.panTo(manhattan, panOptions);
      } 
      
      else if 
      ($(this).attr('id') == 'two' ) {
        $(this).css('background-color','#fff');
        map.panTo(brooklyn, panOptions);
      } 

      else if 
      ($(this).attr('id') == 'three' ) {
        $(this).css('background-color','#fff');
        map.panTo(bronx, panOptions);
      } 

      else if 
      ($(this).attr('id') == 'four' ) {
        $(this).css('background-color','#fff');
        map.panTo(queens, panOptions);
      } 

      else {
        $(this).css('background-color','#fff');
        map.panTo(statenisland, panOptions);
      }
    });
      
// function onEachFeature(feature, layer) {
//     // does this feature have a property named popupContent?
//     if (feature.properties && feature.properties.popupContent) {
//         layer.bindPopup(feature.properties.popupContent);
//     }
// }

  $("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
    });

  var geojson;
    var geojson2;

        $.getJSON('data/citidurat.geojson', function(data) {
    geojson2 = L.geoJson(data, {
      style: style2,
      onEachFeature: onEachFeature2,
     
    }).addTo(map);

  });


  $.getJSON('data/tripcnt.geojson', function(data) {
    geojson = L.geoJson(data, {
      style: style,
      onEachFeature: onEachFeature,
       pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
      }
    }).addTo(map);

  });





  function getColor(d) {
<<<<<<< Updated upstream
    return d > 80 ? '#840303' :
           d > 70  ? '#9A0000' :
           d > 60  ? '#b31c1b' :
=======
    return d > 120 ? '#840303' :
           d > 80  ? '#9A0000' :
           d > 70  ? '#b31c1b' :
>>>>>>> Stashed changes
           // d > 60  ? '#75507b' :
           d > 50  ? '#BE0E0E' :
           d > 40  ? '#DA4747' :
           d > 30  ? '#FFA6A6' :
                     '#FFE7E7' ;
  }


  function getColor2(d) {
    return d > 1000 ? '#1872E6' :
           d > 700  ? '#9A0000' :
           d > 523  ? '#b31c1b' :
           // d > 60  ? '#75507b' :
           d > 381  ? '#BE0E0E' :
           d > 63  ? '#DA4747' :
      
                     '#FFE7E7' ;
  }



  var geojsonMarkerOptions = {
    radius: 2,
    fillColor: 'white',
    color: "#000",
    weight: .3,
    opacity: 1,
    fillOpacity: 1
};





  function style(feature) {
    return {
        fillColor: getColor(feature.properties.trip_count),
        weight: .3,
        opacity: .8,
        radius: 3,
        color: getColor(feature.properties.trip_count),
        dashArray: '0',
        fillOpacity: 1
    };
  }

    function style2(feature) {
    return {
        fillColor: getColor2(feature.properties.duration),
        weight: 1,
        opacity: .8,
        color: getColor2(feature.properties.duration),
        dashArray: '0',
        fillOpacity: 0.8
    };
  }


  function mouseoverFunction(e) {
    var layer = e.target;
    // med value
    //med = e.target.feature.properties.median_income;
    //console.log(med);

    layer.setStyle({
        weight: 5,
        opacity: 1,
        color: 'white',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    // try updatechart
    updateChart(e.target.feature.properties);
    updateChart2(e.target.feature.properties);
    updateChart3(e.target.feature.properties);

    // console.log(layer.feature.properties.VALUE2);
<<<<<<< Updated upstream
    $('#side').html('<center><h4 style="color:white; padding-top:10px; padding-bottom:5px; margin-top: 0px; margin-bottom: 0px;">Unoccupied Apartments, NYC - 2016' + '<br><b><font size ="5" color="white">' + layer.feature.properties.VALUE2 + '%' +'</font></b> ' + '</h4></center>');
=======
    $('#side').html('<center><h4 style="color:white; padding-top:10px; padding-bottom:5px; margin-top: 0px; margin-bottom: 0px;">Citibike Routes from Washington Square, NYC</h4></center>');
>>>>>>> Stashed changes
  	}

  function resetHighlight(e) {
    geojson.resetStyle(e.target);
  }

    function resetHighlight2(e) {
    geojson2.resetStyle(e.target);
  }

  function onEachFeature(feature, layer) {
    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
        //click: zoomToFeature
    });

    var popup = "<h5 id='ona'><b>" + feature.properties.trip_count +  ' Total Trips</b></h5>' +  '<h6 id="on2">' +feature.properties.start_station_name+ ' Station</h6>';
     
    layer.bindPopup(popup);
  }

  function onEachFeature2(feature, layer) {
    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight2
        //click: zoomToFeature
    });

    var popup = "<h5 id='ona'><b>" + Math.round(feature.properties.duration/60 *100)/100 +  ' Minutes Bike Ride </b></h5>' +  '<h6 id="on2">Start Station: ' + feature.properties.start_station_name + '<br>End Station: ' + feature.properties.end_station_name + '</h6>';
     
    layer.bindPopup(popup);
  }



//dropdown scroll
  $(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  });


//bar chart
nv.addGraph(function() {
  chart = nv.models.discreteBarChart()
    .x(function(d) { return d.label })
    .y(function(d) { return d.value })
    .staggerLabels(true)
    .showValues(true)
    .margin({left:0,right:0})
    // .color(['rgb(77,175,74)','rgb(228,26,28)'])  
    // 'rgb(55,126,184)'
    .color(['#9AC7E2', '#2975A2', '#08517C'])
    .valueFormat(function(d){
        return "$" + Math.round(d * 10)/10;
      });
    ;

  nv.utils.windowResize(chart.update);

  return chart;
});


nv.addGraph(function() {
  chart2 = nv.models.discreteBarChart()
    .x(function(d) { return d.label })
    .y(function(d) { return d.value })
    .staggerLabels(true)
    .showValues(true)
    .margin({left:0,right:0})
    // .color(['rgb(77,175,74)','rgb(228,26,28)'])  
    // 'rgb(55,126,184)'
    .color(['#8FACA0', '#578F77', '#2D7556', '#0C5837', '#004025'])
    .valueFormat(function(d){
        return Math.round(d * 10)/10 + "%";
      });
    ;

  nv.utils.windowResize(chart2.update);

  return chart2;
});

nv.addGraph(function() {
  chart3 = nv.models.discreteBarChart()
    .x(function(d) { return d.label })
    .y(function(d) { return d.value })
    .staggerLabels(true)
    .showValues(true)
    .margin({left:0,right:0})
    // .color(['rgb(77,175,74)','rgb(228,26,28)'])  
    // 'rgb(55,126,184)'
    .color(['#E0AA63', '#D1821C'])
    .valueFormat(function(d){
        return Math.round(d * 10)/10;
      });
    ;

  nv.utils.windowResize(chart3.update);

  return chart3;
});


//Each bar represents a single discrete quantity.
function updateChart(f){

  rentData[0].key = "vacancyrent";
  rentData[0].values =
    [
        // { 
        //   "label" : "Median Monthly Income" , 
        //   "value" : f.median_income / 12
        // } , 
        { 
          "label" : "Median Rent" , 
          "value" : f.vmedian_rent 
        } , 
        { 
          "label" : "30% Of HH Income" , 
          "value" : f.vmr / 12 * .3
        } ,
        { 
          "label" : "Poverty Line" , 
          "value" : 980.83
        } 
      ]
    d3.select('#chart svg')
    .datum(rentData)
    .transition().duration(500)
    .call(chart);
  
}

function updateChart2(f){

  rentData[0].key = "vacancyrent";
  rentData[0].values =
    [
        // { 
        //   "label" : "Median Monthly Income" , 
        //   "value" : f.median_income / 12
        // } , 
        { 
          "label" : "White" , 
          "value" : f.white
        } , 
        { 
          "label" : "Black" , 
          "value" : f.black
        } ,
        { 
          "label" : "Asian" , 
          "value" : f.asian
        } ,
        { 
          "label" : "Hispanic" , 
          "value" : f.hispanic
        } ,
        { 
          "label" : "Other" , 
          "value" : f.otherrace + f.americanin
        } 
      ]
    d3.select('#chart2 svg')
    .datum(rentData)
    .transition().duration(500)
    .call(chart2);
  
}


function updateChart3(f){

  rentData[0].key = "vacancyrent";
  rentData[0].values =
    [
        { 
          "label" : "Median Male Age" , 
          "value" : f.malemedage
        } , 
        { 
          "label" : "Median Female Age" , 
          "value" : f.femalemeda
        } 
      ]
    d3.select('#chart3 svg')
    .datum(rentData)
    .transition().duration(500)
    .call(chart3);
  
}
//bulletchart
// nv.addGraph(function() {  
//   var chart2 = nv.models.bulletChart();

//   d3.select('#chart2 svg')
//       .datum(exampleData())
//       .transition().duration(1000)
//       .call(chart2);

//   return chart2;
// });


// function exampleData() {
//   return {
//     "title":"Revenue",    //Label the bullet chart
//     "subtitle":"US$",   //sub-label for bullet chart
//     "ranges":[150,225,300],  //Minimum, mean and maximum values.
//     "measures":[220],    //Value representing current measurement (the thick blue line in the example)
//     "markers":[250]      //Place a marker on the chart (the white triangle marker)
//   };
// }


$(window).load(function(){

        $('#search').keyup(function(e){

if ($(this).val().length == 0) {
  $("#results").hide();

 }
 else
  $("#results").show();

            var searchField = $('#search').val();
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;

            // $.getJSON('data/data.geojson', function(data) {
            //   $.each(data, function(key, val){
              geojson2.eachLayer(function(val){
                
                if ((val.feature.properties.start_station_name.search(regex) != -1) || (val.feature.properties.end_station_name.search(regex) != -1)) {
                  output += '<div class="dropdown" id="seapop">';
                  output += '<ul id="' + val.feature.properties.start_station_name +'">';
                  output += '<div class="col-md-3"><img height="80px" class="img-responsive" onerror="this.parentNode.removeChild(this)" src="img2/'+val.feature.properties.OBJECTID+'.jpg" alt="'+ val.feature.properties.Organization +'" /></div>';
                  output += '<div class="col-md-6">';
                  output += '<h5>' + val.feature.properties.start_station_name + '</h5>';
                  output += '<p>' + val.feature.properties.Address + '</p>'
                  output += '</div><hr style="border-top: 1px solid #ddd; margin-bottom: 0px; margin-top:0px; width:90%;">';
                  output += '</div>';
                  output += '</div>';
                  if(count%2 == 0){
                    output += '</div><div class="row">'
                  }
                  count++;
                }
                //  if ((count-1) == 0) {
                
                //   $('#results').css('z-index', 100);
                //   $('.dropdown-menu').css('z-index', 600);
                // }


              });
                  });
      });

