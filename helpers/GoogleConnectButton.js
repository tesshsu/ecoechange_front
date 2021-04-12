import React from "react";
import useLoggedUser from '../service/hooks/useLoggedUser';

export default function GoogleConnectButton() {
  const {
    signInUsingGoogle,
    loggedUser
  } = useLoggedUser();

  async function googleConnect() {
    try {
      await signInUsingGoogle();

      console.log("loggedUser=", loggedUser);
      if (loggedUser?.url) {
        window.location = loggedUser.url;
      }
    } catch (err) {
      alert(
          'Connexion error',
          err
      );
    }
  }

  return (
    <button
            className="active:bg-gray-100 font-normal rounded-full outline-none focus:outline-none mr-1 mb-1 uppercase hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
            type="submit"
            onClick={googleConnect}
    >
       <i className="fab fa-google text-4xl mr-1 text-green-500"></i>
    </button>
  );
}

