import React, {useEffect} from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import Link from "next/link";
import {useRouter} from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	categoryFilterOptions
} from "../../helpers/constantCategory"

const CardHomeCategorySlider = () => {
	const router = useRouter();
	const slideToShowItem = router.pathname === '/annonces' ? 4 : 5;
	const settings = {
		//dots: true,
		//dotsClass: "slick-dots slick-thumb",
		adaptiveHeight: true,
		className: "annoceSlider",
		infinite: true,
		speed: 500,
		slidesToShow: slideToShowItem,
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
					{categoryFilterOptions.map((categoryFilterOption, idx) => (
						<Link key={idx} href={`annonces?category=${categoryFilterOption.code}`} {...categoryFilterOption}>
						<div className="text-md text-gray-700 mt-4">
							<img
								alt={categoryFilterOption.code}
								src={categoryFilterOption.photo}
								className="annonceHomeImge img-responsive shadow-lg mx-auto rounded-lg"
							/>
							<p className="categoryText text-2xl text-white px-6">{categoryFilterOption?.code} </p>
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

export default connect(mapStateToProps)(CardHomeCategorySlider)
