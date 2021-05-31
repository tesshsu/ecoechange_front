import React,  {useEffect} from "react";
import Link from "next/link";
import {connect} from "react-redux";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardHomeCategorySlider from "../components/Cards/CardHomeCategorySlider";
import {filterIdeas} from '../service/actions/ideas';
import {useRouter }  from "next/router";

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
    useEffect(() => {
        const postal_code= router.query.postal_code ? router.query.postal_code : '';
        const category= router.query.category ? router.query.category : '';
        const sub_category= router.query.sub_category ? router.query.sub_category : '';
        const owner_type= router.query.owner_type ? router.query.owner_type : '';
        const usage= router.query.usage ? router.query.usage : '';
        const experience_eco= router.query.experience_eco ? router.query.experience_eco : '';

        dispatch(filterIdeas(router.query.page, router.query.perPage,
            postal_code,
            category, owner_type, sub_category,
            usage, experience_eco));
    }, [dispatch])
  return (
    <>
      <IndexNavbar fixed />
      <main className="home-page">
	  <section className="top-block header relative pt-16 items-center flex">
		<div className="cote-form-block b-auto right-100 pt-16 -mt-48 sm:mt-0 w-12/12  z-40" >
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-green-500-opcity">
                  <div className="flex-auto p-5 lg:p-10">
                      <h1 className="font-bold text-4xl text-orange-700">
                          Publiez vos idées écologiques,locales en 1 minute!  <i className="fab fa-pagelines"></i>
                      </h1>
                      <p className="mt-4 text-lg leading-relaxed font-bold text-gray-800">
                          Ecoechange est une plateforme solidaire pour échanger  et partager gratuitement vos idées écologiques / locales / naturelles.
                      </p>

                    <h4 className="text-lg font-semibold animate-bounce mt-4">
                        <i className="fas fa-feather animate-bounce"></i> | <i className="far fa-paper-plane animate-bounce"></i> | <i
                        className="fas fa-clipboard-list"></i> C’est si simple !
                    </h4>
					<div className="bigBlocktop flex flex-wrap mt-4">
                        <button
                            className="bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-12 py-16 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            type="button"
                        >
                            <Link href="/vendre">
                                <a
                                    href="#pablo"
                                    className={
                                        "text-3xl py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                    }
                                >
                                    Partager
                                </a>
                            </Link>
                        </button>
                        <button
                            className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-12 py-16 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            type="button"
                        >
                            <Link href="/annonces">
                                <a
                                    href="#pablo"
                                    className={
                                        "text-3xl py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                    }
                                >
                                    Découvrir
                                </a>
                            </Link>
                        </button>
					</div>
                </div>
            </div>
        </div>
        <img
          className="homeTopbg bgImg absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src={require("assets/img/pattern_nextjs.png")}
          alt="..."
        />
      </section>

	  <section className="compare-block mt-48 md:mt-40 relative bg-white">
          <CardHomeCategorySlider />
          <div className="mx-auto px-4 pb-8 mt-12">
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
                  <Link href="/noteEco">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                          <div className="px-4 py-5 flex-auto">
                              <div
                                  className="text-white p-3 text-center inline-flex items-center justify-center h-12 mb-5 shadow-lg rounded-full bg-green-500">
                                  <i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i></div>
                              <h6 className="text-xl font-semibold">Gagner des leaves : </h6><p
                              className="mt-2 mb-4 text-blueGray-500">Pour chaque idée mise en favori </p><p
                              className="mb-4 text-blueGray-500">Leur activité est référencée sur le site </p></div>
                      </div>
                  </Link>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                          <div
                              className="text-white p-3 text-center inline-flex items-center justify-center h-12 mb-5 shadow-lg rounded-full bg-green-500">
                              <i className="fas fa-tag"></i><i className="fas fa-map-marker-alt"></i></div>
                          <h6 className="text-xl font-semibold">Filtre</h6><p
                          className="mt-2 mb-4 text-blueGray-500">Pour faciliter vos recherches</p></div>
                  </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                          <div
                              className="text-white p-3 text-center inline-flex items-center justify-center h-12 mb-5 shadow-lg rounded-full bg-green-500">
                              <i className="fab fa-youtube"></i><i className="fab fa-facebook"></i><i
                              className="fab fa-instagram-square"></i></div>
                          <h6 className="text-xl font-semibold"> Interactivité avec fonctionnalité youtube</h6><p
                          className="mt-2 mb-4 text-blueGray-500">Possibilité de visionner une vidéo youtube directement sur l'annonce</p></div>
                  </div>
              </div>
          </div>

        <div className="container mx-auto mt-12">
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
