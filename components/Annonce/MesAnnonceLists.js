import React, { useEffect } from "react"
import {connect} from "react-redux";
import Link from "next/link";
import {fetchIdeas} from 'service/actions/ideas';
import Router, {useRouter} from "next/router";
import Moment from 'react-moment';
import useLoggedUser from "../../service/hooks/useLoggedUser";
import useAnnonces from "../../service/hooks/useAnnonces";
import {renderSwitchNoteEco, renderSwitchValue} from '../../helpers/constant'
const MesAnnoncesLists = ({ dispatch,
							 loading,
							 ideas,
							 hasErrors}) => {

    const router = useRouter();

    const {isAuthentificated, loggedUser} = useLoggedUser();
    const {
        editIdea,
        deleteIdea
    } = useAnnonces();

    const owner = loggedUser?.loggedUser?.id;

    useEffect(() => {
        if(isAuthentificated && loggedUser && owner ){
            const per_page_req = router.query.perPage ? router.query.perPage : 10;
            dispatch(fetchIdeas(router.query.page, per_page_req, owner))
        }
    }, [dispatch])

    if (loading) {
        return <p>Chargement des idées ...</p>;
    }

    const handleEdit = async (id) => {
        try {
            await editIdea(id, {});
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleDelete = async (id) => {
        let selectedIdeas = ideas?.filter(item => item.id === id);
        let MyselectedIdea = selectedIdeas.length > 0 ? selectedIdeas[0]: undefined;
        try {
            if (confirm('Voulez-vous vraiment supprimer cette idée?')) {
                await deleteIdea(id, MyselectedIdea);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <>
		{ideas?.map((idea, idx) => (
            <div key={`idea_${idea.id}`} id={idea.id} className="container px-4 mx-auto my-4">
                    <div className="favoris-block flex-wrap">
						{idea.uploads.length > 0 ? (
							<img
								alt={idea?.uploads[0].name}
                                src={process.env.NEXT_PUBLIC_API_URL + idea?.uploads[0].url}
                                className="annonceImge img-responsive shadow-lg mx-auto mt-4 rounded-lg"
							  />
							  ) : (
								<img
									alt="defalut ideaImg"
									src={require("assets/img/idea/default.jpg")}
                                    className="annonceImge shadow-lg mx-auto rounded-lg"
								  />
							  )
						}
                        <div className="w-full px-4 flex-1">
                            <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
							    <div className="top justify-between">
                                  <div className="text-2xl uppercase text-orange-700 text-left">
                                      {idea?.category} | <i className="fas fa-heart ml-2"></i> {idea?.favorite_count}
                                  </div>
                                </div>
                                <div className="top justify-between">
                                    <div className="text-xl text-orange-700 text-left">
                                      {idea?.sub_category} | {idea?.title}
                                    </div>
                                    {idea?.note && (
                                        <button
                                            className="noteEco text-green-500 active:bg-gray-600 font-bold uppercase text-sm px-4 py-2 rounded-full ml-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                        >
                                            {renderSwitchNoteEco(idea?.note)}
                                        </button>
                                    )}
                                    {idea?.product_price ? (
                                        <div className="text-xl text-orange-700">
                                            prix du produit : {idea?.product_price} €
                                        </div>
                                    ): (
                                       null
                                    )}
                                </div>
                              <div className="container mx-auto">
                              <div className="flex flex-wrap">
                                    <div className="w-1/3">
                                      <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"> {renderSwitchValue(idea?.usage)}</span>
                                    </div>
                                    <div className="w-1/3">
                                      <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i
                                          className="far fa-address-book"></i> {renderSwitchValue(idea?.owner_type)}</span>
                                    </div>
                                    <div className="w-1/3">
                                      <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i
                                          className="fas fa-map-pin"></i> {idea?.postal_code}</span>
                                    </div>
                                    <div className="w-1/3">
                                      <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i
                                          className="fas fa-calendar-check"></i> <Moment format="DD/MM/YYYY">{idea?.created_at}</Moment></span>
                                    </div>
                                  </div>
                            </div>
                                <div className="button-block justify-left">
                                    <button
                                        className="bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-2 py-2 mr-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                      <Link href={idea?.id ? (`/annonce?id=${idea?.id}`) : ("#")} {...idea}>
                                          <a
                                              href={idea?.id ? (`/annonce?id=${idea?.id}`) : ("#")}
                                              className={
                                                  "text-sm py-1 px-2 font-normal block whitespace-no-wrap bg-transparent text-white-500"
                                              }
                                          >
                                            Voir
                                          </a>
                                      </Link>
                                    </button>
                                    <button
                                        className="bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 mr-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                      <Link href="/partager">
                                          <a
                                              href="#"
                                              onClick={(e) => handleEdit(idea?.id)}
                                              className={
                                                  "text-sm py-1 px-2 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                              }
                                          >
                                            Modifier
                                          </a>
                                      </Link>
                                    </button>
                                     <button
                                         className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-2 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                         type="button"
                                     >
                                          <a
                                              href="#pablo"
                                              onClick={(e) => handleDelete(idea?.id)}
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

export default connect(mapStateToProps)(MesAnnoncesLists)
