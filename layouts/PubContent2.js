import React from "react";
import Link from "next/link";
// components

export default function PubContent2() {
  return (
    <>
      <section className="block relative z-1 bg-green-500">
		    <div className="container mx-auto px-4 pb-32">
			  <div className="items-center flex flex-wrap">
				<div className="w-full md:w-6/12 ml-auto px-12 md:px-4 mt-4">
				  <div className="md:pr-12">
					<h3 className="text-3xl font-semibold">
					  Vous êtes écologiste ? En cherchant et comparant les meilleures astuces ?
					</h3>
					<p className="mt-4 text-md leading-relaxed text-white">
						Partagez votre idée à un particulier en toute transparence
					</p>
					<ul className="list-none mt-6">
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
								Partagez-vous la vie en mode « éco »
							</h4>
						  </div>
						</div>
					  </li>
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
								Vous souhaitez réduire l'impact écologique
							</h4>
						  </div>
						</div>
					  </li>
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
								Découvrir celle des autres et d'échanger pour les améliorer.
							</h4>
						  </div>
						</div>
					  </li>
					</ul>
					 <button
									className="button-payer-top-list bg-gray-800 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
								  >
									<Link href="/prix">
										  <a
											href="#pablo"
											className={
											  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
											}
										  >
											Partager
										  </a>
									  </Link>
						   </button>
				  </div>
				</div>

				<div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0 mt-4">
				 <div className="md:pr-12">
					<h3 className="text-3xl font-semibold">
						Vous vendez des produits écologiques  ou des produits locaux?
					</h3>
					<p className="mt-4 text-md leading-relaxed text-white">
						Partagez vos produits avec un particulier, une boutique ou un atelier.
					</p>
					<ul className="list-none mt-6">
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
								Le meilleur échange assuré
							</h4>
						  </div>
						</div>
					  </li>
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
								Possibilité de vendre ou publier votre produits locaux facilement
							</h4>
						  </div>
						</div>
					  </li>
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
								Communiquez avec d'autres écologistes
							</h4>
						  </div>
						</div>
					  </li>
					</ul>
					 <button
									className="button-payer-top-list bg-gray-800 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
								  >
									<Link href="/annonces">
										  <a
											href="#pablo"
											className={
											  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
											}
										  >
											  Lancer
										  </a>
									  </Link>
						   </button>
				  </div>
				</div>
			  </div>
			</div>
	    </section>
    </>
  );
}
