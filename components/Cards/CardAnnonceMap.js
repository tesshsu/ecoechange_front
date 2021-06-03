import React, { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"
import GoogleMapReact from "google-map-react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon, marker, latLng } from "leaflet"
import axios from "axios"

// const CustomMarker = ({ text }) => (
//     <div className="custom-marker rounded-full">
//         <img
//             className="markerMap"
//             src={require("assets/img/brand/apple-icon.png")}
//             alt="marker"
//         />
//     </div>
// )

const CardAnnonceMap = ({ dispatch, loading, idea }) => {
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()
    const [address, setAddress] = useState()
    const [LatLng, setLatLng] = useState()
    const [map, setMap] = useState(null)

    const markers = {
        LatLng: [lat ? lat : 0, lng ? lng : 0],
    }

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const addressSplit = idea?.shop_address.split(" ")
                const addressJoin = addressSplit.join("+")

                setTimeout(async () => {
                    const res = await axios.get(
                        `https://nominatim.openstreetmap.org/search?q=${addressJoin}&format=jsonv2&limit=1`
                    )

                    try {
                        setLat(parseFloat(res.data[0].lat))
                        setLng(parseFloat(res.data[0].lon))
                        console.log(
                            parseFloat(res.data[0].lat),
                            parseFloat(res.data[0].lon)
                        )

                        if (map) {
                            map.flyTo([
                                parseFloat(res.data[0].lat),
                                parseFloat(res.data[0].lon),
                            ])
                        }
                    } catch (error) {
                        console.log(error.message)
                    }

                    // setLatLng([res.data[0].lat, res.data[0].lon])
                }, 1000)

                console.log(lat, lng)
                // if (map) {
                //     map.flyTo([
                //         parseFloat(res.data[0].lat),
                //         parseFloat(res.data[0].lon),
                //     ])
                // }
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchApi()
    }, [lat])

    console.log(LatLng)

    return (
        <>
            {idea?.shop_address ? (
                <MapContainer
                    center={[48.864716, 2.349014]}
                    zoom={15}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    style={{ height: "60vh", width: "100%" }}
                    whenCreated={(map) => setMap(map)}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker
                        position={markers.LatLng}
                        icon={
                            new Icon({
                                iconUrl:
                                    "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                            })
                        }
                    >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : null}
        </>
    )
}

const mapStateToProps = (state) => ({
    loading: state.ideasReducer.loading,
    idea: state.ideasReducer.selectedIdea,
    hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(CardAnnonceMap)
