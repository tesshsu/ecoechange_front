import React from "react";
import Link from "next/link";
// components

export default function PubContentConnection() {
  return (
    <>
      <section className="block relative z-1 bg-green-500">
		    <div className="container mx-auto px-4 border border-solid border-green-500 rounded">
			  <div className="items-center flex flex-wrap mt-4">
				  <h1 className="text-2xl font-bold leading-relaxed text-white">
					  Veuillez vous connecter avant de partager vos idées
				  </h1>
				  <p className="text-md leading-relaxed text-gray-700">
					  Publiez vos réflexions pour partager, communiquer, rencontrer <i
					  className="fas fa-mortar-pestle"></i>
				  </p>
				  <p className="text-md mt-2 leading-relaxed text-gray-700">
					  Trouvez des produits 100% locaux, Vendez également vos produits locaux <i
					  className="fas fa-seedling"></i>
				  </p>
			  </div>
			</div>
	    </section>
		<div class="flex justify-center">
			<button
					className="button-payer-top-list bg-green-500 text-white active:bg-grey-500 text-sm font-bold border border-solid border-white uppercase px-2 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="button"
					>
					<Link href="/auth/login">
									<a
										href="#pablo"
										className="text-xl py-1 px-2 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
									>
										<i className="fas fa-user mr-1 animate-bounce"></i> CONNECTEZ-VOUS
									</a>
					</Link>
			</button>
		</div>
    </>
  );
}
