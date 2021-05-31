import React, {useEffect} from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {fetchIdeas} from 'service/actions/ideas';
import {useRouter} from "next/router";
import {renderSwitchValue} from '../../helpers/constant'
const CardHomeAnnonceSlider = ({ dispatch,
					  loading,
					  ideas}) => {
	const router = useRouter();
	useEffect(() => {
		dispatch(fetchIdeas(router.query.page, router.query.perPage))
	}, [dispatch])

	const settings = {
		//dots: true,
		//dotsClass: "slick-dots slick-thumb",
		adaptiveHeight: true,
		className: "annoceSlider",
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
					dots: false,
					autoplay: true,
					autoplaySpeed: 2500
				}
			}
		]
	};

	return (
		<>
				<Slider {...settings}>
					{ideas?.map((idea, idx) => (
						<Link key={idx} href={`/annonce?id=${idea.id}`} {...idea}>
						<div className="text-md text-gray-700">
							{idea.uploads.length > 0 ? (
								<img
									alt={idea?.uploads[0].name}
									src={process.env.NEXT_PUBLIC_API_URL + idea?.uploads[0].url}
									className="annonceHomeImge img-responsive shadow-lg mx-auto rounded-lg"
								/>
							) : (
								<img
									alt="defalut ideaImg"
									src={require("assets/img/idea/default.jpg")}
									className="annonceHomeImge shadow-lg mx-auto rounded-lg"
								/>
							)
							}
							<p className="text-md text-gray-800 px-6">{idea?.category} | {idea?.sub_category} </p>
							<p className="text-sm text-gray-600 px-6">
								<i className="fas fa-map-pin"></i> {idea?.postal_code} | <i
								className="fas fa-seedling"></i> {renderSwitchValue(idea?.usage)} | <i
								className="far fa-address-book"></i>{renderSwitchValue(idea?.owner_type)}
							</p>
						</div>
						</Link>
					))}
				</Slider>
		</>
	);
  }

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	ideas: state.ideasReducer.ideas,
	hasErrors: state.ideasReducer.hasErrors
})

export default connect(mapStateToProps)(CardHomeAnnonceSlider)
