import React, { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon, marker, latLng } from "leaflet"
import axios from "axios"


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

                }, 1000)

                console.log(lat, lng)
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
                    center={[46.232193, 2.213749]}
                    zoom={12}
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
                                iconUrl:'https://cdn.mapmarker.io/api/v1/fa?size=120&icon=fa-leaf&color=%23194D33&',
                                iconSize: [51, 51],
                                iconAnchor: [10, 10],
                            })
                        }
                    >
                        <Popup
                            className={'mapPopup'}
                        >
                            <div className="popContent">
                                <h4 className="font-semibold text-green-500 text-2xl">{idea?.title}</h4>
                                {idea?.uploads.length > 0 ? (
                                <img
                                    alt={idea?.uploads[0].name}
                                    src={process.env.NEXT_PUBLIC_API_URL + idea?.uploads[0].url}
                                    className="mapImg shadow-lg mx-auto rounded-lg"
                                />
                                ) : (
                                <img
                                    alt="defalut ideaImg"
                                    src={require("assets/img/idea/default.jpg")}
                                    className="shadow-lg mx-auto rounded-lg"
                                />
                                )
                                }
                                <p className="text-xl text-center">{idea?.category}</p>
                            </div>
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
