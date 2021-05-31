import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import YouTube from 'react-youtube';
import CardAboutEquipeSlider from 'components/Cards/CardAboutEquipeSlider'

export default function About() {
    const videoOnReady = async(e) => {
        e.target.playVideoAt(10)
    }

    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };
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
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-48">
              <div className="px-6">
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                      Ecoechange, c'est quoi ?
                  </h3>
                    <p className="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                        Une plateforme solidaire de partage d’astuces éco-responsables
                    </p>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-left">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                        <div className="compare-description-block items-center flex flex-wrap justify-center mb-3 md\:hidden">
                            <h1 className="text-2xl text-gray-800 break-words w-70 border border-green-500 rounded p-2">
                                Lancez votre idée / vendez / proposez un service / atelier <span className="font-bold text-3xl text-green-500">écologique / une initiative locale / naturelle </span> afin de partager et échanger plus facilement sur votre mode de vie écologique ou zéro déchet.
                            </h1>
                            <p className="mt-4 text-lg break-words w-70 leading-relaxed text-gray-800">
                                Cette plateforme est accessible dans toute la France. Elle est ouverte aux professionnels déclarés, ou aux particuliers : commerçants , artisans et producteurs, particuliers, prestation de services etc, la plateforme est entièrement prise en charge de manière solidaire.
                            </p>
                        </div>
                        <div className="p-2 mb-5">
                            <h1 className="text-2xl text-green-500 text-bold text-center">
                                Notre équipe
                            </h1>
                            <CardAboutEquipeSlider />
                        </div>
                        <div className="EcoVideo text-center">
                           <YouTube videoId="zd-uDhvymtY" className="img-responsive" opts={opts} onReady={videoOnReady} />
                        </div>
                        <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4" >
                            Êtes-vous à la recherche de nouvelles initiatives, produits ou services locaux?
                            Vous avez un intérêt grandissant auprès des producteurs locaux,
                            des fermes et d’une consommation globalement plus pérenne? Vous êtes en quête de recettes,
                            d’idées cadeaux, d’astuces écologiques et tout ça, dans l’optique d’un développement plus durable?
                        </p>
                        <p className="mb-4 text-lg leading-relaxed text-gray-800" >
                            Il est cependant difficile pour vous de trouver des informations fiables et
                            intéressantes sur internet ou en physique, dans les marchés par exemple?
                        </p>
                        <p className="mb-4 text-lg font-bold leading-relaxed text-green-500" >
                            Commerçants, artisans et producteurs locaux, on a aussi pensé à vous. S’il est difficile pour vous de trouver des acheteurs,
                            ou de partager vos idées et valeurs écologiques,
                            et que vous souhaitez rencontrer et échanger avec des nouveaux acteurs du commerce équitable.
                        </p>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          Ecoechange est une plateforme solidaire dédiée à cela. 100% gratuite,
                          elle vous permet de publier, promouvoir et échanger sur vos idées écologiques, locales ou vos modes de vie durables en 1 minute!
                      </p>
					   <p className="mb-4 text-lg leading-relaxed text-gray-800">
                           Ecoechange est une start-up qui simplifie votre vie. Bénéfique d’un point de vue économique et écologique,
                           l’objectif principal est la protection de la Terre. Pour cela, nous souhaitons faciliter la communication, le partage,
                           la vente et les rencontres locales. Nous vous accompagnons pour partager vos idées éco-responsables avec un maximum de simplicité.
                       </p>
					   <p className="mb-4 text-lg leading-relaxed text-gray-800">
                           Cet outil permet aux professionnels ainsi qu’aux particuliers d’analyser, de développer et de mettre en pratique des compétences
                           et idées écologiques et soutenables. Nous tâchons de faciliter la prise de décision de nos utilisateurs.
                       </p>
                        <p className="mb-4 text-md leading-relaxed text-gray-600">
                            Notre plateforme est accessible dans toute la France. Elle est ouverte aux professionnels déclarés ou particulier : producteurs,
                            artisans et commerçants, presentation de service etc. Ce projet est solidaire et basé à 100% sur du volontariat.La gratuité du service est possible grâce à la prise en charge de manière solidaire des frais techniques par la société <a
                            href="https://vacha-design.com/"
                            className="font-normal text-blue-500"
                        >Vacha-design </a>.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                            Vous avez des questions? Contactez-nous. Nous nous tenons disponible pour vous aider.
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
