import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Policy() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="policy-page">
        <section className="relative block h-350-px bg-green-500">
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
          </div>
        </section>
        <section className="relative py-16 bg-green-500">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                      Mentions légales
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-left">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
					  <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                          Qui sont les responsables du traitement de vos données personnelles ?
					  </h4>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          Le site ecoechange.com est édité par la société Ecoechange (ci-après « ecoechange » ou « nous »), sous le n°SIRET 84937554800013, 4791A - Vente à distance sur catalogue général et APE 6201z Programmation informatique en leur qualité de responsables de traitement. La société ecoechange est située au 13 allée Bellevue, 06460 Saint Vallier de Thiey.
                      </p>
					  <ul>
						<li>L'hébergement du site est effectué par OVH - 2 rue kellermann - BP 80157 - 59053 ROUBAIX Cedex 1.</li>
					  </ul>
					  <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
					   Conditions générales
					  </h4>
					   <p className="mb-4 text-lg leading-relaxed text-gray-800">
                           Les conditions générales d’ecoechange.com et de ses partenaires sont disponibles ci-dessous :
                      </p>
					   <ul>
					    <li>Conditions générales de prestation d’ecoechange.com </li>
						<li>Conditions générales de Strip</li>
					  </ul>
                    </div>
                      <div className="w-full lg:w-9/12 px-4">
                          <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                              Information sur la protection de vos données personnelles
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
                          <Link href="/partager">
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
