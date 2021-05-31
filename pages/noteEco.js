import React, {useEffect, useState} from 'react';
import Link from "next/link";
import useLoggedUser from 'service/hooks/useLoggedUser';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import {listsNoteEcos} from "helpers/constant";

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
                      Gagner des leaves <i className="fas fa-leaf"></i><i className="fas fa-leaf"></i>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
          <section className="pt-20 pb-48">
              <div className="container mx-auto px-4">
                  <div className="flex flex-wrap justify-center text-center mb-24">
                      <div className="w-full lg:w-6/12 px-4"><h2 className="text-4xl font-semibold">NOTE ECOLOGIQUE</h2>
                          <p className="text-lg leading-relaxed m-4 text-blueGray-500">Ecoechange collecter votre note ecologique !!</p></div>
                  </div>
                  <div className="flex flex-wrap">
                      {listsNoteEcos.map(listsNoteEco => (
                      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
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
          </section>
      </main>
      <Footer />
    </>
  );
}
