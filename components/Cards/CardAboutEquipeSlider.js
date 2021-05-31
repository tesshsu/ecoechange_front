import React from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import Link from "next/link";
import {useRouter} from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	listsAboutPageEquipes
} from "../../helpers/constant"

const CardAboutEquipeSlider = () => {
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
					{listsAboutPageEquipes.map(listsAboutPageEquipe => (
						<div className="px-6">
							<a href={listsAboutPageEquipe.line} target="_blank">
							<img alt="..." src={listsAboutPageEquipe.photo}
								 className="shadow-lg rounded-full mx-auto max-w-120-px" />
								<div className="pt-6 text-center">
									<h5 className="text-xl font-bold">{listsAboutPageEquipe.name}</h5>
								</div>
							</a>
						</div>
					))}
				</Slider>
		</>
	);
  }

export default CardAboutEquipeSlider;

