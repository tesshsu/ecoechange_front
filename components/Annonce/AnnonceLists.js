import React, { useEffect, useState } from "react"
import Link from "next/link";
import {connect} from 'react-redux'
import FavorisButton from '../../components/Favoris/FavorisButton';
import {renderSwitchValue, renderSwitchTag} from '../../helpers/constant'
import {create} from "../../service/actions/favorites";

const AnnonceLists = ({ loading,
                          dispatch,
                          ideas,
                          hasErrors,
						  favorites
					  }) => {

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
			idea.category?.toLowerCase().includes(search.toLowerCase()) ||
			idea.usage?.toLowerCase().includes(search.toLowerCase())
		  )
		);
	}, [search, ideas]);

	if (loading) {
    return <p>Loading annonces...</p>;
  }

  return (
    <>
		<div className="relative flex w-full flex-wrap items-stretch mt-4">
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
		{filteredIdeas?.map((idea, idx) => idea?.premium ?
			(
			  <Link key={idx} href={`/annonce?id=${idea.id}`} {...idea}>
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
						</div>
				</div>
			</Link> ) : (
			   <Link key={idx} idea={idea} href={`/annonce?id=${idea?.id}`} {...idea}>
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
						} else if (idea?.category == "recette nettoyant maison" || idea?.category == "recette aromathérapie bien-être" || idea?.category == "recette maquillage" || idea?.category == "recette soins du visage" || idea?.category == "recette soins du corps" || idea?.category == "recette soins des cheveux" || idea?.category == "recettes cuisine") {
							return (
								<img
									alt="fait maison"
									src={require("assets/img/tag_maison.png")}
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
						} else if (idea?.category == "product zéro déchets") {
							return (
								<img
									alt="zéro déchets"
									src={require("assets/img/tag_zero.png")}
									className="w-full align-center topImage"
								/>
							)
						}else if (idea?.category == "recettes sans gluten special") {
							return (
								<img
									alt="zéro déchets"
									src={require("assets/img/tag_sans.png")}
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
						  <h4 className="font-bold text-lg text-gray-700">
						   <span className="uppercase">{idea?.category}</span> - {idea.sub_category}
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
					</div>
					<hr className="border-b-1 border-gray-400" />
					<div className="flex flex-wrap">
						<div className="w-full px-4 py-2 flex-1">
							<p className="text-md leading-relaxed text-gray-500">
								<i className="far fa-address-book"></i> {renderSwitchValue(idea?.owner_type)} | <i className="fas fa-map-marker-alt"></i> {idea?.postal_code} | <i className="fas fa-seedling"></i> {idea?.note} | {idea?.product_price ? idea.product_price + "€" : "pas de prix"}
							</p>
						</div>
					</div>
			</div>
		  </Link>
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
