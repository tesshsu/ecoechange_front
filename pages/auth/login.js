import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { Form, Field } from 'react-final-form';
import Auth from "layouts/Auth.js";
import useLoggedUser from 'service/hooks/useLoggedUser';
import FacebookConnectButton from 'helpers/FacebookConnectButton';
import GoogleConnectButton from 'helpers/GoogleConnectButton';
import * as formValidate from 'helpers/formValidate';
import { useCookies } from "react-cookie"
export default function Login() {
    const [cookie, setCookie] = useCookies(["user"])
    const {
        login,
        isAuthentificated,
        loggedUser
    } = useLoggedUser();

    useEffect(() => {
        if (isAuthentificated && loggedUser) {
            setCookie("user", JSON.stringify(loggedUser), {
                path: "/",
                maxAge: 3600, // Expires after 1hr
                sameSite: true,
            })
        }
    }, [isAuthentificated, loggedUser]);

    return (
        <>
            <div className="container mx-auto px-4 mt-6 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                            <div className="rounded-t mb-0 px-6 py-2">
                                <div className="text-center mb-3">
                                    <h6 className="text-gray-500 text-md font-bold mt-2">
                                        Connectez-vous avec
                                    </h6>
                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-5 pt-0">
                                <div className="btn-wrapper text-center">
                                    <FacebookConnectButton />
                                    <GoogleConnectButton />
                                </div>
                                <Form
                                    initialValues={{
                                        email: '',
                                        password: ''
                                    }}
                                    onSubmit={async ({ email, password }) => {
                                        await formValidate.sleep(300)
                                        try {
                                            await login(
                                                email.trim(),
                                                password.trim()
                                            );

                                            Router.back();
                                        } catch (err) {
                                            alert("Identifiants incorrects!");
                                        }
                                    }}
                                    render={({ submitError, handleSubmit, form, submitting, pristine, values, invalid
                                             }) => (
                                        <form onSubmit={handleSubmit}>
                                            <hr className="mt-6 border-b-1 border-gray-600 mb-3" />
                                            <Field name="email" validate={formValidate.required}>
                                                {({ input, meta }) => (
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="email"
                                                        >
                                                            mail
                                                        </label>
                                                        <input
                                                            {...input}
                                                            type="email"
                                                            value= {values.email}
                                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                            placeholder="Email"
                                                        />
                                                        {(meta.error || meta.submitError ) && meta.touched && (
                                                            <span className="text-green-500 text-sm">{meta.error || meta.submitError}</span>
                                                        )}
                                                    </div>
                                                )}
                                            </Field>

                                            <Field name="password" validate={formValidate.required}>
                                                {({ input, meta }) => (
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="password"
                                                        >
                                                            Mot de passe
                                                        </label>
                                                        <input
                                                            {...input}
                                                            type="password"
                                                            value= {values.password}
                                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                            placeholder="Mot de passe"
                                                        />
                                                        {(meta.error || meta.submitError ) && meta.touched && (
                                                            <span className="text-green-500 text-sm">{meta.error || meta.submitError}</span>
                                                        )}
                                                    </div>
                                                )}
                                            </Field>

                                            <div className="text-center mt-6">
                                                {invalid ?(
                                                    <button
                                                        className="bg-green-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                        type="submit"
                                                        disabled={invalid}
                                                    >
                                                        Error
                                                    </button> ) : (
                                                    <button
                                                        className="bg-green-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                        type="submit"
                                                        disabled={submitting}
                                                    >
                                                        Connexion
                                                    </button>
                                                )
                                                }
                                            </div>
                                        </form>
                                    )}
                                />
                                <p className="notifyForLogin text-sm leading-relaxed text-green-500 text-left"> <i className="fas fa-feather"> </i> Cette connexion vous permet de déposer et gérer vos publications.</p>
                                <p className="notifyForLogin text-sm leading-relaxed text-green-500 text-left mt-2"> <i className="fas fa-bookmark"> </i> Ajouter vos les idées en favoris.</p>
                            </div>
                        </div>
                        <div className="loginBottom flex flex-wrap text-white relative">
                            <div className="w-1/2">

                                <Link href="/auth/forget_password">
                                    <a
                                        href="/auth/forget_password"
                                        className="font-bold text-xl"
                                    >
                                        <small>Mot de passe oublié ?</small>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-1/2 text-right">
                                <Link href="/auth/register">
                                    <a href="#pablo" className="font-bold text-xl">
                                        <small>Créez un compte</small>
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


Login.layout = Auth;
