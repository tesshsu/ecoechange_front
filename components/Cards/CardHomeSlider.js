import React, {useEffect} from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import {useRouter} from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	listsSliderHomes, listsSliderQAs
} from "../../helpers/constant"

const CardHomeSlider = () => {
	const router = useRouter();
	const retriveSliders = router.pathname === '/' ? listsSliderHomes : listsSliderQAs;
	const retriveSlider = router.pathname === '/' ? 'listsSliderHome' : 'listsSliderQA';
	const settings = {
		fade: true,
		className: "annoceSlider",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
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
					autoplaySpeed: 1500
				}
			}
		]
	};

	return (
		<>
				<Slider {...settings}>
					{retriveSliders.map((retriveSlider, idx) => (
						<div className="mt-4">
							<img
								alt={retriveSlider.name}
								src={retriveSlider.url}
								className="img-responsive shadow-lg mx-auto rounded-lg"
							/>
						</div>
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

export default connect(mapStateToProps)(CardHomeSlider)
