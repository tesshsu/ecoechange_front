import React, {useEffect} from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Pagination from '../components/Annonce/Pagination.js';
import {connect} from "react-redux";
import MesAnnoncesLists from "../components/Annonce/MesAnnonceLists";

const MesAnnonces = ({
                         dispatch,
                         loading,
                         ideas,
                         selectedIdea,
                         current_page,
                         from,
                         to,
                         per_page,
                         last_page,
                         total,
                         hasErrors
                     }) => {

    return (
        <>
            <IndexNavbar fixed/>
            <main className="mesAnnonces-page">
                <section className="pt-10 pb-8 mt-4">
                    <div className="container mx-auto px-4 mt-24">
                        <Link href="/annonces">
                            <button
                                className="bg-white text-gray-700 active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                type="button"
                            >
                                <i className="fas fa-chevron-left"></i> retour à la page d'accueil
                            </button>
                        </Link>
                        <div className="flex flex-wrap">
                            <h4 className="ml-4 font-bold text-lg text-gray-700 mt-4">Mes idées en ligne</h4>
                            <MesAnnoncesLists/>
                            { total == 0  ? (
                                <div className="container mx-auto text-center rounded border border-solid border-gray-200 py-2">
                                    <h5 className="text-xl font-semibold pb-4">
                                        Vous n'avez pas encore d'idées, veuillez publier l'idée / annonces rapidement !!
                                    </h5>
                                    <button
                                        className="bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-3 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        <Link href="/partager">
                                            <a
                                                href="#pablo"
                                                className={
                                                    "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
                                                }
                                            >
                                                <i className="fas fa-thumbs-up animate-ping"></i> Cliquez ici
                                            </a>
                                        </Link>
                                    </button>
                                </div>
                            ):( '' )}
                        </div>
                        <div className="flex content-center items-center justify-center h-full mb-24 mt-8">
                            {total >= 10 ?(
                                <Pagination transparent
                                            current_page={current_page}
                                            from={from}
                                            to={to}
                                            per_page={per_page}
                                            last_page={last_page}
                                            total={total}
                                />
                            ):(
                                null
                            ) }

                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}


const mapStateToProps = (state) => ({
    loading: state.ideasReducer.loading,
    ideas: state.ideasReducer.selectedIdea,
    current_page: state.ideasReducer.current_page,
    from: state.ideasReducer.from,
    to: state.ideasReducer.to,
    per_page: state.ideasReducer.per_page,
    last_page: state.ideasReducer.last_page,
    total: state.ideasReducer.total,
    hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(MesAnnonces)
