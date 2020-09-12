import L from 'leaflet';

const IconLocation = L.icon({
	iconUrl: require('../assets/Icon.svg'),
	iconRetinaUrl: require('../assets/Icon.svg'),
	iconAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	iconSize: [
		35,
		35
	],
	className: 'leaflet-venue-icon'
});

export default IconLocation;
