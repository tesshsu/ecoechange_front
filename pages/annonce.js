import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import AnnonceDetail from "components/Annonce/AnnonceDetail.js";
import {connect} from "react-redux";
import Link from "next/link";

const Annonce = ({dispatch,
                loading,
                ideas,
                current_page,
                from,
                to,
                per_page,
                last_page,
                total,
                hasErrors,
                 id}) => {
   return (
    <>
      <IndexNavbar fixed />
      <main>
		<section className="pt-10 pb-8 mt-24 mb-24">
          <div className="container mx-auto px-4">
              <Link href="/annonces">
                  <button
                      className="bg-white text-gray-700 active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                  >
                       <i className="fas fa-chevron-left"></i> retour la liste d'idées
                  </button>
              </Link>
            <div className="flex flex-wrap">
                <AnnonceDetail transparent />
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
    hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(Annonce)
