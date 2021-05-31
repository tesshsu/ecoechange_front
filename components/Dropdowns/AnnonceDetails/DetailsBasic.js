import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import moment from 'moment';
import {renderSwitchValue} from '../../../helpers/constant'
const DetailsBasic = ({
						 dispatch,
						 idea,
						 loading,
					   }) => {
  let yearOfidea = idea?.created_at;
  const basics = [
	  { icon: "fas fa-clipboard-list", name: "Catégorie", value: idea?.category },
	  { icon: "fas fa-blender", name: "Quelle idée", value: idea?.sub_category },
	  { icon: "fas fa-bullhorn", name: "Objectif", value: idea?.usage },
	  { icon: "fas fa-seedling", name: "Mon engagement écologique", value: idea?.experience_eco },
	  { icon: "far fa-clock", name: "créé le", value: moment(yearOfidea).format("DD/MM/YYYY")}
  ];

  return (
    <>
        <div className="flex flex-wrap">
			<div className="w-full px-8 py-2 px-2 flex-1">
				<h4 className="mt-2 px-2 py-2 text-xl leading-relaxed underline text-gray-800 font-bold uppercase text-center">
					<i className="far fa-address-book"></i> DETAILS DE L’IDÉE :  <span className="text-green-500">{idea?.title}</span>
				</h4>
			</div>
			{basics.map(basic => (
				<div className="container px-2 mx-auto">
					<div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
							  <span className="text-xl text-center block my-2 p-3 text-gray-800 rounded-full border border-solid border-gray-300"><i className={basic.icon}></i> {basic.name}: </span>
						</div>
						<div className="w-full px-4 flex-1">
							  <span className="ideaburant text-xl block my-2 p-3 text-green-500"> {renderSwitchValue(basic.value)}</span>
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

export default connect(mapStateToProps)(DetailsBasic)
