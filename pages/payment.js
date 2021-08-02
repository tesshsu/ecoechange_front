import React from 'react';
import Link from "next/link";
import useLoggedUser from '../service/hooks/useLoggedUser';
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import {listPubs} from "../helpers/constant";
//import ModalPayment from "../components/Modal/ModalPayment";
import {connect} from "react-redux";
import usePayments from "../service/hooks/usePayments";


const Payment = ({
                  dispatch,
                  loading,
                     idea,
                  hasErrors
              }) => {
    const {
        loggedUser
    } = useLoggedUser();

    const {
        createPayment
    } = usePayments();

    const onPaymentSubmit = async (token) => {
        try {
            let paymentRequest = {};
            paymentRequest.user_id = loggedUser?.loggedUser?.id;
            paymentRequest.idea_id = idea?.id;
            paymentRequest.amount = 699; // in cents
            paymentRequest.currency = "eur";
            paymentRequest.description = "Annonce Premium pour votre " + (idea?.category ? idea?.category : "") + " " + ( idea?.sub_category ? idea?.sub_category : "");
            paymentRequest.provider = 'stripe';
            paymentRequest.token = token.id;

            return await createPayment(paymentRequest);
        } catch (err) {
           alert("votre mode paiement n'est pas valide")
        }
    }

    return (
        <>
            <IndexNavbar fixed/>
            <main className="payment-page">
                <div className="flex justify-center mt-24 bg-orange-500 text-2xl font-bold ">
                    {listPubs.map(listPub => (
                        <div key={listPub.title.replace(/\s+/g, '_')} className="mr-4 p-3 text-center">
								<span className="block uppercase tracking-wide text-white">
								  <i className={listPub.icon}> </i>
								</span>
                            <span className="text-sm text-white">{listPub.title}</span>
                        </div>
                    ))}
                </div>
                <section className="container px-4 mx-auto border-2 rounded border-gray-500 py-10 z-40">
                    <div className="product flex flex-wrap mt-8">
                        <div className="w-full md:w-6/12 px-4">
                            {idea?.uploads.length > 0 ? (
                                <img
                                    alt={idea?.uploads[0].name}
                                    src={process.env.NEXT_PUBLIC_API_URL + idea?.uploads[0].url}
                                    className="shadow-lg mx-auto rounded-lg"
                                />
                            ) : (
                                <img
                                    alt="defalut ideaImg"
                                    src={require("assets/img/idea/default.jpg")}
                                    className="shadow-lg mx-auto rounded-lg"
                                />
                            )
                            }
                        </div>
                        <div className="w-full md:w-6/12 px-4">

                            <div className="description">
                                <h1 className="ml-3 leading-6 font-medium text-green-500 text-2xl">Tarif
                                    Premium *</h1>
                                <div className="ml-3 leading-6 font-medium text-green-500 text-4xl">6.99€
                                </div>
                                <p className="ml-3 leading-6 font-medium text-gray-700 text-lg">Votre Annonce id: <span className="text-green-500 font-bold">{idea?.id}</span></p>
                                <p className="ml-3 leading-6 font-medium text-gray-700 text-lg">Votre Annonce catégorie : <span className="text-green-500 font-bold">{idea?.category}, {idea?.sub_category}</span></p>

                                <p className="ml-3 leading-6 font-medium text-gray-600 text-md mt-4">*Le tarif
                                    est pour une annonce et dure dans un mois</p>
                                <ul className="ml-3 leading-6 font-medium text-gray-600 text-md mt-4">
                                    <li>Votre annonce sera sur Top list</li>
                                    <li>Ajouter le note de confiance</li>
                                    <li>10 photos gratuites</li>
                                    <li>Estimation du véhicule par des professionnels qualifiés</li>
                                    <li>Logo qualité garantie</li>
                                </ul>
                                <p className="ml-3 leading-6 text-gray-500 text-md mt-2">
                                    vous acceptez
                                    les conditions pour diriger ver le payment et notre politique de
                                    confidentialité
                                    <Link href="/footer/policy">
                                        <a
                                            className={
                                                "text-sm font-normal block w-full whitespace-no-wrap bg-transparent text-green-500"
                                            }
                                        >
                                            Lire la politique de confidentialité
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="paymentformBlock mb-12 text-center p-8">
                        <p className="ml-3 leading-6 font-medium text-gray-600 text-md mb-4">
                            Accepter des paiements par cartes bancaires :
                            <span className="">
                                <img
                                    alt="defalut ideaImg"
                                    src={require("assets/img/credit-cards.png")}
                                    className="shadow-lg mx-auto rounded-lg"
                                />
                            </span>
                        </p>
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

export default connect(mapStateToProps)(Payment)
