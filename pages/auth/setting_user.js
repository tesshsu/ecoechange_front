import React, { useEffect } from "react";
import { Field } from 'react-final-form';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import {fetchUser} from 'service/actions/user';
import useLoggedUser from 'service/hooks/useLoggedUser';
import Router from "next/router";
import {connect} from 'react-redux';
import LoadSaveReinitializeForm from 'helpers/LoadSaveReinitializeForm'
import CardAcceptCondition from "components/Cards/CardAcceptCondition.js";
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import PubContentThreeIcons from "../../layouts/PubContentThreeIcons";
import {isSafari} from 'react-device-detect';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


const Setting_user = ({dispatch, loading, user, hasErrors}) => {
	const [showModal, setShowModal] = React.useState(false);

	let record = {
		phone: user?.phone,
		name: user?.name,
		email: user?.email,
		departement: user?.departement
	}

	const load = async () => {
		await sleep(1500)
		return record
	}

	const save = async values => {
		console.info('Saving', values)
		await sleep(1500)
		record = values
	}

	const postLoadFormat = values => {
		const { name, phone } = values
		return {
			name,
			phone
		}
	}

	const preSaveFormat = (values, originalValues) => {
		return {
			...originalValues,
			name: values.name,
			phone: values.phone
		}
	}
	//submit to patch profil API
	const {
		isAuthentificated,
		loggedUser,
		logout,
		updateLoggedUser
	} = useLoggedUser();

	useEffect(() => {
		if (isAuthentificated && loggedUser) {
			dispatch(fetchUser())
		}
	}, [isAuthentificated, loggedUser]);

	const onSubmit = async (values)=>{
		try {
			let {
				...payload
			} = values;

			const data = { ...payload };
			await updateLoggedUser(data);
		} catch (err) {
			console.log(err.response);
		} finally {
			if(isSafari){
				alert("Votre modification a bien été envoyé")
			}else{
				setShowModal(true)
			}
		}
	}

	async function onSignOut() {
		await logout();
		localStorage.clear();
		Router.push("/auth/login");
	}

	return (
		<>
			<IndexNavbar fixed />
			<main>
				<section className="mt-20 px-10 bg-green-500">

					<div className="container mx-auto h-full">
						{showModal ? (
							<>
								<Modal closeOnEsc={false} open={open} onClose={() => setShowModal(false)}>
									<PubContentThreeIcons/>
									<h2 className="text-2xl font-semibold text-center">Votre modification a bien été envoyé</h2>
								</Modal>
							</>
						) : null}
						<div className="flex content-center items-center justify-center h-full">
							<div className="w-full mt-20 mb-8 lg:w-6/12 px-4">
								<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
									<div className="rounded-t mb-0 px-6 py-6">
										{ isAuthentificated && loggedUser ? (
											<div className="text-center mb-3">
												<h6 className="text-gray-600 text-md font-bold">
													Détails de votre compte
												</h6>
												<p className="text-gray-800 text-sm font-bold">Nom ou identifiant  :  <span className="text-gray-600 text-sm"> {user?.name}</span></p>
												<p className="text-gray-800 text-sm font-bold">Contact mail :  <span className="text-gray-600 text-sm"> {user?.email}</span></p>
												<p className="text-gray-800 text-sm font-bold">Téléphone :  <span className="text-gray-600 text-sm"> {user?.phone}</span> </p>
											</div>
										) : (
											<div className="text-center mb-3">
												<h6 className="text-gray-600 text-md font-bold">
													votre compte n'ai pas encore des informations
												</h6>
											</div>
										)}
										<div className="text-center mb-3">
											<h6 className="text-gray-600 text-md font-bold">
												Modifier votre compte
											</h6>
										</div>
										<hr className="mt-6 border-b-1 border-gray-400" />
									</div>
									<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
										<LoadSaveReinitializeForm
											load={load}
											loading={loading}
											postLoadFormat={postLoadFormat}
											preSaveFormat={preSaveFormat}
											save={save}
											onSubmit={onSubmit}
										>
											{({ handleSubmit, form, submitting, pristine, values }) => (
												<form onSubmit={handleSubmit}>
													<div className="relative w-full mb-3">
														<label
															className="block uppercase text-gray-700 text-xs font-bold mb-2"
															htmlFor="name"
														>
															Nom ou identifiant :
														</label>
														<Field
															className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
															name="name"
															component="input"
															type="text"
															placeholder="name"
															disabled={submitting}
														/>
													</div>
													<div className="relative w-full mb-3">
														<label
															className="block uppercase text-gray-700 text-xs font-bold mb-2"
															htmlFor="phone"
														>
															Téléphone :
														</label>
														<Field
															className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
															name="phone"
															component="input"
															type="text"
															placeholder="Phone"
															disabled={submitting}
														/>
													</div>
													<CardAcceptCondition />
													<div className="text-center mt-6">
														<button
															className="bg-green-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
															type="submit"
															disabled={submitting || pristine}
														>
															Modifier le compte
														</button>
														<button
															className="bg-gray-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
															type="button"
															onClick={form.reset}
															disabled={submitting || pristine}
														>
															Réinitialiser
														</button>
													</div>
												</form>
											)}
										</LoadSaveReinitializeForm>
										<div className="text-center mt-6">
											<button
												className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
												type="submit"
												onClick = {onSignOut}
											>
												Se déconnecter
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

const mapStateToProps = (state) => ({
	loading: state.user.loading,
	user: state.user.user,
	hasErrors: state.user.hasErrors,
})
export default connect(mapStateToProps)(Setting_user)

