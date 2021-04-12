import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function About() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="about-page">
        <section className="relative block h-350-px bg-green-500">
          <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
              style={{ transform: "translateZ(0)" }}
          >
          </div>
        </section>
        <section className="relative py-16 bg-green-500">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-32">
              <div className="px-6">
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                      Ecoechange, c'est quoi ?
                  </h3>
                    <p className="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                        Une platform solidarite
                    </p>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-left">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800" >
                            Êtes-vous toujours à la recherche et souhaitez l'achat des produits de fermes ou de services locaux directement auprès des producteurs ?
                            Ou recette, astuce écologique ou économique ?
                            Mais passez-vous du temps à parcourir par tout ? Soit internet ou marche alentour de vous ?
                        </p>
                        <p className="mb-4 text-lg leading-relaxed text-gray-800" >
                            Et vous êtes les commerçants, artisans et producteurs locaux ou service particulier ?
                            Ou souhaitez-vous partager vos idées de recettes, vos astuces pour échanger, communiquer ou vous rencontrer ?
                            Cependant, est-il difficile pour vous de trouver des acheteurs locaux ou de partager vos idées écologiques?
                        </p>
                        <p className="mb-4 text-lg font-bold leading-relaxed text-green-500" >
                            Par conséquent, Ecoechange est une plateforme dédiée à cela
                            100% gratuites et Publiez vos idées écologiques,locales en 1 minute!
                        </p>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          Ecoechange est une start-up qui simplifier votre vie écologique et zéro déchet. D'un point de vue écologique ou économique, bon pour la planète et pour sauver notre planète.
                          Pour faciliter la communication, le partage, la vente et la rencontre avec votre région locale.
                          Nous vous accompagnons dans le partage de vos idées écologiques. Nous vous garantissons un maximum de simplicité.
                      </p>
					   <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          En quelques étapes, simples et rapides, votre vie quotidienne vous apporte satisfaction. Les idées est transparent et l'utilisatuers sont rassurés. Avec Ecoechange, tout est simplifié ! Vous avez des questions ? Contactez-nous, nous sommes là pour vous aider.
                      </p>
					   <p className="mb-4 text-lg leading-relaxed text-gray-800">
                           Cet outil permet aux professionnels et aux particuliers de visualiser et d'analyser toutes les données des idées. Grâce à une gestion technico-économique plus fine, nous leur permettons de prendre la bonne décision.
                      </p>
                        <p className="mb-4 text-md leading-relaxed text-gray-600">
                            Notre plateforme est accessible dans toute la France. Elle est ouverte aux professionnels déclarés ou particulier : producteurs,
                            artisans (hors BTP) et commerçants, presentation de service etc. Ce projet est un projet solidaire.Cette initiative est 100% bénévole,
                            Ici, c'est vraiment gratuit car la plateforme est entièrement prise en charge de manière solidaire, Les frais techniques sont offerts par la sociét <a
                            href="https://vacha-design.com/"
                            className="font-normal text-blue-500"
                        >Vacha-design </a>, dont les frais d'hébergement
                        </p>
					  <Link href="/vendre">
                      <a
                        href="#"
                        className="font-normal text-blue-500"
                      >
                          Partagez votre idée
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
