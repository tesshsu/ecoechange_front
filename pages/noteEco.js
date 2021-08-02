import React, {useEffect, useState} from 'react';
import Link from "next/link";
import useLoggedUser from 'service/hooks/useLoggedUser';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import {listsNoteEcos} from "helpers/constant";

export default function NoteEco() {
    const [openTab, setOpenTab] = React.useState(1);
   const {
    isAuthentificated,
    loggedUser
  } = useLoggedUser();

  let [tokken,settokken]=useState(null);

  useEffect(() => {
    if (isAuthentificated && loggedUser) {
        try{
			const getTokken=async ()=>{
              const tok= await localStorage.getItem('ACCESS_TOKEN');
			  if(tok){
				settokken(tok);
			  }
			}
			getTokken();
		}catch(error){
			console.log(error.message);
        }
    }
  }, [isAuthentificated, loggedUser]);
  return (
    <>
      <IndexNavbar fixed />
        <main className="prix-page">
            <div className="relative pt-16 pb-20 flex content-center items-center justify-center min-h-screen-35">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://i.ibb.co/B4GVFRy/concours.jpg')",
                    }}
                >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-black"
            ></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl mt-12">
                                    L E A V E S
                                </h1>
                                <p className="text-white font-semibold text-xl mt-2">Plus vous en avez, plus votre idée est considérée
                                    par nos critères, comme respectueuse de l'environnement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="pt-20 pb-48">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-6/12 px-4"><h2 className="text-4xl font-semibold">Que signifie votre note écologique</h2>
                            <p className="text-lg leading-relaxed m-4 text-blueGray-500 animate-bounce">Plus vous avez de leaves, plus vos clients cibles vous retrouvent</p></div>
                    </div>
                    <div className="w-full">
                        <ul
                            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                            role="tablist"
                        >
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 1
                                            ? "text-white bg-green-500"
                                            : "text-blueGray-600 bg-green-500")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    <i className="fas fa-file-signature mr-1"></i> Notation
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 2
                                            ? "text-white bg-green-500"
                                            : "text-blueGray-600 bg-green-500")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    <i className="fas fa-seedling mr-1"></i>  Bénéfice
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 3
                                            ? "text-white bg-green-500"
                                            : "text-blueGray-600 bg-green-500")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    <i className="fas fa-praying-hands mr-1"></i> A vous de jouer
                                </a>
                            </li>
                        </ul>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <h4 className="text-center text-green-500 text-2xl mt-4">Voici les details de la note écologique </h4>
                                        <img alt="noteEco"
                                             src={require("assets/img/note/ecoDetail.png")}
                                             className="shadow-lg rounded-lg mx-auto"
                                        />
                                        <div className="flex flex-wrap">
                                            {listsNoteEcos.map(listsNoteEco => (
                                                <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                                                    <div className="px-6">
                                                        <img alt="noteEco"
                                                             src={listsNoteEco.note}
                                                             className="shadow-lg rounded-lg mx-auto"
                                                        />
                                                        <div className="pt-6 text-center"><h5 className="text-2xl font-bold">{listsNoteEco.name}</h5>
                                                            <p
                                                                className="mt-1 text-xl text-green-500">{listsNoteEco.detail}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <h4 className="text-center text-green-500 text-2xl mt-4">Selon votre note, quel benefice vous aurez ?</h4>
                                        <img alt="noteEco"
                                             src={require("assets/img/note/benefice.png")}
                                             className="shadow-lg rounded-lg mx-auto"
                                        />
                                        <p className="text-left text-gray-700 text-md mt-4">
                                            Nous traitons les données de votre idée/annonce par <span className="text-green-500 text-xl font-semibold">des mots clés.</span>
                                        </p>
                                        <p className="text-gray-700 text-md text-left">
                                            Ces mots clés sont analysés par notre équipe puis nous traitons <span className="text-green-500 text-xl font-semibold">ces données intelligentes</span> afin de les utiliser comme critères de recherche Google.
                                            Cela signifie que selon votre note écologique, il est possible d’augmenter votre présence par<span className="text-green-500 text-xl font-semibold"> référencement naturel.</span>
                                        </p>
                                        <p className="text-gray-700 text-md text-left">
                                            Attention, selon les changements de Google, les critères pourraient possiblement changer selon les périodes.
                                        </p>
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                        <h4 className="text-center text-green-500 text-2xl mt-4">LA COMMUNAUTÉ VALIDE, Badge de certification à partir de 5
                                            confirmations</h4>
                                        <div className="flex flex-wrap">
                                            <div className="w-full md:w-4/12 px-4 text-center">
                                                <img alt="noteEco"
                                                     src={require("assets/img/note/certificate/1.png")}
                                                     className="shadow-lg rounded-lg mx-auto"
                                                />
                                            </div>
                                            <div className="w-full md:w-4/12 px-4 text-center">
                                                <img alt="noteEco"
                                                     src={require("assets/img/note/certificate/2.png")}
                                                     className="shadow-lg rounded-lg mx-auto"
                                                />

                                            </div>
                                            <div className="w-full md:w-4/12 px-4 text-center">
                                                <img alt="noteEco"
                                                     src={require("assets/img/note/certificate/3.png")}
                                                     className="shadow-lg rounded-lg mx-auto"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-xl mt-4 text-left">
                                            Nous avons développé une fonctionnalité <span className="text-green-500 text-xl font-semibold">"La communauté valide"</span>.
                                        </p>
                                        <p className="text-gray-700 text-md text-left">
                                            Cela permettait aux utilisateurs (avoir un compte EcoEchange étant obligatoire pour participer) de jouer le juge pour les idées/ annonces.
                                            Il y a 3 confirmations possibles: <span className="text-green-500 text-xl font-semibold">"Je confirme la note écologique", “J'ai réalisé l'idée" ou “J'ai visité l'endroit".</span>
                                        </p>
                                        <p className="text-gray-700 text-md text-left">
                                            La communauté aura également pour rôle de confirmer la note écologique. Cela signifie que plus il y aura de votes, plus votre annonce/idée aura de chance de se retrouver sur Google <i
                                            className="fab fa-google-plus animate-bounce text-green-500"></i> , par référencement naturel.

                                        </p>
                                    </div>
                                </div>
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
