import React from 'react';
import { Marker } from 'react-leaflet';

import IconLocation from './IconLocation';

export default function Markers(props) {
	const { places } = props;
	const markers = places.map((place, i) => {
		return (
			<Marker
				key={i}
				position={{ lat: `${place.geometry[0]}`, lng: `${place.geometry[1]}` }}
				icon={IconLocation}
			/>
		);
	});
	return markers;
}
