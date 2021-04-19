import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function dataPersonal() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="data-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/Ht9Jqbt/bg-vendre2.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/logo.png")}
                        className="shadow-xl rounded-full h-auto p-3 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-210-px bg-white bg-white rounded text-sm shadow outline-none"
                      />
                    </div>
                  </div>
                  <div className="mdxhidden w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
						  className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
						  type="button"
						>
						  <Link href="/vendre">
						  <a
							href="#"
							className={
							  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-green-500"
							}
						  >
							Vendre
						  </a>
						</Link>
					   </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
						<span className="text-xl font-bold block uppercase tracking-wide text-green-500">
                          <i className="far fa-smile text-lg mr-1"></i>
                        </span>
                        <span className="text-sm text-gray-500">faciliter la vie eco</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-green-500">
                          <i className="fas fa-unlock-alt text-lg mr-1"></i>
                        </span>
                        <span className="text-sm text-gray-500">Sécuriser au maximum</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-green-500">
                          <i className="fas fa-certificate text-lg mr-1"></i>
                        </span>
                        <span className="text-sm text-gray-500">Protègez la planète</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Information sur la protection de vos données personnelles
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-left">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
					  <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
					   Qui sont les responsables de traitement de vos données personnelles ?
					  </h4>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Vos données personnelles sont traitées par la société ecoechange (ci-après « ecoechange » ou « nous »), en leur qualité de responsables de traitement.
                        La société ecoechange est située au 13 allee bellevue, 06460 saint vallier de thiey.
                      </p>
					  <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
					   Pour quoi vos données personnelles sont-elles utilisées ?
					  </h4>
					  <ul>
					    <li>Gérer votre compte utilisateur</li>
						<li>Vous envoyer, avec votre accord lorsque la règlementation l’exige, des messages publicitaires personnalisés, notamment des actualités sur notre société</li>
						<li>Données à ideaactère personnel</li>
						<li>Mener des activités de recherche et développement</li>
						<li>Ce traitement est fondé sur nos obligations légales et implique notamment la vérification de votre identité.</li>
					    <li>Ce traitement est justifié par la relation pré contractuelle résultant de votre demande.</li>
					  </ul>
					  <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
					   Combien de temps sont conservées vos données ?
					  </h4>
					   <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Conformément à la réglementation, nous nous engageons à ne conserver vos données personnelles que pour la durée nécessaire à l’accomplissement des finalités.
                      </p>
					   <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
					   Qui a accès à vos données ?
					  </h4>
					   <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Nous pouvons être amenés à partager vos données personnelles avec nos sous-traitants, tels que stripe, autovisual, afin de traiter tout ou partie de vos données personnelles, dans la limite nécessaire à l’accomplissement des tâches qui leur sont confiées (par exemple, pour l’hébergement de notre site internet ou application mobile, pour la fourniture de services liés à l’exploitation ou la maintenance du site internet, fourniture de services concernant l’inspection du véhicule, l’envoi de messages).
                       </p>
					  <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
					   Vos droits
					  </h4>
					  <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Vous bénéficiez de plusieurs droits concernant le traitement de vos données personnelles :
                       </p>
					   <ul>
					    <li>Un droit d'accès à vos données personnelles, c’est-à-dire le droit d’en recevoir une copie</li>
						<li>Un droit de rectification, si vos données s’avéraient erronées ou périmées, ce qui nous permettra de nous conformer à notre obligation d’avoir des données à jour vous concernant,</li>
						<li>Un droit à l’effacement (ou droit à l’oubli) de vos données personnelles, lequel peut être limité au regard de nos obligations contractuelles ou légales,</li>
						<li>Un droit d’opposition, sous réserve de justifier de raisons tenant à votre situation particulière, et du droit de demander la limitation du traitement de vos données personnelles, dans certains cas prévus par la règlementation,</li>
						<li>Un droit de retirer votre consentement à tout moment, pour les finalités pour lesquelles nous avons collecté votre consentement.</li>

					  </ul>
					  <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
					   Modification des informations sur la protection de vos données personnelles
					  </h4>
					  <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Nous pouvons être amenés à modifier occasionnellement la présente information. Lorsque cela est nécessaire ou requis, nous vous en informerons et / ou solliciterons votre accord. Nous vous invitons donc à la consulter lors de chaque visite afin de prendre connaissance de sa dernière version.
                       </p>
					  <Link href="/vendre">
                      <a
                        href="#"
                        className="font-normal text-blue-500"
                      >
                        Partager
                      </a>
					  </Link>
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
