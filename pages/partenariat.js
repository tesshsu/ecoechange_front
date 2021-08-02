import React, {useEffect, useState} from 'react';
import Link from "next/link";
import useLoggedUser from 'service/hooks/useLoggedUser';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import {listPubs, listsPartenaires} from "helpers/constant";

export default function Prix() {
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
        <div className="relative pt-16 pb-20 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
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
                  <h1 className="text-white font-semibold text-5xl">
                      Nos partenaires
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
          <section className="pt-20 pb-48">
              <div className="container mx-auto px-4">
                  <div className="flex flex-wrap justify-center text-center mb-24">
                      <div className="w-full lg:w-6/12 px-4"><h2 className="text-4xl font-semibold">Here are our
                          heroes</h2><p className="text-lg leading-relaxed m-4 text-blueGray-500">Plateforme soutenue par nos partenaires communautaires et associatifs</p></div>
                  </div>
                  <div className="flex flex-wrap">
                      {listsPartenaires.map(listsPartenaire => (
                      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                          <div className="px-6">
                              <img alt="partenariat1"
                                   src={listsPartenaire.photo}
                                   className="partenaireImg shadow-lg rounded-lg mx-auto max-w-180-px"
                              />
                              <div className="pt-6 text-center"><h5 className="text-2xl font-bold">{listsPartenaire.name}</h5><p
                                  className="mt-1 text-md text-blueGray-400 uppercase font-semibold">{listsPartenaire.region}</p>
                                  <p
                                      className="mt-1 text-sm text-gray-400">{listsPartenaire.detail}</p>
                                  <div className="mt-2 text-2xl">
                                      <button
                                          className="bg-lightBlue-400 text-green-500 w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                          type="button">
                                          <a
                                              href={listsPartenaire.url}
                                              target="_blank"
                                          >
                                              <i className="fas fa-paste animate-bounce"></i>
                                          </a>
                                      </button>
                                      <button
                                          className="bg-lightBlue-600 text-green-500 w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                          type="button">
                                          <a
                                              href={listsPartenaire.location}
                                              target="_blank"
                                          >
                                          <i className="fas fa-map-marker-alt animate-bounce"></i>
                                          </a>
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      ))}
                  </div>
              </div>
          </section>
      </main>
      <Footer />
    </>
  );
}
