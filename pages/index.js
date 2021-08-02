import React,  {useEffect} from "react";
import Link from "next/link";
import {connect} from "react-redux";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardHomeCategorySlider from "../components/Cards/CardHomeCategorySlider";
import {filterIdeas} from '../service/actions/ideas';
import {useRouter }  from "next/router";
import CardHomeSlider from "../components/Cards/CardHomeSlider";
import dynamic from "next/dynamic"

const Index = ({ dispatch,
                   loading,
                   ideas,
                   current_page,
                   from,
                   to,
                   per_page,
                   last_page,
                   total,
                   hasErrors}) => {
    const router = useRouter();

    const Map = dynamic(
        () => import("../components/Cards/CardAnnoncesMap"), // replace '@components/map' with your component's location
        {
            loading: () => <p>Téléchargements en cours...</p>,
            ssr: false, // This line is important. It's what prevents server-side render
        }
    )

    useEffect(() => {
        window.OneSignal = window.OneSignal || [];
        OneSignal.push(function () {
            OneSignal.init({
                appId: "39c6581e-4ef7-48a8-b815-aee8c95c68e2",
                notifyButton: {
                    enable: true,
                },

                allowLocalhostAsSecureOrigin: true,
            });
        });

        return () => {
            window.OneSignal = undefined;
        };
    }, []);

    useEffect(() => {
        const title = router.query.title ? router.query.title : '';
        const postal_code= router.query.postal_code ? router.query.postal_code : '';
        const category= router.query.category ? router.query.category : '';
        const owner_type= router.query.owner_type ? router.query.owner_type : '';
        const usage= router.query.usage ? router.query.usage : '';
        const experience_eco= router.query.experience_eco ? router.query.experience_eco : '';
        const note = router.query.note ? router.query.note : '';

        dispatch(filterIdeas(router.query.page, router.query.perPage, title, postal_code, category, owner_type, usage, experience_eco, note));
    }, [dispatch])
  return (
    <>
      <IndexNavbar fixed />
      <main className="home-page">
          <CardHomeSlider />
	  <section className="header relative pt-4 text-center items-center">
		<div className="cote-form-block b-auto pt-4 -mt-32 sm:mt-0 w-12/12  z-40" >
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-green-500-opcity">
                  <div className="flex-auto p-5 lg:p-10">
                      <h1 className="font-bold text-4xl text-orange-700">
                          Publiez vos idées écologiques,locales en 1 minute!  <i className="fab fa-pagelines"></i>
                      </h1>
                      <p className="mt-4 text-lg leading-relaxed font-bold text-gray-800">
                          Ecoechange est une plateforme solidaire pour échanger  et partager gratuitement vos idées écologiques / locales / naturelles.
                      </p>

                    <h4 className="text-2xl text-green-500 font-semibold animate-bounce mt-4">
                        <i className="fas fa-feather animate-bounce"></i> | <i className="far fa-paper-plane animate-bounce"></i> | <i
                        className="fas fa-clipboard-list"></i> 100% gratuite ! C’est si simple !
                    </h4>
                </div>
            </div>
        </div>
      </section>

	  <section className="compare-block mt-4 relative bg-white">
          <h4 className="titleMap text-4xl text-center text-gray-700">Explorez les idées proches de vous <i
              className="fas fa-map-signs animate-bounce"></i></h4>
          <Map />
          <p className="text-md text-center text-gray-600">Cliquer sur les feuilles pour voir les détails <i
              className="fas fa-leaf animate-bounce"></i> </p>
          <CardHomeCategorySlider />
          <div className="mx-auto px-4 pb-8 mt-4">
              <div className="text-center mt-2">
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
          <h1 className="text-gray-700 font-semibold text-2xl text-center mt-4">Les points forts de la plateforme</h1>
          <div className="flex flex-wrap blogFunctions">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                          <div className="px-4 py-5 flex-auto">
                              <img
                                  alt="..."
                                  src={require("assets/img/pub/leave.png")}
                                  className="w-full align-center"
                              />
                              <div
                                  className="text-white p-3 text-center inline-flex items-center justify-center h-12 mb-5 shadow-lg rounded-full bg-green-500 mt-2 animate-bounce">
                                  <i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i></div>
                              <h6 className="text-xl font-semibold">Nous développons un système de notation qui permettra d'évaluer l'intérêt  écologique </h6><p
                              className="mt-2 mb-4 text-blueGray-500">Ecoechange vous offre plus de visibilité et la possibilité d'apporter une valeur ajoutée à votre annonce/idée par le référencement naturel </p>
                              <Link href="/noteEco">
                                  <button
                                      className="text-white p-3 shadow-lg rounded-full bg-green-500 mr-2"
                                      type="button"
                                  >
                                      Voir l'explication <i className="fas fa-feather-alt animate-bounce"></i>
                                  </button>
                              </Link>
                              <a className="text-white p-3 shadow-lg rounded-full bg-green-500" href={`https://ecoechange.com/annonce?id=201`} rel="noreferrer" target="_blank">Voir exemple</a>
                          </div>
                      </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                          <img
                              alt="..."
                              src={require("assets/img/pub/carte.png")}
                              className="w-full align-center"
                          />
                          <div
                              className="text-white p-3 text-center inline-flex items-center justify-center h-12 mb-5 shadow-lg rounded-full bg-green-500 mt-2 animate-bounce">
                              <i className="fas fa-tag"></i><i className="fas fa-map-marker-alt"></i></div>
                          <h6 className="text-xl font-semibold">Une carte interactive</h6><p
                          className="mt-2 mb-4 text-blueGray-500">Qui vous permet de voir rapidement les producteurs, artisans et commerçants de vos régions. Cela vous permet aussi de facilement visualiser la localisation des annonces!</p>
                          <a className="text-white p-3 shadow-lg rounded-full bg-green-500" href={`https://ecoechange.com/annonce?id=203`} rel="noreferrer" target="_blank">Voir exemple</a>
                      </div>
                  </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                          <img
                              alt="..."
                              src={require("assets/img/pub/youtube.png")}
                              className="w-full align-center"
                          />
                          <div
                              className="text-white p-3 text-center inline-flex items-center justify-center h-12 mb-5 shadow-lg rounded-full bg-green-500 mt-2 animate-bounce">
                              <i className="fab fa-youtube"></i><i className="fab fa-facebook"></i><i
                              className="fab fa-instagram-square"></i></div>
                          <h6 className="text-xl font-semibold"> Interactivité avec fonctionnalité youtube</h6><p
                          className="mt-2 mb-4 text-blueGray-500">Possibilité de visionner une vidéo youtube directement sur l'annonce</p>
                          <a className="text-white p-3 shadow-lg rounded-full bg-green-500" href={`https://ecoechange.com/annonce?id=142`} rel="noreferrer" target="_blank">Voir exemple</a>
                      </div>
                  </div>
              </div>
          </div>

        <div className="blockBigIntro container mx-auto mt-12">
          <div className="flex flex-wrap items-center">
            <div className="class-block w-full md:w-6/12 px-4 z-40">
              <div className="blockConcept  relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded bg-green-500">
                  <div className="w-full align-center text-gray-800 prixCompareGratuit">
                      <span className="font-bold px-1 text-4xl text-right underline">Partager</span>
                      <span className="font-bold text-xl text-left">Local /  dans toute la France</span>
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
                      <Link href="/partager">
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
                          <span className="font-bold px-1 text-4xl text-right underline">Cherchez </span>
                          <span className="font-bold text-xl text-left">Local / dans toute la France </span>
                      </div>
                      <img
                          alt="..."
                          src={require("assets/img/foundIdea.jpg")}
                          className="w-full align-middle rounded-full"
                      />
                      <blockquote className="relative p-8 mb-4">
                          <h4 className="text-xl font-bold text-white">
                              Vous avez des besoins?
                          </h4>
                          <p className="text-md font-light mt-2 text-white">
                              Par la recherche et la comparaison des meilleures compétences écologiques / recettes économiques / produits durables / service local / atelier local ou tout en France ?
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
      </section>

      <section className="final-block block relative z-1 bg-white-700">
	  <div className="container mx-auto px-4 pb-32">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12 text-center">
                <h3 className="supportBlock text-3xl font-semibold">
                    Soutenez Ecoechange
                </h3>
                  <p className="text-lg text-left">Ecoechange est 100% gratuit pour les équipes bénévoles et les étudiants stagiaires, c'est pourquoi nous avons besoin de votre soutien pour  <Link href="/noteEco"><span className="font-bold">LA COMMUNAUTÉ VALIDE</span></Link> : Une solution utile en temps de crise mais aussi pour l’après-crise!
                </p>
                  <p className="text-lg text-left">Venez voter pour aider les artisans à confirmer leur note écologique! 🌱</p>
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

const mapStateToProps = (state) => ({
    loading: state.ideasReducer.loading,
    ideas: state.ideasReducer.ideas,
    current_page: state.ideasReducer.current_page,
    from: state.ideasReducer.from,
    to:  state.ideasReducer.to,
    per_page: state.ideasReducer.per_page,
    last_page: state.ideasReducer.last_page,
    total: state.ideasReducer.total,
    hasErrors: state.ideasReducer.hasErrors
})

export default connect(mapStateToProps)(Index)
