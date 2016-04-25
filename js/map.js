/**
 * Uses leaflet to create a map.
 * @example 
 * createmap('map', [80, 110], 12, Object)
 * @param {HTMLElement} element - Where the map will be stored
 * @param {int[]} position - coordinates where the map will be positioned [longitude, latitude]
 * @param {int} zoom - initial zoom level of map 
 * @param {Object} data - JSON object that makes markers on map
 */
function createmap(element, position, zoom, data){ 
	var map = L.map(element).setView(position, zoom)
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	_.forEach(data.businesses, function(d){
		L.marker([d.location.coordinate.latitude, d.location.coordinate.longitude]).bindPopup(d.name +"<br>" + d.location.address + "<br>" + getstar(d.rating)+ "<br><br>" + "<img src ="+ d.image_url + "></img>" ).addTo(map);
	})
	return map
}