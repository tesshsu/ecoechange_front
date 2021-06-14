import React, { useEffect } from "react";
import { Form, Field } from 'react-final-form';
import Router from "next/router";
import Auth from "layouts/Auth.js";
import useLoggedUser from 'service/hooks/useLoggedUser';
import CardAcceptCondition from "components/Cards/CardAcceptCondition.js";
import Link from "next/link";
const required = value => (value ? undefined : 'Champs obligatoires')

export default function Register() {
  const {
	register
  } = useLoggedUser();


  const onSubmit = async (values)=>{
	try {
      let {
        ...payload
      } = values;

      const data = { ...payload };
      await register(data);
	  if(data){
		 Router.push("/partager");
	  }
    } catch (err) {
      console.log(err.response);
      if (err.response && err.response.status === 422) {
        submitError({
          email: 'Cet email est déjà utilisé'
        });
      } else {
        alert('Vous avez déjà un compte par cet e-mail, veuillez vous rendre sur la page de connexion');
      }
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 mt-16 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-green-500 text-sm font-bold">
                    Créez votre compte gratuitement
                  </h6>
                </div>
                <p className="notifyForLogin text-md leading-relaxed text-gray-800 text-left">  L'accès à votre compte vous permettra de déposer et gérer vos idées. Vous pouvez aussi ajouter les idées qui vous intéressent dans vos favoris. Recevoir des notifications, des newsletters </p>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-700 text-center mb-3 font-bold">
                  <small>Créez votre compte avec</small>
                </div>
                <Form
				  initialValues={{
						name:'',
						email: '',
						password: '',
						password_confirmation: ''
					  }}
				  onSubmit={onSubmit}
				  render={({ submitError, handleSubmit, form, submitting, pristine, values, invalid }) => (
						<form onSubmit={handleSubmit}>
						    <Field name="name" validate={required}>
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="name"
									>
									  Votre nom ( ou votre identifiant )
									</label>
									<input
									  {...input}
									  type="text"
									  value= {values.name}
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Votre nom ou prénom"
									/>{meta.error && meta.touched && <span className="text-green-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
							<Field name="email" validate={required}>
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="email"
									>
									  Votre adresse Email
									</label>
									<input
									  {...input}
									  type="email"
									  value= {values.email}
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Email"
									/>{meta.error && meta.touched && <span className="text-green-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
							<Field name="password" validate={required}>
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="password"
									>
									  Votre mot de passe
									</label>
									<input
									  {...input}
									  type="password"
									  value= {values.password}
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Mot de passe"
									/>{meta.error && meta.touched && <span className="text-green-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
							<Field name="password_confirmation" validate={required}>
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="password_confirmation"
									>
									  Confirmer votre mot de passe
									</label>
									<input
									  {...input}
									  type="password"
									  value= {values.password_confirmation}
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Mot de passe"
									/>{meta.error && meta.touched && <span className="text-green-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
						    <CardAcceptCondition />

						  <div className="text-center mt-6">
							<button
							  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
							  type="submit"
							  disabled={submitting || invalid}
							>
							  Créer mon compte
							</button>
						  </div>
						</form>
					)}
				/>
              </div>
            </div>
              <div className="loginBottom flex flex-wrap text-white relative">
                  <div className="w-1/2">

                      <Link href="/auth/login">
                          <a
                              href="/auth/forget_password"
                              className="font-bold text-xl"
                          >
                              <small>Connexion </small>
                          </a>
                      </Link>
                  </div>
                  <div className="w-1/2 text-right">
                      <Link href="/auth/forget_password">
                          <a href="#pablo" className="font-bold text-xl">
                              <small>Mot de passe oublié ?</small>
                          </a>
                      </Link>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </>
  );
}

Register.layout = Auth;
