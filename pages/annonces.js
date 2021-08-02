import React, {useEffect} from "react";
import IndexNavbar from '../components/Navbars/IndexNavbar.js';
import Footer from '../components/Footers/Footer.js';
import Pagination from '../components/Annonce/Pagination.js';
import Link from "next/link";
import {connect} from "react-redux";
import AnnonceSearchForm from "../components/Annonce/AnnonceSearchForm";
import {fetchIdeas, filterIdeas} from '../service/actions/ideas';
import {useRouter }  from "next/router";

const Annonces = ({ dispatch,
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
    const owner = null;
    useEffect(() => {
        const title = router.query.title ? router.query.title : '';
        const postal_code= router.query.postal_code ? router.query.postal_code : '';
        const category= router.query.category ? router.query.category : '';
        const owner_type= router.query.owner_type ? router.query.owner_type : '';
        const usage= router.query.usage ? router.query.usage : '';
        const experience_eco= router.query.experience_eco ? router.query.experience_eco : '';
        const note= router.query.note ? router.query.enote : '';

        dispatch(filterIdeas(router.query.page, router.query.perPage, title, postal_code, category, owner_type, usage, experience_eco, note));
    }, [dispatch])
    return (
        <>
            <IndexNavbar fixed />
            <main className="pageAnnonces">
                <section className="pt-10 pb-8 mt-32">
                    <div className="container mx-auto px-4">
                        <Link href="/">
                            <button
                                className="bg-white  text-gray-700 active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                type="button"
                            >
                                <i className="fas fa-chevron-left"></i> retour à la page d'accueil
                            </button>
                        </Link>
                        <AnnonceSearchForm transparent />
                        <div className="flex content-center items-center justify-center h-full mb-24 mt-8">
                            {total >= 18 ?(
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

export default connect(mapStateToProps)(Annonces)
