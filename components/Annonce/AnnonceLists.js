import React, { useEffect, useState } from "react"
import Link from "next/link";
import {connect} from 'react-redux'
import FavorisButton from '../../components/Favoris/FavorisButton';
import {renderSwitchValue, renderSwitchTag} from '../../helpers/constant'
import {create} from "../../service/actions/favorites";
import {useRouter} from "next/router";
import {renderSwitchNoteEco} from "../../helpers/constant";
const AnnonceLists = ({ loading,
                          dispatch,
                          ideas,
                          hasErrors,
						  favorites
					  }) => {
	const router = useRouter();
    const [search, setSearch] = useState("");
    const [filteredIdeas, setFilteredIdeas] = useState([]);
	const [isAlreadyFavorite, setIsAlreadyFavorite] = React.useState(false)

	const isFavorite = (id) => {
		let currentFavoritesIs = favorites?.map(i => i.entity_id);
		return currentFavoritesIs.includes(id);
	}

	const onClickFavoris = async (payload) => {
		try {
			dispatch(create(payload));
		} catch (err) {
			console.log(err);
			setIsAlreadyFavorite(true)
		}
	}

	useEffect(() => {
		 setFilteredIdeas(
		  ideas?.filter((idea) =>
			idea.title?.toLowerCase().includes(search.toLowerCase()) ||
			idea.owner_type?.toLowerCase().includes(search.toLowerCase())
		  )
		);
	}, [search, ideas]);

	if (loading) {
    return <p>Loading annonces...</p>;
  }

  return (
    <>
		<div className="motcleSearch relative flex w-full flex-wrap items-stretch mt-4">
			<span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
						<i className="fas fa-search"></i>
					</span>
					<input
						type="text"
						placeholder="Mots clés..."
						className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
						onChange={(e) => setSearch(e.target.value)}
					/>
		</div>
		{
			filteredIdeas.length == 0 && router.pathname === '/annonces' && (
				<div className="noResultFilter text-center">
					<p className="text-green-500 mr-auto text-xl mt-8">
						Désolé, nous n'avons pas ça sous la main !

						Vous méritez tellement plus qu’une recherche sans résultat !

						Et si vous changiez de catégorie ? Vous pouvez aussi lancer une idée.
					</p>
					<button
						className="bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
						type="button"
					>
						<Link href="/vendre">
							<a
								href="#pablo"
								className={
									"text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500 animate-bounce"
								}
							>
								PARTAGER
							</a>
						</Link>
					</button>

				</div>
			)
		}
		{filteredIdeas?.map((idea, idx) => idea?.premium ?
			(
					<div id={idea.id} className="preniumAnnonce relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
							<img
								  alt="..."
								  src={require("assets/img/qualite_logo_satisfait.png")}
								  className="w-full align-center topImage"
								/>
							{idea.uploads.length > 0 ? (
								<img
									alt={idea?.uploads[0].name}
									src={process.env.NEXT_PUBLIC_API_URL + idea?.uploads[0].url}
									className="ideaImageSingle shadow-lg mx-auto rounded-lg"
								  />
								  ) : (
									<img
										alt="defalut ideaImg"
										src={require("assets/img/idea/default.jpg")}
										className="ideaImageSingle shadow-lg mx-auto rounded-lg"
									  />
								  )
							}
							<div className="w-full px-4 py-2 flex-1">
								<a href={`/annonce?id=${idea.id}`} rel="noreferrer" target="_blank">
								  <h4 className="font-bold text-lg text-orange-700">
									<span className="uppercase">{idea.category}</span> - {idea?.sub_category} | {idea?.usage}
									  {isFavorite(idea?.id) ? (
										  <button
											  className="bg-gray-700 w-8 h-8 rounded-full outline-none focus:outline-none ml-2 mb-1"
											  type="button"
										  >
											  <i className="far fa-bookmark text-white"> </i>
										  </button>
									  ): (<FavorisButton category="idea" entity_id={idea?.id} action={onClickFavoris}/>)}

									  {isAlreadyFavorite && (
										  <div className="favorisIcon text-green-500">Déjà ajoutée</div>
									  )}
								  </h4>
									<p className="text-gray-700 text-md">
										Idée Pour :  {renderSwitchValue(idea?.usage)}
									</p>
									<hr className="border-b-1 border-gray-400" />
									<div className="flex flex-wrap">
										<div className="w-full px-4 py-2 flex-1">
											<p className="text-md leading-relaxed text-gray-500">
												<i className="far fa-address-book"></i> {renderSwitchValue(idea?.owner_type)} | <i className="fas fa-map-marker-alt"></i> {idea?.postal_code} | <i className="fas fa-seedling"></i> {idea?.note} | {idea?.product_price ? idea.product_price : ""}
											</p>
										</div>
									</div>
								</a>
							</div>
					</div>
			    ) : (
			    <div id={idea.id} className="classicAnnonce relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
					{(() => {
						if (idea?.category == "boutique écologique") {
							return (
								<img
									alt="boutique écologique"
									src={require("assets/img/qualite_logo_eco.png")}
									className="w-full align-center topImage"
								/>
							)
						} else if (idea?.sub_category == "recette nettoyant maison fait maison" || idea?.sub_category == "recette aromathérapie bien-être" || idea?.category == "recette maquillage" || idea?.sub_category == "recette soins du visage" || idea?.sub_category == "recette soins du corps" || idea?.sub_category == "recette soins des cheveux" || idea?.sub_category == "recettes cuisine" || idea?.sub_category == "recettes sans gluten" || idea?.sub_category == "recette maquillage" || idea?.sub_category == "Vendez vos créations de mode") {
							return (
								<img
									alt="fait maison"
									src={require("assets/img/tag_maison.png")}
									className="w-full align-center topImage"
								/>
							)
						} else if (idea?.sub_category == "recettes cuisine" || idea?.sub_category == "recettes vegetarienne" ) {
							return (
								<img
									alt="ferme locale"
									src={require("assets/img/tag_recette.png")}
									className="w-full align-center topImage"
								/>
							)
						} else if (idea?.category == "ferme locale") {
							return (
								<img
									alt="ferme locale"
									src={require("assets/img/tag_ferm.png")}
									className="w-full align-center topImage"
								/>
							)
						} else if (idea?.sub_category == "recettes zéro déchets" || idea?.sub_category == "atelier zéro déchets" || idea?.sub_category == "Association zéro déchets") {
							return (
								<img
									alt="zéro déchets"
									src={require("assets/img/tag_zero.png")}
									className="w-full align-center topImage"
								/>
							)
						}else if (idea?.category == "service local") {
							return (
								<img
									alt="service local"
									src={require("assets/img/tag_local.png")}
									className="w-full align-center topImage"
								/>
							)
						}else if (idea?.category == "atelier") {
							return (
								<img
									alt="atelier"
									src={require("assets/img/tag_atelier.png")}
									className="w-full align-center topImage"
								/>
							)
						}else {
							return (
								null
							)
						}
					})()}
					<button
						className="noteEco text-green-500 active:bg-gray-600 font-bold uppercase text-sm px-4 py-2 rounded-full ml-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
					>
						{renderSwitchNoteEco(idea?.note)}
					</button>
					{idea.uploads.length > 0 ? (
						  <div className="imgBlock">
							  {idea?.owner_type == 'pro' ? (
								<div className="">
									<img
										alt={idea?.uploads[0].name}
										src={process.env.NEXT_PUBLIC_API_URL + idea?.uploads[0].url}
										className="ideaImageSingle shadow-lg mx-auto rounded-lg border-2 border-green-500"
									/>
									<span className="text-green-500 absolute right-0 top-0 p-2 animate-bounce">
										<i className="fas fa-store"></i>Pro
									</span>
								</div>
							  ) :(
								  <img
									  alt={idea?.uploads[0].name}
									  src={process.env.NEXT_PUBLIC_API_URL + idea?.uploads[0].url}
									  className="ideaImageSingle shadow-lg mx-auto rounded-lg"
								  />
							  )}
						  </div>

						  ) : (
						    <img
								alt="defalut ideaImg"
								src={require("assets/img/idea/default.jpg")}
								className="ideaImageSingle shadow-lg mx-auto rounded-lg"
							  />
						  )
					}
					<div className="w-full px-4 py-2 flex-1">
						<a href={`/annonce?id=${idea.id}`} rel="noreferrer" target="_blank">
						  <h4 className="font-bold text-lg text-gray-700">
						   <span className="uppercase">{idea?.category}</span> - {idea.sub_category} | {idea?.title}
							  {isFavorite(idea?.id) ? (
								  <button
									  className="bg-gray-700 w-8 h-8 rounded-full outline-none focus:outline-none ml-2 mb-1"
									  type="button"
								  >
									  <i className="far fa-bookmark text-white"> </i>
								  </button>
							  ): (<FavorisButton category="idea" entity_id={idea?.id} action={onClickFavoris}/>)}

							  {isAlreadyFavorite && (
								  <div className="favorisIcon text-green-500">Déjà ajoutée</div>
							  )}
						  </h4>
						  <p className="text-gray-700 text-md">
							  Idée Pour :  {renderSwitchValue(idea?.usage)}
								  {idea?.own_website?.indexOf('youtu') > -1 &&(
								      <span className="text-green-500"><i class="fab fa-youtube animate-bounce"></i> Avec Youtube</span>
								  )}
							  <span><i className="fas fa-heart ml-2"></i> {idea?.favorite_count}</span>

						  </p>
						</a>
					</div>
					<hr className="border-b-1 border-gray-400" />
					<div className="flex flex-wrap">
						<div className="w-full px-4 py-2 flex-1">
							<p className="text-md leading-relaxed text-green-500">
								<i className="far fa-address-book"></i> {renderSwitchValue(idea?.owner_type)} | <i className="fas fa-map-marker-alt"></i> {idea?.postal_code} | <i className="fas fa-seedling"></i> {idea?.note} {idea?.product_price ? "|" + idea.product_price + "€" : ""}
							</p>
						</div>
					</div>
			</div>
			)
		)}
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
	favorites: state.favoritesReducer.favorites
})

export default connect(mapStateToProps)(AnnonceLists)
