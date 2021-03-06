exports.getPlacemarks = function(params, callback) {
  var lat = 'undefined' !== typeof params.lat ? params.lat : 52.88,
      lon = 'undefined' !== typeof params.lon ? params.lon : -7.96;
  
  // Add the passed in location to a points array
  var points = [{lat: lat, lon: lon, title: 'My Placemark!'}];
    
  // Push some more closeby points onto the array
  points.push({lat: lat + 0.002, lon: lon - 0.003, title: 'Top Left'});
  points.push({lat: lat + 0.003, lon: lon, title: 'Top Middle'});
  points.push({lat: lat + 0.002, lon: lon + 0.003, title: 'Top Right'});
  
  points.push({lat: lat, lon: lon - 0.001, title: 'Middle Left'});  
  points.push({lat: lat, lon: lon + 0.002, title: 'Middle Right'});
  
  
  points.push({lat: lat - 0.003, lon: lon - 0.002, title: 'Bottom Left'});
  points.push({lat: lat - 0.002, lon: lon, title: 'Bottom Middle'});
  points.push({lat: lat - 0.002, lon: lon + 0.003, title: 'Bottom Right'});
  
  return callback(null, {points: points});
};