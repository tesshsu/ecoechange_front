import React from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CardAnnonceSlider = ({ dispatch,
					  loading,
					  idea}) => {



	let uploadFiles = idea?.uploads

	const settings = {
		  adaptiveHeight: true,
		  className: "annoceSlider",
		  infinite: true,
		  speed: 1000,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  swipeToSlide: true,
		  responsive: [
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					  adaptiveHeight: true,
					  infinite: true,
					  speed: 1000
				  }
				}
			  ]
		};

	return (
		<>
			{uploadFiles?.length > 0 ? (
				<Slider {...settings}>
					{
						uploadFiles?.map(uploadFile => (
							<div>
								{idea?.note >= 9 && idea?.votes?.confirmed == 5 && (
									<img
										alt="..."
										src={require("assets/img/note/certificate/certified.png")}
										className="w-full align-left certifiImageDetail animate-bounce-small"
									/>
								)}
								<img className="sliderImg" src={process.env.NEXT_PUBLIC_API_URL + uploadFile.url} alt={uploadFile.name}/>
							</div>
						))}
				</Slider> ) : (
				<div>
					<img className="sliderImg" src={require("assets/img/idea/default_big.jpg")} alt="defalut ideaImg"/>
				</div>
			)
			}
		</>
	);
  }

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	idea: state.ideasReducer.selectedIdea,
	hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(CardAnnonceSlider)
