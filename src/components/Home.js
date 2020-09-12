import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	const [
		position,
		setPosition
	] = useState({
		longitude: 0,
		latitude: 0
	});
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function(pos) {
				setPosition({
					longitude: pos.coords.longitude,
					latitude: pos.coords.latitude
				});
			},
			function(err) {
				console.log(err);
			},
			{ enableHighAccuracy: true }
		);
	}, []);
	return (
		<div>
			<h1>Position:</h1>
			<p>Latitude: {`${position.latitude}`}</p>
			<p>Longitude: {`${position.longitude}`}</p>
			<Link to={{ pathname: '/map', state: position }}>
				See my location in Map
			</Link>
		</div>
	);
}
