import React, {useEffect} from 'react';
import {isMobile} from 'react-device-detect';
import DetailsBasic from "components/Dropdowns/AnnonceDetails/DetailsBasic.js";
import DetailsSide from "components/Dropdowns/AnnonceDetails/DetailsSide.js";
import DetailsDropdown from "components/Dropdowns/AnnonceDetails/DetailsDropdown.js";
import CardAnnonceSlide from "components/Cards/CardAnnonceSlider.js";
import FavorisButton from 'components/Favoris/FavorisButton';
import ShareButton from 'components/Annonce/ShareButton';
import {fetchIdea} from 'service/actions/ideas';
import {connect} from 'react-redux'
import Router, {useRouter} from "next/router";
import {create, fetchFavorites} from "../../service/actions/favorites";
import useLoggedUser from "../../service/hooks/useLoggedUser";

const AnnonceDetail = ({
						   dispatch,
						   idea,
						   favorites
					   }) => {
	const router = useRouter();

	const {
		isAuthentificated,
		loggedUser
	} = useLoggedUser();

	const isFavorite = (id) => {
		let currentFavoritesIs = favorites?.map(i => i.entity_id);
		return currentFavoritesIs.includes(id);
	}

	useEffect(() => {
		dispatch(fetchIdea(router.query.id))
		dispatch(fetchFavorites(1, 500))
	}, [dispatch])

	const onClickFavoris = async (payload) => {
		try {
			if (!isAuthentificated || !loggedUser) {
				Router.push("/auth/login")
			} else {
				dispatch(create(payload));
			}
		} catch (error) {
			console.log(error.message);
		}
	}


	return (
		<>
			<div className="w-full lg:w-8/12 lg:mb-0 mb-12  my-6 shadow-lg rounded-lg">
				<CardAnnonceSlide/>
				<div className="marqueBlock text-xl text-white container px-2 mx-auto">
					<div className="favoris flex flex-wrap">
						<ShareButton/>
						{isFavorite(idea?.id) ? (
							<i className="fas fa-heart text-green-500 text-2xl ml-2"> </i>
						): (<FavorisButton category="idea" entity_id={idea?.id} action={onClickFavoris}/>)}
					</div>
					{idea?.favorite_count >= 1 &&(
						<span className="text-sm px-2 text-green-500 p-2 bg-white rounded-lg">{idea?.favorite_count} likes</span>
					)}
				</div>
				<div className="text-xl text-green-500 px-4 py-2 rounded-full shadow-lg text-center">
					<span className="category">{idea?.category}</span> - <span className="sub_category">{idea?.sub_category}</span>
				</div>
				<div className="flex flex-wrap">
					<DetailsBasic/>
				</div>

				<div className="flex flex-wrap">
					<DetailsDropdown/>
					{isMobile && (
						<DetailsSide/>
					)}
				</div>

			</div>

			{!isMobile && (
				<DetailsSide/>
			)}

		</>
	);
}

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	idea: state.ideasReducer.selectedIdea,
	hasErrors: state.ideasReducer.hasErrors,
	favorites: state.favoritesReducer.favorites
})

export default connect(mapStateToProps)(AnnonceDetail)
