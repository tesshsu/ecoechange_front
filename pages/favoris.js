import React, {useEffect} from "react";
import Link from "next/link";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import AnnonceFavoris from "../components/Favoris/AnnonceFavoris.js";
import Pagination from "../components/Annonce/Pagination.js";
import {connect} from "react-redux";
import {useRouter} from "next/router";
import {fetchFavorites} from '../service/actions/favorites';
const Favoris = ({ dispatch,
                     loading,
                     favorites,
                     current_page,
                     from,
                     to,
                     per_page,
                     last_page,
                     total,
                     hasErrors}) => {
    const router = useRouter();
    useEffect(() => {
        const per_page_req = router.query.perPage ? router.query.perPage : 10;
        dispatch(fetchFavorites(router.query.page, per_page_req))
    }, [dispatch]);

    return (
        <>
            <IndexNavbar fixed/>
            <main className="favoris-page">
                <section className="pt-10 pb-8 mt-4">
                    <div className="container mx-auto px-4 mt-24">
                        <Link href="/annonces">
                            <button
                                className="bg-white text-gray-700 active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                type="button"
                            >
                                <i className="fas fa-chevron-left"></i> retour à la page d'accueil
                            </button>
                        </Link>
                        <div className="flex flex-wrap">
                            <h4 className="ml-4 font-bold text-lg text-gray-700 mt-4">Vos coups de coeur</h4>
                            <AnnonceFavoris transparent/>
                            { total == 0  ? (
                                <div className="container mx-auto text-center">
                                    <h5 className="text-xl font-semibold pb-4">
                                        Vous n'avez pas encore sauvegardées d'annonces
                                    </h5>
                                    <p className="text-md font-semibold pb-4">
                                        vous pouvez encourager des initiatives en cliquant sur le bouton <i className="fas fa-heart"></i>
                                    </p>
                                    <button
                                        className="bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-3 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        <Link href="/annonces">
                                            <a
                                                href="#pablo"
                                                className={
                                                    "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
                                                }
                                            >
                                                <i className="fas fa-arrow-circle-right animate-ping"></i> VOIR LES ANNONCES
                                            </a>
                                        </Link>
                                    </button>
                                </div>
                            ):( '' )}
                        </div>
                        <div className="flex content-center items-center justify-center h-full mb-24 mt-8">
                            {total >= 11 ?(
                                <Pagination transparent
                                            current_page={current_page}
                                            from={from}
                                            to={to}
                                            per_page={per_page}
                                            last_page={last_page}
                                            total={total}
                                />
                            ):(
                                null
                            ) }
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

const mapStateToProps = (state) => ({
    loading: state.favoritesReducer.loading,
    favorites: state.favoritesReducer.favorites,
    current_page: state.favoritesReducer.current_page,
    from: state.favoritesReducer.from,
    to:  state.favoritesReducer.to,
    per_page: state.favoritesReducer.per_page,
    last_page: state.favoritesReducer.last_page,
    total: state.favoritesReducer.total,
    hasErrors: state.favoritesReducer.hasErrors,
})

export default connect(mapStateToProps)(Favoris);
