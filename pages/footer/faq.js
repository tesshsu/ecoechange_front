import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardHomeSlider from "components/Cards/CardHomeSlider";

export default function faq() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="data-page">
        <section className="sliderQA relative block h-700-px">
          <CardHomeSlider />
        </section>
        <section className="qaBlock relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/logo_carre2.png")}
                        className="shadow-xl rounded-full h-auto p-3 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-210-px bg-white bg-white rounded text-sm shadow outline-none"
                      />
                    </div>
                  </div>
                  <div className="mdxhidden w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
						  className="bg-green-500 text-white active:bg-gray-700 text-xs animate-bounce font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
						  type="button"
						>
						  <Link href="/partager">
						  <a
							href="#"
							className={
							  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent"
							}
						  >
							PARTAGER
						  </a>
						</Link>
					   </button>
                    </div>
                  </div>
                  <div className="iconPartQA w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
						<span className="text-4xl font-bold block uppercase tracking-wide text-green-500">
                          <i className="fas fa-leaf animate-bounce"></i>
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-4xl font-bold block uppercase tracking-wide text-green-500">
                          <i className="fas fa-hands-helping animate-bounce"></i>
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-4xl font-bold block uppercase tracking-wide text-green-500">
                          <i className="fab fa-themeco animate-bounce"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="QAtitle text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                      Questions | Réponses
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-left">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                            <h1 className="text-3xl font-semibold leading-normal mb-2 text-green-500 underline mb-2">Commerçants , artisans et producteurs</h1>
                        </div>
                    </div>
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
					  <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                          A quoi sert ce site pour les professionnels ?
                      </h4>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          Ce site vous permet de continuer de communiquer avec vos clients habituels en cette période de crise sanitaire. Il vous permet également de développer votre réseau de consommateurs.  L'objectif principal est de promouvoir une transition écologique vers un modèle plus sain et durable. Nous sommes convaincus qu'en développant cette culture du partage, au travers de notre plateforme, que les français adopteront des pratiques et habitudes plus locales, et globalement plus pérennes.
                      </p>
					  <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                          Comment utiliser la plateforme Ecoechange ?
                      </h4>
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg">
                                    <img
                                        alt="defalut ideaImg"
                                        src={require("assets/img/qa/login.png")}
                                        className="shadow-lg mx-auto"
                                    />
                                </div>
                            </div>
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg">
                                        <img
                                            alt="defalut ideaImg"
                                            src={require("assets/img/qa/partager.png")}
                                            className="shadow-lg mx-auto"
                                        />
                                </div>
                            </div>
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg">
                                        <img
                                            alt="defalut ideaImg"
                                            src={require("assets/img/qa/final.png")}
                                            className="shadow-lg mx-auto"
                                        />
                                </div>
                            </div>

                        </div>
					  <ul className="list-square ml-4">
					    <li>
                            Aller sur la page <a
                            href="/auth/login"
                            className="text-green-500"
                             >“se connecter”
                            </a>
					    </li>
						<li> Remplir <a
                            href="/partager"
                            target="_blank"
                            className="text-green-500"
                        >le formulaire</a> en 3 étapes simples</li>
						<li> La dernière étape vous permet d’attacher des photos à votre annonce (5 photos maxima)
                        </li>
						<li> Cliquez sur “envoyer”</li>
                          <li>Votre annonce est à présent disponible pour <a
                              href="/annonces"
                              target="_blank"
                              className="text-green-500"
                          >la communauté</a></li>
						<li> Une fois terminé, vous pouvez toujours <a
                            href="/auth/login"
                            target="_blank"
                            className="text-green-500"
                        >vous connecter </a>pour modifier votre annonce. </li>
					  </ul>
					  <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                          Pourquoi utiliser la plateforme Ecoechange ?
					  </h4>
                        <ul className="list-square ml-4">
                            <li>
                                Des annonces détaillées et stimulantes : Ecoechange est conçu sur mesure pour vous donner la possibilité de personnaliser les annonces avec des liens, des photos et même des vidéos YouTube
                            </li>
                            <li> La géolocalisation permet de mettre en lumière les initiatives locales, au plus près de chez-vous avec un affichage simple</li>
                            <li> Système de notification pour promouvoir les annonces (grâce aux likes)
                            </li>
                            <li> Partagez facilement les astuces et bons plans sur les réseaux sociaux!
                            </li>
                            <li> Une newsletter qui met en avant les annonces de la semaine (Notre sélection de la semaine) </li>
                            <li> Possibilité d’afficher une annonce publicitaire 100% gratuitement. Contactez-nous! </li>
                            <li> Et bien plus à venir… </li>
                        </ul>
                    </div>
                  </div>
                </div>
                  <div className="mt-10 py-10 border-t border-gray-300 text-left">
                      <div className="flex flex-wrap justify-center">
                          <div className="w-full lg:w-9/12 px-4">
                              <h1 className="text-3xl font-semibold leading-normal mb-2 text-green-500 underline mb-2">Utilisateurs, particuliers
                              </h1>
                          </div>
                      </div>
                      <div className="flex flex-wrap justify-center">
                          <div className="w-full lg:w-9/12 px-4">
                              <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                  A quoi sert ce site pour les particuliers ?
                              </h4>
                              <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                  Ecoechange est une plateforme 100% gratuite qui vous permet de retrouver les meilleures astuces, adresses, recettes, savoir-faire écologiques proche de vous. Grâce à un système de filtre, la plateforme vous permet de retrouver facilement les offres de professionnels engagés autour de vous grâce notamment à la fonctionnalité de la carte interactive qui retrace toutes les initiatives par géolocalisation.
                              </p>
                              <p>
                                  Cette plateforme vous met directement en relation avec les producteurs et marchands, sans intermédiaire. On vous met juste en relation, à vous de faire le reste!

                              </p>
                              <p>
                                  La plateforme est aussi un biais d’échange entre les particuliers. Si vous êtes un particulier
                              </p>
                              <p>
                                  avec des connaissances ou des savoir-faire qui favorisent une consommation plus respectueuse de l'environnement, vous êtes invités à alimenter la plateforme collaborative en publiant vos annonces.  De plus, si vous avez des adresses ou des astuces que vous souhaitez partager, la communauté sera ravie de les avoirs à disposition sur la plateforme Ecoechange.
                              </p>
                                  <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                      Puis-je commander chez les commerçants sur cette plateforme ?
                                  </h4>
                              <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                  Non. Aucune vente directe n’est opérée par Ecoechange. La plateforme vous permet simplement de retrouver les commerçants, les astuces écologiques, des recettes, des animations et événements dans vos villes et villages.  Toute l’équipe d’Ecoechange travaille actuellement sur une fonctionnalité qui permettra une communication  directe entre les protagonistes du monde de demain. Le but principal de la plateforme est de promouvoir les échanges et de faciliter l’accès à l’information écologique et au développement durable tout en  promouvant la communication directe.
                              </p>
                              <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                  Vous avez d’autres questions ?

                              </h4>
                              <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                  Vous pouvez vous adresser directement à nos équipes en cliquant sur l’onglet <a href="/partager" className="text-green-500">REJOIGNEZ-NOUS</a>
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
