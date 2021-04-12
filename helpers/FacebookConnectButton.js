import React, {useEffect} from "react";
import useLoggedUser from '../service/hooks/useLoggedUser';
import {useRouter} from "next/router";
import {connect} from "react-redux";

const FacebookConnectButton = ({
                                 dispatch,
                                 url
                               }) => {
  const router = useRouter();
  const {
    signInUsingFacebook,
    isAuthentificated,
    loggedUser
  } = useLoggedUser();

  useEffect(() => {
    if (url) {
      window.location = url;
    }
  }, [dispatch, isAuthentificated, loggedUser]);

  async function facebookConnect() {
    try {
      await signInUsingFacebook();
    } catch (err) {
      alert(
          'Connexion error',
          err
      );
    }
  }

  return (
    <button
            className="active:bg-gray-100 text-gray-800 font-normal rounded-full outline-none focus:outline-none mr-1 mb-1 uppercase hover:shadow-md inline-flex items-center font-bold text-2xl ease-linear transition-all duration-150"
            type="submit"
            onClick={facebookConnect}
    >
        <i className="fab fa-facebook text-4xl mr-1 text-green-500"></i>
    </button>
  );
}

const mapStateToProps = (state) => ({
  url: state.loggedUser.url,
})

export default connect(mapStateToProps)(FacebookConnectButton)
