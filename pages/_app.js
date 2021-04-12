import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { Provider } from 'react-redux';
import { CookiesProvider } from "react-cookie";
import cookies from "next-cookies";
import PageChange from "components/PageChange/PageChange.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import * as reducers from '../service/reducers';
import { setupApiClient } from '../api/client';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import CookieConsent from "react-cookie-consent";
import * as LOGGED_USER_ACTIONS from "../service/actions/loggedUser";
import {favoritesReducer , ideasReducer, userReducer} from "../service/reducers";
import {setupStripe} from "../api/stripeClient";
import ReactGA from 'react-ga';

//GA
ReactGA.initialize('UA-131281102-1');
if (typeof window !== "undefined") {
    ReactGA.pageview(window.location.pathname + window.location.search);
}

//combien all the reducers
const logger = createLogger();
const rootReducers = combineReducers({
    user: userReducer,
    ideasReducer: ideasReducer,
    favoritesReducer: favoritesReducer,
    ...reducers,
})
const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

//------------------------
// Router setup
//------------------------
Router.events.on("routeChangeStart", (url) => {
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    ReactDOM.render(
        <PageChange path={url} />,
        document.getElementById("page-transition")
    );
});
Router.events.on("routeChangeComplete", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});

//------------------------
// API setup
//------------------------
setupApiClient();
setupStripe();


// Cookie init
function getCookie(cname) {
    if (typeof window === "undefined") return null;
    var name = cname + "=";

    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}


//------------------------
// Export App
//------------------------
export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        const authUser = cookies(ctx).user || "";

        if (authUser) {
            store.dispatch({
                type: LOGGED_USER_ACTIONS.LOGIN,
                payload: {
                    user: authUser.loggedUser,
                },
            });
        }

        return { pageProps };
    }

    componentDidMount() {
        const isAuthenticated = getCookie("user");
        if (isAuthenticated) {
            const loggedUser = JSON.parse(isAuthenticated).loggedUser;
            store.dispatch({
                type: LOGGED_USER_ACTIONS.LOGIN,
                payload: {
                    user: loggedUser,
                },
            });
        }
    }
    render() {
        const { Component, pageProps } = this.props;

        const Layout = Component.layout || (({ children }) => <>{children}</>);

        return (
            <React.Fragment>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />npm r
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Publiez vos idées écologiques, Lancez votre idée / vendre, service, atelier écologique, local, natural afin de vendre ou échanger plus facilement sur votre mode de vie écologique ou zéro déchet." />
                    <title>ecoechange.com</title>
                </Head>
                <Provider store={store}>
                    <Layout>
                        <CookiesProvider>
                            <Component {...pageProps} />
                        </CookiesProvider>
                        <CookieConsent
                            location="bottom"
                            buttonText="J'accepte"
                            cookieName="1carCookies"
                            style={{ background: "#48bb78" }}
                            buttonStyle={{ color: "#fff", fontSize: "15px" }}
                            buttonClasses={{ background: "#555", color: "#fff", fontSize: "15px" }}
                            buttonId="eco-confirm-button"
                            expires={30}
                        >
                            Nous protégeons vos données ! On utilise quelques services pour mesurer notre audience, entretenir la relation
                            avec vous et vous proposer la meilleure expérience possible ! Vous pouvez accepter ou gérer vos choix en cliquant
                            ci-dessous, y compris votre droit d’opposition en cas d’utilisation d’un intérêt légitime,
                            ou à tout moment sur la page de politique de confidentialité{" "}
                            <p style={{ fontSize: "12px" }}>Ces préférences seront signalées à nos partenaires et n’affecteront pas les données de navigation</p>
                            <span style={{ fontSize: "12px" }}>
                                  <Link href="/footer/policy">
                                  <a
                                      href="#"
                                      className={
                                          "text-sm font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                                      }
                                  >
                                    Lire la politique de confidentialité
                                  </a>
                                </Link>
                              </span>
                         </CookieConsent>
                    </Layout>
                </Provider>
            </React.Fragment>
        );
    }
}
