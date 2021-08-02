import React, {useEffect, useState} from 'react';
import Link from "next/link";
import useLoggedUser from 'service/hooks/useLoggedUser';
import {basics} from "helpers/constant";

export default function PubContent() {
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
      <section className="block relative z-1 bg-white-700">
		    <div className="container mx-auto px-4 pb-32 pt-16">
			  <div className="items-center flex flex-wrap">
				<div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
				  <div className="md:pr-12">
					<h3 className="text-xl font-semibold">
						 Tous les <span className="font-bold text-3xl text-green-500">AVANTAGES</span> pour publier votre idées sur ecoechange.com
					</h3>
					<p className="mt-4 text-lg leading-relaxed text-gray-600">
						Permet de soumettre son idée de solution écologique
					</p>
					<ul className="list-none mt-2">
					  {basics.map(basic => (
						  <li className="py-2">
							<div className="flex items-center">
							  <div>
								<span className="text-md font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-gray-100 mr-3">
								  <i className={basic.icon}></i>
								</span>
							  </div>
							  <div>
								<h4 className="text-lg text-gray-600">
									{basic.name}
								</h4>
							  </div>
							</div>
						  </li>
					  ))}
					</ul>
					{!isAuthentificated || (tokken = null) ? (
					       <button
							  className="bg-green-500 text-white active:bg-gray-700 text-xl font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
							  type="button"
							>
							  <Link href="/auth/login">
								  <a
									href="#pablo"
									className={
									  "py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
									}
								  >
									Partager
								  </a>
							  </Link>
					  </button>
					     ) : (
					       null
						 )
					  }
				  </div>
				</div>

				<div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
				  <img
					alt="..."
					className="max-w-full rounded-lg shadow-xl"
					style={{
					  transform:
						"scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
					}}
					src={require("assets/img/question_payant.jpg")}
				  />
				</div>
			  </div>
			</div>
	    </section>
    </>
  );
}
