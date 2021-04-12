import React from "react";
import Link from "next/link";
import {Field, Form} from 'react-final-form';
import * as formValidate from '../../helpers/formValidate';
import useLoggedUser from '../../service/hooks/useLoggedUser';
import PubContentThreeIcons from "../../layouts/PubContentThreeIcons";
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {connect} from "react-redux";
import Router, {useRouter} from "next/router";
import Auth from "../../layouts/Auth";

const ChangePassword = ({
							dispatch
						}) => {
	const router = useRouter();
	const [showError, setShowError] = React.useState(false);
	const {
		modifyPassword
	} = useLoggedUser();


	const onSubmit = async (values) => {
		await formValidate.sleep(300)
		try {
			let payload = {
				...values,
				"email": router.query.email,
				"token": router.query.token
			}

			await modifyPassword(payload);
			await Router.push('/auth/login');
		} catch (err) {
			alert("Identifiants incorrects!");
		}
	}


	return (
		<>
			<div className="container mx-auto px-4 mt-16 h-full">
				{showError ? (
					<>
						<Modal closeOnEsc={false} open={open} onClose={() => setShowError(false)}>
							<PubContentThreeIcons/>
							<h2 className="text-xl font-semibold text-center">Échec de modification de votre mot passe,
								veuillez nous contacter</h2>
							<div className="mt-4 text-center">
								<button
									className="bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
									type="button"
								>
									<Link href="/footer/contact">
										<a
											href="#pablo"
											className={
												"text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
											}
										>
											Nous contacter
										</a>
									</Link>
								</button>
							</div>
						</Modal>
					</>
				) : null}
				<div className="flex content-center items-center justify-center h-full">
					<div className="w-full lg:w-4/12 px-4">
						<div
							className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
							<div className="rounded-t mb-0 px-6 py-6">
								<hr className="mt-6 border-b-1 border-gray-400"/>
							</div>
							<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
								<div className="text-gray-500 text-center mb-3 font-bold">
									<small>Modifier votre mot de passe</small>
								</div>
								<Form
									initialValues={{
										password: '',
										password_confirmation: ''
									}}
									validate={values => {
										const errors = {}
										if (values.password_confirmation !== values.password) {
											errors.password_confirmation = 'Les mots de passe doivent être identiques'
										}
										return errors
									}}
									onSubmit={onSubmit}
									render={({
												 submitError,
												 handleSubmit,
												 form,
												 submitting,
												 pristine,
												 values,
												 invalid
											 }) => (
										<form onSubmit={handleSubmit}>
											<Field name="password" validate={formValidate.required}>
												{({input, meta}) => (
													<div className="relative w-full mb-3">
														<label
															className="block uppercase text-gray-700 text-xs font-bold mb-2"
															htmlFor="password"
														>
															Votre nouveaux mot de passe
														</label>
														<input
															{...input}
															type="password"
															className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
															name="password"
															value={values.password}
															placeholder="Mot de passe"
														/>{meta.error && meta.touched &&
													<span className="text-green-500 text-sm">{meta.error}</span>}
													</div>
												)}
											</Field>
											<Field name="password_confirmation" validate={formValidate.required}>
												{({input, meta}) => (
													<div className="relative w-full mb-3">
														<label
															className="block uppercase text-gray-700 text-xs font-bold mb-2"
															htmlFor="password_confirmation"
														>
															Confirmation mot de passe
														</label>
														<input
															{...input}
															type="password"
															name="password_confirmation"
															value={values.password_confirmation}
															className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
															placeholder="Confirmez votre mot de passe"
														/>{meta.error && meta.touched &&
													<span className="text-green-500 text-sm">{meta.error}</span>}
													</div>
												)}
											</Field>
											<div className="text-center mt-6">
												<button
													className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
													type="submit"
													disabled={submitting}
												>
													Envoyer
												</button>
											</div>
										</form>
									)}
								/>
							</div>
						</div>
						<div className="flex flex-wrap mt-6 relative">
							<div className="w-1/2">
								<Link href="/auth/login">
									<a
										href="#"
										className="text-gray-300"
									>
										<small>Connexion</small>
									</a>
								</Link>
							</div>
							<div className="w-1/2 text-right">
								<Link href="/auth/register">
									<a href="#" className="text-gray-300">
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

ChangePassword.layout = Auth;

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(ChangePassword);

