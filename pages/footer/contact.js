import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardAcceptCondition from "components/Cards/CardAcceptCondition.js";
import * as emailjs from 'emailjs-com';
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import PubContentThreeIcons from "../../layouts/PubContentThreeIcons";
import Link from "next/link";

export default function Contact() {
    const [showModal, setShowModal] = React.useState(false);
    const [isloading, setIsloading] = React.useState(false);
    function sendEmail(e) {
        e.preventDefault();
        setIsloading(true)
        emailjs.sendForm('service_g2k8s3w', 'template_rm99irv', e.target, 'user_xUAhZjLrAJ50qGrFkVlKy')
            .then((result) => {
                setShowModal(true),
                    setIsloading(false)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <IndexNavbar fixed />
            <main className="contact-page">
                <section className="relative block">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://i.ibb.co/DWFypnK/ecoechange-ensemble.jpg')",
                        }}
                    >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-75 bg-black"
                    ></span>
                    </div>
                    <div className="contactContent container mx-auto px-4 pt-32">
                        {showModal ? (
                            <>
                                <Modal closeOnEsc={false} open={open} onClose={() => setShowModal(false)}>
                                    <PubContentThreeIcons/>
                                    <h2 className="text-2xl font-semibold text-center">Votre message a bien été envoyé, </h2>
                                    <h2 className="text-2xl font-semibold text-center">Nous vous répondrons au plus vite. </h2>
                                </Modal>
                            </>
                        ) : null}
                        <div className="contactForm flex flex-wrap justify-center mt-8">
                            <div className="w-full lg:w-6/12 px-4 z-40">
                                <h1 className="text-6xl text-white font-semibold capitalize px-3">
                                    sauvons la planète ensemble
                                </h1>
                                <h4 className="text-2xl text-white font-semibold px-3">
                                    Que vous soyez un professionnel ou un particulier, ÉcoÉchange a besoin de vous <i
                                    className="fas fa-leaf"></i>
                                </h4>
                                <h5 className="text-xl text-white font-semibold px-3">
                                    Rassemblons nos force et rejoignez nous pour rendre l'environnement plus vert
                                </h5>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white p-5 opacity-75">
                                    <h4 className="text-2xl font-semibold px-3 text-center">
                                        Rejoignez / Contactez-nous
                                    </h4>
                                    <form className="contact-form py-4 px-4" onSubmit={sendEmail}>
                                        <input className="block uppercase text-gray-700 text-xs font-bold mb-2"type="hidden" name="contact_number" />
                                        <div className="flex flex-wrap mt-4">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">Votre nom / boutique * </label>
                                                <input className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                       required = {true}
                                                       type="text"
                                                       name="from_name"
                                                />
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">Votre Email *</label>
                                                <input className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                       type="email"
                                                       required = {true}
                                                       name="from_email"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap mt-4">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2 mt-4">Vous êtes</label>
                                                <select name="from_statu" id="cars">
                                                    <option value="particulier">particulier</option>
                                                    <option value="professionnel">professionnel</option>
                                                </select>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2 mt-4">Concernant</label>
                                                <select name="from_concernant" id="from_concernant">
                                                    <option value="votre compte">votre compte</option>
                                                    <option value="votre idée">à propos de vos idées</option>
                                                    <option value="demande partenaire">demande de partenariat</option>
                                                    <option value="demande nous mettre votre idee sur le plateform">demande mettre votre idee</option>
                                                    <option value="demande nous mettre votre idee sur le plateform">supprimer votre compte</option>
                                                </select>
                                            </div>
                                        </div>
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2 mt-4">Plus de détails ? </label>
                                        <textarea
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            required = {true}
                                            name="message"
                                        />
                                        <CardAcceptCondition />
                                        <input
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            className="bg-green-500 text-white active:bg-gray-700 text-sm font-bold mt-4 uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                            value="Allons-y"
                                        />
                                        <h4 className="text-gray-800 text-center">Vous pouvez nous rejoindre directement </h4>
                                        <div className="flex items-center text-center">
                                            <Link href="/auth/register">
                                                <a
                                                    href="#"
                                                    className={
                                                        "text-xl py-1 px-2 font-normal block w-full whitespace-no-wrap bg-transparent underline"
                                                    }
                                                >
                                                    <i className="text-gray-800 fas fa-user-circle" />S'inscrire
                                                </a>
                                            </Link>
                                            <Link href="/auth/login">
                                                <a
                                                    href="#"
                                                    className={
                                                        "text-xl py-1 px-2 font-normal block w-full whitespace-no-wrap bg-transparent underline"
                                                    }
                                                >
                                                    <i className="text-gray-800 fas fa-user-circle" />Se connecter
                                                </a>
                                            </Link>
                                        </div>
                                        {isloading ? (
                                            <div className="loading text-center text-green-500 text-xl"><i className="fas fa-spinner animate-spin"></i></div>
                                        ):(
                                            null
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
