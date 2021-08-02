import React from "react"
import {useRouter} from "next/router";


export default function CardAnnonceVote(props) {
    const router = useRouter();

    const countConfirme = props?.idea?.votes?.confirmed;
    let countWidthConfirme = countConfirme * 20 + '%';

    const countRealise = props?.idea?.votes?.realized;
    let countWidthRealise = countRealise * 20 + '%';

    const countVisite = props?.idea?.votes?.visited;
    let countWidthVisite = countVisite * 20 + '%';

    return (
        <>
            {props?.idea?.note ? (
                <div className="voteBlock container px-2">
                    {router.pathname === "/annonce" && (
                        <div>
                            <div className="voteTitle flex flex-wrap">
                                <div className="w-full px-4"><span
                                    className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i
                                    className="fas fa-vote-yea"></i> LA COMMUNAUTÉ VALIDE </span></div>
                            </div>
                        </div>
                    )}
                    <ul className="flex flex-col lg:flex-row list-none ml-4 mt-2">
                            <li className="flex items-center px-2">
                                      <span
                                          className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded text-white bg-green-500 mr-3">
                                        <i className="fas fa-leaf animate-bounce"></i> <h6>Confirme</h6>
							           </span>
                                    <div className="relative w-full">
                                        <div className="mr-2 text-green-500">vote(s) {countConfirme}</div>
                                        <div
                                            className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
                                            <div
                                                style={{width: countWidthConfirme}}
                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                            ></div>
                                        </div>
                                    </div>
                            </li>
                        <li className="flex items-center px-2">
                                      <span
                                          className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded text-white bg-green-500 mr-3">
                                        <i className="fas fa-mortar-pestle animate-bounce"></i> <h6>Réalisé</h6>
							           </span>
                            <div className="relative w-full">
                                <div className="mr-2 text-green-500">vote(s) {countRealise}</div>
                                <div
                                    className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
                                    <div
                                        style={{width: countWidthRealise}}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                    ></div>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center px-2">
                                      <span
                                          className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded text-white bg-green-500 mr-3">
                                        <i className="fas fa-store animate-bounce"></i> <h6>Visité</h6>
							           </span>
                            <div className="relative w-full">
                                <div className="mr-2 text-green-500">vote(s) {countVisite}</div>
                                <div
                                    className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
                                    <div
                                        style={{width: countWidthVisite}}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                    ></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            ) : null}
        </>
    )
}

