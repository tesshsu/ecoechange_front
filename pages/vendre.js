import React, {useEffect, useState} from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import QuestionsClassic from "components/Tabs/QuestionsClassic.js";
import PubContent2 from "layouts/PubContent2.js";
import PubContentThreeIcons from "layouts/PubContentThreeIcons.js";
import useLoggedUser from 'service/hooks/useLoggedUser';
import {connect} from 'react-redux'
import useAnnonces from 'service/hooks/useAnnonces';
import {premium_options_display} from "helpers/constant";
import Link from "next/link";
import PubContentConnection from "layouts/PubContentConnection.js";
const Vendre = ({
                    dispatch
                }) => {

    const {
        isAuthentificated
    } = useLoggedUser();
    const [cookie, setCookie] = React.useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('ACCESS_TOKEN');
            if(token){
                setCookie(true)
            }
        }
    }, [dispatch]);
    const {
        idea
    } = useAnnonces();

    const ideaHasOption = (premium_opt) => {
        return premium_options_display(premium_opt, idea?.options?.prenium?.includes(premium_opt.value));
    }

    useEffect(() => {

    }, [dispatch])

    return (
        <>
            <IndexNavbar fixed/>
            <main className="vendre-page">
                <section className="postBlock relative py-16 mt-48">
                    <div
                        className="container mx-auto px-4 bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://i.ibb.co/LSNWFgF/1.jpg')",
                        }}
                    >
                        <div
                            className="OutSideVendreBlock relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl -mt-64">
                            {idea?.premium ? (
                                <h1 className="font-bold text-4xl text-gray-700 text-center">
                                    RÉPONSES AU QUESTIONNAIRES DE CONFIANCE <span className="font-bold text-green-500">(Premium)</span>
                                </h1>) : (
                                <h1 className="font-bold text-2xl text-gray-700 mt-2 text-center">
                                    Déposer une annonce, commençons par l’essentiel !
                                </h1>
                            )
                            }
                            <div className="startQblock">
                                {isAuthentificated && cookie ? (
                                    <QuestionsClassic/>
                                ) :(
                                    <div className="flex p-5 rounded-lg container items-center bg-green-500 ">
                                        <PubContentConnection/>
                                    </div>
                                )}

                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-12/12 px-4 lg:order-1">
                                        <p className="text-gray-900">
                                            Un vendeur professionnel se faisant passer pour un consommateur ou un non-professionnel sur Vinted encourt les sanctions prévues à <a
                                            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032227120/"
                                            className="text-blue-500"
                                        >l'Article L. 132-2 du Code </a> de la Consommation.
                                        </p>
                                    </div>
                                </div>
                            </div>
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
    idea: state.ideasReducer.selectedIdea,
    hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(Vendre)
