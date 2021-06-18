import React, { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"
import { MapContainer, Marker, TileLayer, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon, marker, latLng } from "leaflet"
import {data} from "../../helpers/constant"


const CardAnnonceMap = ({ dispatch, loading, ideas }) => {
    const centerLat = (data.minLat + data.maxLat) / 2;
    const distanceLat = data.maxLat - data.minLat;
    const bufferLat = distanceLat * 0.05;
    const centerLong = (data.minLong + data.maxLong) / 2;
    const distanceLong = data.maxLong - data.minLong;
    const bufferLong = distanceLong * 0.05;

    return (
        <>
                <div className="flex flex-wrap">
                    <MapContainer
                        style={{ height: "50vh", width: "100%" }}
                        zoom={6}
                        scrollWheelZoom={true}
                        center={[centerLat, centerLong]}
                        bounds={[
                            [data.minLat - bufferLat, data.minLong - bufferLong],
                            [data.maxLat + bufferLat, data.maxLong + bufferLong]
                        ]}
                    >
                        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        {data.city.map((city, k) => {
                            return (
                                <Marker
                                    key={k}
                                    position={[city["coordinates"][1], city["coordinates"][0]]}
                                    icon={
                                        new Icon({
                                            iconUrl: 'https://cdn.mapmarker.io/api/v1/fa?size=120&icon=fa-leaf&color=%23194D33&',
                                            iconSize: [51, 51],
                                            iconAnchor: [10, 10],
                                        })
                                    }
                                >
                                    <Popup
                                        className={'mapPopup'}
                                    >
                                        <div className="popContent">
                                            <a href={`/annonce?id=${city["id"]}`} rel="noreferrer" target="_blank">
                                                <img
                                                    alt={city["name"]}
                                                    src={city["src"]}
                                                    className="mapImgHome shadow-lg mx-auto rounded-lg"
                                                />
                                            </a>
                                            <h4 className="font-semibold text-green-500 text-md">{city["name"]}</h4>
                                            <p className="text-sm text-center">{city["category"]}</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            );
                        })}
                    </MapContainer>
                </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    loading: state.ideasReducer.loading,
    idea: state.ideasReducer.selectedIdea,
    hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(CardAnnonceMap)
