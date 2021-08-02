import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-white pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">ecoechange.com</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                  1 plateforme, des milliers d’idées écologiques
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                  <button
                      className="bg-white text-green-500 font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2"
                      type="button"
                  >
                      <a href="https://twitter.com/ecoechange"  target="_blank">
                          <i className="fab fa-twitter"></i>
                      </a>
                  </button>
                <button
                  className="bg-white text-green-500 font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://www.facebook.com/Ecoechange-2257618187614768"  target="_blank">
				   <i className="fab fa-facebook"></i>
				  </a>
                </button>
                <button
                    className="bg-white text-green-500 font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2"
                    type="button"
                >
                  <a href="https://www.instagram.com/ecoechange/"  target="_blank">
				   <i className="fab fa-instagram"></i>
				  </a>
                </button>
                  <button
                      className="bg-white text-green-500 font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2"
                      type="button"
                  >
                      <a href="https://www.youtube.com/channel/UCyG6rRrmCMixlzDgNHvh2HQ"  target="_blank">
                          <i className="fab fa-youtube"></i>
                      </a>
                  </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <ul className="list-unstyled">
                    <li>
					  <Link href="/footer/about">
						  <a
							className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
							href="#"
						  >
							QUI SOMMES-NOUS
						  </a>
					  </Link>
                    </li>
                    <li>
                      <Link href="/footer/contact">
						  <a
							className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
							href="#"
						  >
							REJOIGNEZ-NOUS
						  </a>
					  </Link>
                    </li>
                      <li>
                          <Link href="/noteEco">
                              <a
                                  className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                  href="#"
                              >
                                  LA NOTE ÉCOLOGIQUE
                              </a>
                          </Link>
                      </li>
                      <li>
                          <Link href="/footer/faq">
                              <a
                                  className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                  href="#"
                              >
                                  FAQ
                              </a>
                          </Link>
                      </li>
                      <li>
                          <Link href="/footer/policy">
                              <a
                                  className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                  href="#"
                              >
                                  CONDITIONS GENERALES
                              </a>
                          </Link>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} ecoechange.com                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
