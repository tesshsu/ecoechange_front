import React from "react";
import Link from "next/link";
import Auth from "../../layouts/Auth.js";
import { Form, Field } from 'react-final-form';
import * as formValidate from '../../helpers/formValidate';
import useLoggedUser from '../../service/hooks/useLoggedUser';
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import PubContentThreeIcons from "../../layouts/PubContentThreeIcons";
import {isSafari} from 'react-device-detect';

export default function ForgetPassword() {
    const {
        forgetPassword
    } = useLoggedUser();
    const [showModal, setShowModal] = React.useState(false);
    const [isloading, setIsloading] = React.useState(false);
    const [showError, setShowError] = React.useState(false);

    return (
        <>
            <div className="container mx-auto px-4 mt-16 h-full">
                {showModal ? (
                    <>
                        <Modal closeOnEsc={false} open={open} onClose={() => setShowModal(false)}>
                            <PubContentThreeIcons/>
                            <h2 className="text-2xl font-semibold text-center">Veuillez confirmer votre email pour modifier votre password</h2>
                        </Modal>
                    </>
                ) : null}
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <hr className="mt-6 border-b-1 border-gray-400" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-gray-700 text-center mb-3 font-bold">
                                    <small>Réinitialisez votre mot de passe </small>
                                </div>
                                <Form
                                    initialValues={{
                                        email: ''
                                    }}
                                    onSubmit={async (values) => {
                                        await formValidate.sleep(300)
                                        setIsloading(true)
                                        try {
                                            await forgetPassword({ email : values?.email.trim()});
                                            setIsloading(false);
                                            if(isSafari){
                                                alert("Votre message a bien été envoyé, Nous vous répondrons au plus vite")
                                            }else{
                                                setShowModal(true)
                                            }
                                        } catch (err) {
                                            setShowError(true)
                                        }
                                    }}
                                    render={({ submitError, handleSubmit, form, submitting, pristine, values, invalid
                                             }) => (
                                        <form onSubmit={handleSubmit}>
                                            <Field name="email" validate={formValidate.required}>
                                                {({ input, meta }) => (
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="email"
                                                        >
                                                            Votre Email
                                                        </label>
                                                        <input
                                                            {...input}
                                                            type="email"
                                                            name="email"
                                                            value={values.email}
                                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                            placeholder="Email"
                                                        />{meta.error && meta.touched && <span className="text-green-500 text-sm">{meta.error}</span>}
                                                    </div>
                                                )}
                                            </Field>
                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                    type="submit"
                                                    disabled = {submitting}
                                                >
                                                    Envoyer
                                                </button>
                                                {isloading ? (
                                                    <div className="loading text-center text-green-500 text-xl"><i className="fas fa-spinner animate-spin"></i></div>
                                                ):(
                                                    null
                                                )}
                                                {showError? (
                                                    <p className="loading text-center text-green-500 text-xl"></p>
                                                ): null}
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
                                        href="#"
                                        className="font-bold text-xl"
                                    >
                                        <small>Connexion</small>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-1/2 text-right">
                                <Link href="/auth/register">
                                    <a href="#" className="font-bold text-xl">
                                        <small>Créez un compte gratuit</small>
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

ForgetPassword.layout = Auth;
