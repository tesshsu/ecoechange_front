import React from "react";
import {connect} from "react-redux";
import {
	anti_theft_equipments,
	comfort_equipments,
	inside_equipments,
	security_equipments,
	other_equipments,
	outside_equipments
} from "../../../helpers/constant";

const DetailsDropdown = ({
							 dispatch,
							 loading,
							 idea
						 }) => {

    const address_boutique = idea?.shop_address ? idea.shop_address : "none";
	const ncs = [
		{icon: "fas fa-seedling", name: "Details idee", value: idea?.content},
		{icon: "fas fa-map-pin", name: "Address du boutique", value: address_boutique},
	];

	let Equips = idea?.equipments

	return (
		<>
			<div className="flex flex-wrap">
				<div className="w-full px-8 py-2 px-2 flex-1">
					<h4 className="mt-2 px-2 py-2 text-xl leading-relaxed text-gray-800 underline font-bold uppercase rounded text-center">
						<i class="fab fa-pagelines"></i> Idée est la...
					</h4>
				</div>
				{ncs?.map(nc => (
					<div className="container px-2 mx-auto">
						<div className="flex flex-wrap">
							<div className="w-full px-4">
								<span
									className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i
									className={nc.icon}></i> {nc.name} </span>
							</div>
							<div className="w-full px-4">
							    <span
									className="ideaTextarea question-1 text-xl block my-2 p-3 text-green-500 rounded border border-solid border-gray-200">
								  {nc.value}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	idea: state.ideasReducer.selectedIdea,
	hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(DetailsDropdown)
