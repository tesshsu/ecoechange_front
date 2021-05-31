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
import {create} from "../../service/actions/favorites";
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
	}, [dispatch])

	const onClickFavoris = async (payload) => {
		try {
			if (!isAuthentificated || !loggedUser) {
				Router.push("/auth/login")
			} else {
				dispatch(create(payload));
			}
		} catch (err) {
			console.log(err);
		}
	}


	return (
		<>
			<div className="w-full lg:w-8/12 lg:mb-0 mb-12  my-6 shadow-lg rounded-lg">
				<CardAnnonceSlide/>
				<h4 className="marqueBlock text-xl text-white">
					<span className="favoris">
						<ShareButton/>
						{isFavorite(idea?.id) ? (
							<button
								className="bg-gray-700 w-8 h-8 rounded-full outline-none focus:outline-none ml-2 mb-1"
								type="button"
							>
								<i className="far fa-bookmark text-white"> </i>
							</button>
						): (<FavorisButton category="idea" entity_id={idea?.id} action={onClickFavoris}/>)}
					</span>
					{idea?.favorite_count >= 1 &&(
						<span className="text-md px-2 text-green-500">{idea?.favorite_count} likes</span>
					)}
				</h4>
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
