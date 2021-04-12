import React, {useEffect, useState} from 'react';
import Link from "next/link";
// components
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import useLoggedUser from 'service/hooks/useLoggedUser';
import {fetchUser} from 'service/actions/user';
import {connect} from 'react-redux';

const Navbar = ({dispatch, loading, user, hasErrors}) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [cookie, setCookie] = React.useState(false);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('ACCESS_TOKEN');
            if(token){
                setCookie(true)
            }
        }
    }, [dispatch]);


    const {
    isAuthentificated,
	loggedUser
  } = useLoggedUser();

    useEffect(() => {
        if (isAuthentificated && loggedUser) {
            dispatch(fetchUser())
        }
    }, [isAuthentificated, loggedUser]);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-green-500 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href="#pablo"
              >
                <img
                    src={require("assets/img/logo.png")}
                    className="w12 sm:w-4/12 px-4"
                    alt="..."
                  ></img>
              </a>
            </Link>
              <button
                  className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
              >
                  <i className="fas fa-bars"></i>
              </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="ecoMenu flex flex-col lg:flex-row list-none lg:ml-auto">
                 <li className="flex items-center">
                     <IndexDropdown />
                 </li>
                <li className="flex items-center">
                    {isAuthentificated && cookie ? (
                        <Link href="/auth/setting_user">
                            <a
                                href="#"
                                className={
                                    "text-2xl py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                                }
                            >
                                <i className="far fa-id-badge" /> <span className="text-gray-800 text-sm">Bonjour, {user?.name}</span>
                            </a>
                        </Link>
                    ) : (
                        <div className="flex items-center">
                            <Link href="/auth/login">
                                <a
                                    href="#"
                                    className={
                                        "text-xl py-1 px-2 font-normal block w-full whitespace-no-wrap bg-transparent underline"
                                    }
                                >
                                    <i className="text-gray-800 fas fa-user-circle" />Se connecter
                                </a>
                            </Link>
                            <Link href="/auth/register">
                                <a
                                    href="#"
                                    className={
                                        "text-xl py-1 px-2 font-normal block w-full whitespace-no-wrap bg-transparent underline"
                                    }
                                >
                                    <i className="text-gray-800 fas fa-user-circle" />S'inscrire
                                </a>
                            </Link>
                        </div>
                    )}
                </li>
                  <li className="flex items-center">
                      <button
                          className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                          type="button"
                      >
                          <Link href="/annonces">
                              <a
                                  href="#pablo"
                                  className={
                                      "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                  }
                              >
                                  échange idées
                              </a>
                          </Link>
                      </button>
                  </li>

              <li className="flex items-center">
                <button
                  className="bg-white text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link href="/vendre">
					  <a
						href="#pablo"
						className={
						  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-green-500"
						}
					  >
						Partager
					  </a>
				  </Link>
                </button>
              </li>
                {isAuthentificated && cookie && (
                    <li className="flex items-center">
                        <button
                            className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            type="button"
                        >
                            <Link href="/mesAnnonces">
                                <a
                                    href="#pablo"
                                    className={
                                        "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                    }
                                >
                                    Mon idée
                                </a>
                            </Link>
                        </button>
                    </li>
                )}
			  {isAuthentificated && cookie && (
			    <li className="flex items-center">
					<button
					  className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
					  type="button"
					>
					 <Link href="/favoris">
						  <a
							href="#pablo"
							className={
							  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
							}
						  >
							Favoris
						  </a>
					  </Link>
					</button>
                </li>
			  )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.getInitialProps = async ({ req }) => {
    const data = parseCookies(req)

    if (res) {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.writeHead(301, { Location: "/" })
            res.end()
        }
    }

    return {
        user: user && data,
    }
}

const mapStateToProps = (state) => ({
    loading: state.user.loading,
    user: state.user.user,
    hasErrors: state.user.hasErrors,
})
export default connect(mapStateToProps)(Navbar)
