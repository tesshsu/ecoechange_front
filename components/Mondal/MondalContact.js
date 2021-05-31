import React from "react";
import Link from "next/link";
import {connect} from "react-redux";

const ModalContact = ({ dispatch,
					  loading,
					  idea}) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-green-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
          Informations de contact <i className="fas fa-chevron-circle-down"></i>
      </button>
        <p className="mt-2 text-gray-400 text-sm">Ces informations sont publiées par l'éditeur de l’annonce</p>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex border border-solid border-gray-300 overflow-x-hidden overflow-y-auto inset-0 z-10 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-full">
              <div className="w-full">
                {/*body*/}
					<div className="relative p-6 flex-auto">
                        <button
                            className="text-gray-600 right active:bg-green-600 text-sm px-2 py-3 mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            <i className="fas fa-times-circle"></i>
                        </button>
					{ idea?.owner.phone ? (
						<div className="container px-4">
							  <div className="flex flex-wrap">
								<div className="w-full flex-1">
								  <span className="text-md block my-2 text-gray-800 font-bold"><i className="fas fa-phone"></i> {idea?.owner.phone}</span>
								</div>
							  </div>
						</div> ) : (null)
					}
						<div className="container px-4">
							  <div className="flex flex-wrap ">
								<div className="w-full flex-1">
								  <span className="text-md block my-2 text-gray-800 font-bold"><i className="fas fa-envelope"></i>    <a href={`mailto:${idea?.owner.email}`}>En cliquant ici</a></span>
								</div>
                              </div>
						</div>

                        <div className="container px-4">
                            <div className="flex flex-wrap ">
                                <div className="w-full flex-1">
                                    <span className="text-md block my-2 text-gray-800 font-bold"><i
                                        className="fas fa-map-marker-alt"></i> {idea?.postal_code}</span>
                                </div>
                            </div>
                        </div>

                            <div className="container px-4">
                                <div className="flex flex-wrap ">
                                    <div className="w-full flex-1">
                                        <p className="text-sm text-gray-400"><Link href="footer/policy">Cliquer </Link> ici les finalités du traitement de mes données personnelles, les destinataires, le responsable de traitement, les durées de conservation, les coordonnées du DPO et mes droits.</p>
                                    </div>
                                </div>
                            </div>
					</div>

                </div>
              </div>
            </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	idea: state.ideasReducer.selectedIdea,
	hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(ModalContact)
