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
		}catch(err){
			console.log(err);
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
                    <p className="text-white font-semibold text-xl mt-2">Les Leaves, plus vous en avez, plus votre idée est considérée
                        par nos critères, comme respectueuse de l'environnement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <section className="pt-20 pb-48">
              <div className="container mx-auto px-4">
                  <div className="flex flex-wrap justify-center text-center mb-24">
                      <div className="w-full lg:w-6/12 px-4"><h2 className="text-4xl font-semibold">Quoi signifier votre note ecologique</h2>
                          <p className="text-lg leading-relaxed m-4 text-blueGray-500 animate-bounce">Plus leaves, plus retrouve par votre target clients</p></div>
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
                                  <i className="fas fa-file-signature mr-1"></i> critères
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
                                  <i className="fas fa-seedling mr-1"></i>  Benefice
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
                                  <i className="fas fa-praying-hands mr-1"></i> A vous jouer
                              </a>
                          </li>
                      </ul>
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                          <div className="px-4 py-5 flex-auto">
                              <div className="tab-content tab-space">
                                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                      <h4 className="text-center text-green-500 text-2xl mt-4">Voici les details de note d'ecologique</h4>
                                      <img alt="noteEco"
                                           src={require("assets/img/profile.jpg")}
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
                                      <h4 className="text-center text-green-500 text-2xl mt-4">Selon votre note, quel benefice tu auras ?</h4>
                                      <img alt="noteEco"
                                           src={require("assets/img/landing.jpg")}
                                           className="shadow-lg rounded-lg mx-auto"
                                      />
                                      <p className="text-center text-gray-700 text-md mt-4">
                                          Nous traitons les donnes de votre idee/annonce par les mots cles, ces mots cles analyser par notre equip selon le result de google recherche,
                                          nous traitons ces donnes intelligences ont transformer les criteres de recherche google engine, cela signifique selon votre note d'ecologique,
                                          il est possible argumenter votre presence par reference naturalle, attentions, selon les changement de google recherchen engine, chaque peroid pourrai
                                          possible change le criteres, dans ce cas plus les informations, les annonces que vous postuler, il est sera plus chance de retourver par les utilsatuers target qui
                                          se retourver votre boutique/ servie / idee.
                                      </p>
                                  </div>
                                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                      <h4 className="text-center text-green-500 text-2xl mt-4">LA COMMUNAUTÉ VALIDE, Badge de certification à partir de 5
                                          confirmations</h4>
                                      <img alt="noteEco"
                                           src={require("assets/img/qualite_logo.png")}
                                           className="shadow-lg rounded-lg mx-auto"
                                      />
                                      <p className="text-center text-gray-700 text-md mt-4">
                                          A l'avenir, nous developerons future fountionalite " La communaute valide" , cela pourrai permettre notre member ( inscription obligatoir pour participer ) jouer le judge pour
                                          les idees/ annoces, chaque page annoces affiches les selections comme "je confirme le leaf count", ""J'ai
                                          réalisé l'idée"  ou j'ai visité l'endroit", la communate valide egalement jouer le role de la confirmation du note d'ecologique, cela signifique plus de voter,
                                          votre annoce /idee sera possible encore plus de la chance se retourve par google chercher engien, ou reference naturale
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
