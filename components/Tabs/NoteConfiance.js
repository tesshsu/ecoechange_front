import React from "react";
import { createPopper } from "@popperjs/core";
import {connect} from "react-redux";

const NoteConfiance = ({ dispatch,
					  loading,
					  idea}) => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openTooltip = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "top"
    });
    setPopoverShow(true);
  };
  const closeTooltip = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className="bg-green-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-4 rounded-full ml-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            onMouseEnter={openTooltip}
            onMouseLeave={closeTooltip}
            ref={btnRef}
          >
             <i className="fas fa-seedling"></i> <span className="noteConfiance text-md"> {idea?.note} </span>
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-white border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div
                className="bg-green-500 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg"
              >
                  <i className="fas fa-seedling"></i> Quelle est la note qui favorise la qualification écologique de la vie?
              </div>
              <div className="text-gray-700 p-3">
                    <ul className="list-unstyled">
						<li>
					        1. Expérience écologique annuelle estimée
                        </li>
						<li>
					        2. Description de l'idée qualifiée
                        </li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	idea: state.ideasReducer.selectedIdea,
	hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(NoteConfiance)
