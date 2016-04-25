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