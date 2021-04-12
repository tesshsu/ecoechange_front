import React from "react";
import {connect} from "react-redux";
import GoogleMapReact from 'google-map-react';


const CardAnnonceSlider = ({ dispatch,
					  loading,
					  idea}) => {

	const MapComponent = ({ text }) => <div>{text}</div>;
	const Mapsettings = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
		};

	return (
		<>
			{idea?.shop_address ? (
				<div className="shopMap" style={{ height: '50vh', width: '100%' }}>
					<GoogleMapReact
						bootstrapURLKeys={{ key: "AIzaSyBF148sUCvXUVsdaLt5vbjSkCpjBc6C3hQ" }}
						defaultCenter={Mapsettings.center}
						defaultZoom={Mapsettings.zoom}
					>
						<MapComponent
							lat={59.955413}
							lng={30.337844}
							text="My Marker"
						/>
					</GoogleMapReact>
				</div>
			):(
				null
			)
			}
		</>
	);
  }

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	idea: state.ideasReducer.selectedIdea,
	hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(CardAnnonceSlider)
