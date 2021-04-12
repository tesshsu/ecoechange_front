import React from "react";
import {connect} from 'react-redux'
import { createPopper } from "@popperjs/core";
import {premium_ncs} from 'helpers/constant';
import {premium_options_display} from "../../../helpers/constant";

const DetailsPremiumDropdown = ({
						 dispatch,
						 idea,
						 loading,
					   }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const ideaHasOption = (premium_opt) => {
      return premium_options_display(premium_opt, idea?.options?.prenium?.includes(premium_opt.value));
    }

  return (
    <>
       {idea?.premium ? (
		<div className="container px-2 mx-auto">
		<div className="w-full px-8 py-2 px-2 flex-1">
			<h4 className="mt-2 px-2 py-2 text-2xl leading-relaxed text-green-500 font-bold underline uppercase rounded animate-bounce-once">
				Plus details
            </h4>
		</div>
		<div className="container px-2 mx-auto">
			<div className="flex flex-wrap">
				{premium_ncs.map(premium_nc => (
					<div className="container px-2 mx-auto">
						<div className="flex flex-wrap">
							<div className="w-full px-4 flex-1">
							  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i class={premium_nc.icon}></i> {premium_nc.name} </span>
							</div>
							<div className="w-full px-4 flex-1">
							  <span className="question-11 text-xl block my-2 p-3 text-green-500 rounded border border-solid border-gray-200">{ideaHasOption(premium_nc)}</span>
							</div>
						</div>
					</div>
				))}
			</div>
	    </div>
        </div>) : (null)}
    </>
  );
};

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	idea: state.ideasReducer.selectedIdea,
	hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(DetailsPremiumDropdown)
