import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
	width: '100%',
	height: '100%',
};

const MapContainer = (props) => {
	const { latitude, longitude, apiKey } = props;

	return (
		<Map
			google={props.google}
			zoom={14}
			style={mapStyles}
			initialCenter={{ lat: latitude, lng: longitude }}
		>
			<Marker position={{ lat: latitude, lng: longitude }} />
		</Map>
	);
};

export default GoogleApiWrapper({
	apiKey: (props) => props.apiKey,
})(MapContainer);
