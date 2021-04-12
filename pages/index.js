import React from "react";
import Link from "next/link";
import {useRouter} from 'next/router'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import YouTube from 'react-youtube';
import CardHomeAnnonceSlider from "components/Cards/CardHomeAnnonceSlider";
import {listsHomePageCategoriesButtons} from "helpers/constant";

export default function Index() {
    const videoOnReady = async(e) => {
        e.target.playVideoAt(10)
    }
    const router = useRouter()

    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };

  return (
    <>
      <IndexNavbar fixed />
      <main className="home-page">
	  <section className="top-block header relative pt-16 items-center flex">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="videoBlock w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 mt-32">
              <h1 className="font-bold text-2xl text-orange-700 text-center">
                  Publiez vos idées écologiques <i className="fab fa-pagelines"></i>
              </h1>
              <YouTube videoId="XWtJIJ5JppI" className="EcoVideo img-responsive" opts={opts} onReady={videoOnReady} />
          </div>
        </div>
		<div className="cote-form-block absolute top-95-px b-auto right-100 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-12/12 max-w-580-px z-40" >
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-500-opcity">
                  <div className="flex-auto p-5 lg:p-10">
                      <h1 className="font-bold text-4xl text-orange-700">
                          Publiez vos idées écologiques,locales en 1 minute!  <i className="fab fa-pagelines"></i>
                      </h1>
                      <p className="mt-4 text-lg leading-relaxed font-bold text-gray-800">
                          Ecoechange est une plateforme solidaire pour échanger vos idées écologiques / locales / naturelles , partagez n’importe où et avec n’importe qui.
                      </p>
                    <h4 className="text-lg font-semibold animate-bounce mt-4">
                        <i className="fas fa-feather animate-bounce"></i> | <i className="far fa-paper-plane animate-bounce"></i> | <i
                        className="fas fa-clipboard-list"></i> C’est si simple !
                    </h4>
					<div className="flex flex-wrap mt-4">
                        <button
                            className="bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            type="button"
                        >
                            <Link href="/vendre">
                                <a
                                    href="#pablo"
                                    className={
                                        "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                    }
                                >
                                    Partager
                                </a>
                            </Link>
                        </button>
                        <button
                            className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            type="button"
                        >
                            <Link href="/annonces">
                                <a
                                    href="#pablo"
                                    className={
                                        "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                    }
                                >
                                    Quoi neuf
                                </a>
                            </Link>
                        </button>
					</div>
                </div>
            </div>
        </div>
        <img
          className="bgImg absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src={require("assets/img/pattern_nextjs.png")}
          alt="..."
        />
      </section>

	  <section className="compare-block border border-t border-gray-400 mt-48 md:mt-40 pb-40 relative bg-white">
        <div className="compare-description-block items-center flex flex-wrap justify-center mb-3 md\:hidden">
			<h1 className="text-2xl text-gray-800 break-words w-70 border border-green-500 rounded mt-4 p-2">
                Lancez votre idée / vendre / service / atelier <span className="font-bold text-3xl text-green-500">écologique / local / natural </span> afin de vendre ou échanger plus facilement sur votre mode de vie écologique ou zéro déchet.
			</h1>
            <p className="mt-4 text-lg break-words w-70 leading-relaxed text-gray-800">
                Cette plateforme est accessible dans toute la France. Elle est ouverte aux professionnels déclarés ou particulier : commerçants , artisans et producteurs, particuliers, présentation de services etc,  la plateforme est entièrement prise en charge de manière solidaire
            </p>
		  </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="class-block w-full md:w-6/12 px-4 z-40">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded bg-green-500">
                  <div className="w-full align-center text-gray-800 prixCompareGratuit">
                      <span className="font-bold px-1 text-4xl text-right underline">Partager</span>
                      <span className="font-bold text-xl text-left">Local / tout en France </span>
                  </div>
				<img
                  alt="..."
                  src={require("assets/img/searchIdea.jpg")}
                  className="w-full align-middle rounded-full"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">
                      Démarrer mes activités écologiques
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                      Vous disposerez de produits, services, ateliers ou boutiques liés à l'écologie et à l'environnement naturel local ?
                      <Link href="/vendre">
                      <button
							  className="bg-white text-gray-700 active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
							  type="button"
							>
                            Partager <i className="fas fa-seedling"></i>
					</button>
                      </Link>
                  </p>
                </blockquote>
              </div>
            </div>

              <div className="class-block w-full md:w-6/12 px-4 z-40">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded bg-green-500">
                      <div className="w-full align-center text-white prixCompareGratuit">
                          <span className="font-bold px-1 text-4xl text-right underline">cherchez</span>
                          <span className="font-bold text-xl text-left">Local / tout en France </span>
                      </div>
                      <img
                          alt="..."
                          src={require("assets/img/foundIdea.jpg")}
                          className="w-full align-middle rounded-full"
                      />
                      <blockquote className="relative p-8 mb-4">
                          <h4 className="text-xl font-bold text-white">
                              Vous recherchez vos besoins?
                          </h4>
                          <p className="text-md font-light mt-2 text-white">
                              Par la recherche et la comparaison des meilleures compétences écologiques / Recette économique / produits durables / service local / atelier Local ou tout en France ?
                              <Link href="/annonces">
                              <button
                                  className="bg-white text-gray-700 active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                  type="button"
                              >
                                  Cherchez <i className="fas fa-mortar-pestle"></i>
                              </button>
                              </Link>
                          </p>
                      </blockquote>
                  </div>
              </div>

          </div>
        </div>
          <div className="mx-auto px-4 pb-8 mt-12">
              <div className="flex flex-wrap">
                  {listsHomePageCategoriesButtons.map(listsHomePageCategoriesButton => (
                      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12">
                          <div className="px-6">
                              <Link href={listsHomePageCategoriesButton.link}>
                              <img alt="partenariat1"
                                   src={listsHomePageCategoriesButton.photo}
                                   className="shadow-lg rounded-lg mx-auto max-w-240-px"
                              />
                              </Link>
                              <div className="pt-4 text-center"><h5 className="text-xl font-bold">{listsHomePageCategoriesButton.name}</h5>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
              <h5 className="text-3xl font-semibold pb-4 text-center">
                  Découvrez les dernières idées
              </h5>
              <CardHomeAnnonceSlider />
              <div className="text-center mt-8">
                  <button
                      className="bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                  >
                      <Link href="/annonces">
                          <a
                              href="#pablo"
                              className={
                                  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                              }
                          >
                              Voir des idées
                          </a>
                      </Link>
                  </button>
              </div>
          </div>
        <div className="comment-marche-block justify-center text-center flex flex-wrap mt-16">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-3xl">Comment faire pour faciliter votre mode de vie écologique ?</h2>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-green-500">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                      Partagez vos découvertes sur les idées, produits, service, atelier ou votre boutique
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-full ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-full"
                        src={require("assets/img/question_classic.jpg")}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                      En cherchant et comparant les meilleures astuces / recettes / produits / service / atelier
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-full ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-full"
                        src={require("assets/img/landing.jpg")}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                      Soumettez vos idées vertes et découvrez / échangez  les idées des autres à côté de vous
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-full ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-full"
                        src={require("assets/img/profile.jpg")}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-block block relative z-1 bg-white-700">
	  <div className="container mx-auto px-4 pb-32">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12 text-center">
                <h3 className="supportBlock text-3xl font-semibold">
                    Soutenez Ecoechange
                </h3>
				<a href="https://fr.tipeee.com/ecoechange" className="tipeee-project-card text-green-500 text-xl">Ecoechange sur Tipeee</a>
                <script async src="https://plugin.tipeee.com/widget.js" charset="utf-8"></script>
				<h3 className="text-xl font-semibold">
                    Ou
                </h3>
				<iframe className="okpalBlock" width="230" height="300" src="https://www.okpal.com/projects/01F1QDY79FC2TX6THNEZ5M3WA6/widget" frameborder="0" scrolling="no"></iframe>
              </div>
            </div>

            <div className="final-sideImg-block w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-2xl mt-4"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png")}
              />
            </div>
          </div>
        </div>
	  </section>
	  </main>
      <Footer />
    </>
  );
}
