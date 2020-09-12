import React, { useState, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation, useHistory } from 'react-router-dom';

import Markers from './Markers';
import { places } from '../assets/data.json';

export default function MapView() {
	const [
		state,
		setState
	] = useState({
		currentLocation: { lat: '38.407460', lng: '-0.407823' }
	});

	const location = useLocation();
	const history = useHistory();

	console.log(location);
	useEffect(() => {
		if (location.state.latitude && location.state.longitude) {
			const currentLocation = {
				lat: location.state.latitude,
				lng: location.state.longitude
			};
			setState({ ...state, currentLocation });
			history.replace({ pathname: '/map', state: {} });
		}
	}, []);
	return (
		<Map center={state.currentLocation} zoom={13}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
			/>
			<Markers places={places} />
		</Map>
	);
}
