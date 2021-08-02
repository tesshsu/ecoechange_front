import React from "react";
import { createPopper } from "@popperjs/core";
import {connect} from "react-redux";
import {renderSwitchNoteEco} from "../../helpers/constant";
const NoteConfiance = ({ dispatch,
					  loading,
					  idea}) => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const countEco = idea?.note;
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
              {renderSwitchNoteEco(countEco)}
          </button>
            <i className="fas fa-info-circle text-xl text-gray-600 animate-bounce-small"></i>
                {idea?.note >= 9 && idea?.votes?.confirmed == 5 && (
                    <p className="text-green-500 text-left text-sm">Ce service/cette boutique contribue grandement à l'environnement, certifié par la plateforme Ecoechange</p>
                )}
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
                  <i className="fas fa-seedling"></i> Que signifie votre note écologique
              </div>
              <div className="text-gray-700 p-3">
                    <ul className="list-unstyled">
						<li>
                            1 Leaf : Débutant, essayez d'avancer!
                        </li>
						<li>
                            2 Leaves : Investissez-vous dans votre parcours vert, une belle aventure vous attend!
                        </li>
                        <li>
                            3 Leaves: Vous allez dans la bonne direction, bravo!
                        </li>
                        <li>
                            4 Leaves: Bravo, vous avez déjà acquis une bonne note écologique, continuez comme ça!
                        </li>
                        <li>
                            5 Leaves: Votre idée contribue grandement à l’environnement!
                        </li>
                        <li>
                            5 Leaves + podium: Chapeau, vous êtes dans le top green, félicitations!!
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
