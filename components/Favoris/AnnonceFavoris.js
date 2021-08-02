import React, {useEffect} from "react";
import Link from "next/link";
import {connect} from "react-redux";
import Moment from 'react-moment';
import useFavorites from "../../service/hooks/useFavorites";
import {renderSwitchValue} from '../../helpers/constant'
const AnnonceFavoris = ({
                          loading,
                          favorites,
                          hasErrors
                        }) => {

  if (loading) {
    return <p>Chargement des favorites ...</p>;
  }
  const {
    deleteFavorite
  } = useFavorites();

  const handleDelete = async (id) => {
    try {
      if (confirm('Voulez vous vraiment supprimer cette favorite?')) {
        await deleteFavorite(id, {});
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
      <>
        {favorites?.map(favorite => (
            <div className="container px-4 mx-auto" id={favorite?.entity?.id} >
              <div className="favoris-block flex-wrap">
                <div className="w-full px-4 mt-4 flex-1">
                  {favorite?.entity?.uploads?.length > 0 ? (
                      <img
                          alt={favorite?.entity?.uploads[0].name}
                          src={process.env.NEXT_PUBLIC_API_URL + favorite?.entity?.uploads[0].url}
                          className="shadow-lg mx-auto rounded-lg"
                      />
                  ) : (
                      <img
                          alt="defalut carImg"
                          src={require("assets/img/idea/default.jpg")}
                          className="carImageSingle shadow-lg mx-auto rounded-lg"
                      />
                  )}
                </div>
                <div className="w-full px-4 flex-1">
			  <span className="text-sm block my-2 p-3 text-gray-800 rounded border border-solid border-gray-200">
			        <div className="top justify-between">
					  <div className="titlePart font-bold text-2xl text-orange-700 text-center py-2">
					     {favorite?.entity?.category} | <i className="fas fa-heart ml-2"></i> {favorite?.entity?.favorite_count}
					  </div>
					</div>
					<div className="container mx-auto">
                        <div className="price text-gray-600  text-lg bg-gray-400">
					       {favorite?.entity?.sub_category} | {favorite?.entity?.title}
					    </div>
					  <div className="flex flex-wrap">
							<div className="w-1/3">
							  <span
                                  className="text-sm block my-4 p-3 text-gray-800"><i
                                  className="fas fa-bullhorn"></i> {renderSwitchValue(favorite?.entity?.usage)}</span>
							</div>
                        {favorite?.entity?.product_price && (
                            <div className="w-1/3">
							  <span
                                  className="text-sm block my-4 p-3 text-gray-800"><i className="fas fa-hand-holding-usd"></i> € {favorite?.entity?.product_price}</span>
                            </div>
                        )}
                        <div className="w-1/3">
							  <span
                                  className="text-sm block my-4 p-3 text-gray-800">
                                  <i className="fas fa-seedling"></i> {renderSwitchValue(favorite?.entity?.experience_eco)}</span>
							</div>
							<div className="w-1/3">
							  <span
                                  className="text-sm block my-4 p-3 text-gray-800"><Moment
                                  format="DD/MM/YYYY">{favorite?.entity?.created_at}</Moment></span>
							</div>
                          <div className="w-1/3">
                                  <span className="text-sm block my-4 p-3 text-gray-800"><i className="fas fa-map-marker-alt"></i> {favorite?.entity?.postal_code} </span>
                              </div>
						  </div>
					</div>
					<div className="button-block justify-left">
						<button
                            className="voirButton bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 mr-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"
                        >
						      <Link href={favorite?.entity?.id ? (`/annonce?id=${favorite?.entity?.id}`) : ("#")} {...favorite}>
                                          <a
                                              href={favorite?.entity?.id ? (`/annonce?id=${favorite?.entity?.id}`) : ("#")}
                                              className={
                                                "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                              }
                                          >
                                            Voir
                                          </a>
						      </Link>
						</button>
						 <button
                             className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                             type="button"
                         >
                                          <a
                                              href="#"
                                              onClick={(e) => handleDelete(favorite?.id)}
                                              className={
                                                "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                              }
                                          >
                                            <i className="far fa-trash-alt"></i>
                                          </a>
                                    </button>
                    </div>
			  </span>
                </div>
              </div>
            </div>
        ))}
      </>
  );
}


const mapStateToProps = (state) => ({
  loading: state.favoritesReducer.loading,
  favorites: state.favoritesReducer.favorites
})

export default connect(mapStateToProps)(AnnonceFavoris);
