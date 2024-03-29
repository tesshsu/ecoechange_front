import React from "react"
import { connect } from "react-redux"
import dynamic from "next/dynamic"
import CardAnnonceVote from "../../Cards/CardAnnonceVote";
const DetailsDropdown = ({ dispatch, loading, idea }) => {
    const address_boutique = idea?.shop_address ? idea.shop_address : "none"
    const ncs = [
        {
            icon: "fas fa-seedling",
            name: "Détails de l’idée",
            value: idea?.content,
        },
        {
            icon: "fas fa-map-pin",
            name: "Adresse de la boutique",
            value: address_boutique,
        },
    ]

    let Equips = idea?.equipments

    const Map = dynamic(
        () => import("../../Cards/CardAnnonceMap"), // replace '@components/map' with your component's location
        {
            loading: () => <p>Téléchargements en cours...</p>,
            ssr: false, // This line is important. It's what prevents server-side render
        }
    )

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full px-8 py-2 px-2 flex-1">
                    <h4 className="mt-2 px-2 py-2 text-xl leading-relaxed text-gray-800 underline font-bold uppercase rounded text-center">
                        <i className="fab fa-pagelines"></i> L’IDÉE EST LA...
                    </h4>
                </div>
                <CardAnnonceVote idea={idea} />
                {ncs?.map((nc) => (
                    <div className="container px-2 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full px-4">
                                <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200">
                                    <i className={nc.icon}></i> {nc.name}{" "}
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="ideaTextarea question-1 text-xl block my-2 p-3 text-green-500 rounded border border-solid border-gray-200">
                                    {nc.value}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                {idea?.shop_address&&(
                    <div className="w-full px-4">
                        <Map />
                        <p className="text-sm text-gray-600 ml-2"><i className="fas fa-info animate-bounce"></i> Certaines localisations peuvent ne pas s'afficher correctement</p>
                    </div>
                )}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    loading: state.ideasReducer.loading,
    idea: state.ideasReducer.selectedIdea,
    hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(DetailsDropdown)
