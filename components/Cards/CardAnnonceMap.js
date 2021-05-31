import React, { useState, useEffect } from "react";
import {connect} from "react-redux";
import GoogleMapReact from 'google-map-react';

const CustomMarker = ({ text }) => <div className="custom-marker rounded-full">
	<img className="markerMap" src={require("assets/img/brand/apple-icon.png")} alt="marker"/>
</div>;


const CardAnnonceMap = ({ dispatch,
							loading,
							idea}) => {

	const markers = [
		{
			name: idea?.title,
			latlng: [52.499040, 13.418392]
		}
	];

	const mapConfig = {
		center: [52.499040, 13.418392],
		zoom: 15
	};

	const GoogleMapsMarkers = markers.map(marker => (
		<CustomMarker
			key={`marker_${marker.name}`}
			lat={marker.latlng[0]}
			lng={marker.latlng[1]}
			text={marker.name}
		/>
	));

	return (
		<>
			{idea?.shop_address && (
				<div style={{ height: '60vh', width: '100%' }}>
					<GoogleMapReact
						defaultCenter={mapConfig.center}
						defaultZoom={mapConfig.zoom}
						layerTypes={['TransitLayer', 'TransitLayer']}
						bootstrapURLKeys={{
							key: 'AIzaSyC2fW_aWDQHUasTrFoS9GlcJLraQnzCu_Q',
							language: 'fr'
						}}
					>
						{GoogleMapsMarkers}
					</GoogleMapReact>
				</div>

			)}
		</>
	);
}

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	idea: state.ideasReducer.selectedIdea,
	hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(CardAnnonceMap)
