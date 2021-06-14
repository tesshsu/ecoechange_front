import React, {useEffect, useState} from 'react'
import Link from "next/link"
import {connect} from 'react-redux'
import { createPopper } from "@popperjs/core"
import ImageUpload from "components/Tabs/ImageUpload.js"
import {Field, Form} from 'react-final-form'
import useLoggedUser from 'service/hooks/useLoggedUser'
import {
	useOptions,
	statuVendeurOptions,
	durationEcos,
	OuiOptions
} from '../../helpers/constant'
import {
	categoryFilterOptions,
	listFilterOptions
} from "../../helpers/constantCategory"
import * as formValidate from 'helpers/formValidate'
import {Condition, Error} from 'helpers/formValidate'
import "react-responsive-modal/styles.css";
import useAnnonces from 'service/hooks/useAnnonces'
import {transformValueToBoolean} from "../../helpers/Utils";

const QuestionsClassic = ({dispatch, loading, error, idea}) => {
	const [openTab, setOpenTab] = React.useState(1)
	const [isFirst, setIsFirst] = React.useState(true)
	const [isClickSubmit, setisClickSubmit] = React.useState(true)
	const [isClickSubmit2, setisClickSubmit2] = React.useState(true)
	const [hasErrors, setHasErrors] = React.useState(true)
	const [editIdea, setEditIdea] = React.useState(false);
	/*open tip*/
	const [popoverShow, setPopoverShow] = React.useState(false);
	const btnRef = React.createRef();
	const popoverRef = React.createRef();
	const openTooltip = () => {
		createPopper(btnRef.current, popoverRef.current, {
			placement: "top"
		});
		setPopoverShow(true);
	};
	const closeTooltip = () => {
		setPopoverShow(false);
	};

	const sendPostQuestionsvalues ={
		id: idea?.id,
		category: idea?.category,
		sub_category: idea?.sub_category,
		title: idea?.title,
		usage: idea?.usage,
		postal_code: idea?.postal_code,
		owner_type: idea?.owner_type,
		experience_eco: idea?.experience_eco,
		content: idea?.content,
		accord_contact: idea?.accord_contact?.toString(),
		shop_address: idea?.shop_address,
		own_website: idea?.own_website,
		product_price: idea?.product_price
	}

	const {
		isAuthentificated,
		loggedUser
	} = useLoggedUser();

	const {
		create,
		modifyIdea
	} = useAnnonces();

	const refreshPage= async () => {
		window.location.reload();
	}

	useEffect(() => {
		if( isAuthentificated && loggedUser && idea ){
			const owner = loggedUser?.loggedUser?.id;
			return setEditIdea(true), setisClickSubmit(true)
		}
	}, [isAuthentificated]);


	const onSubmit = async (values) => {
		try {
			if (idea && editIdea == true ) {
				values.accord_contact = transformValueToBoolean(values.accord_contact);
				await modifyIdea(idea?.id, values);
				if(openTab === 1 ){
					setisClickSubmit(false)
				}else if (openTab === 2 ){
					setisClickSubmit2(false)
				}
			} else {
				values.accord_contact = transformValueToBoolean(values.accord_contact);
				await create(values);
				setIsFirst(false)
			}
		} catch (err) {
			console.log(err);
			setHasErrors(true);
		}
	}


	return (
		<>
			<div className="flex flex-wrap">
				<div className="w-full">
					<ul
						className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
						role="tablist"
					>
						<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
							<a
								className={
									"text-xs font-bold uppercase px-3 py-3 rounded-full block leading-normal " +
									(openTab === 1
										? "text-white bg-green-500"
										: "text-gray-600 bg-gray-200")
								}
								onClick={e => {
									e.preventDefault();
									setOpenTab(1);
								}}
								data-toggle="tab"
								href="#link1"
								role="tablist"
							>
								<i className="fas fa-book text-base mr-1"></i> première étape
							</a>
						</li>
						<li className="mr-2 mt-2 text-center">
							<i className="fas fa-long-arrow-alt-right"></i>
						</li>
						<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
							<a
								className={
									"text-xs font-bold uppercase px-3 py-3 rounded-full block leading-normal " +
									(openTab === 2
										? "text-white bg-green-500"
										: "text-gray-600 bg-gray-200")
								}
								onClick={e => {
									e.preventDefault();
									setOpenTab(2);
								}}
								data-toggle="tab"
								href="#link2"
								role="tablist"
							>
								<i className="fas fa-chevron-circle-right ext-base mr-1"></i>2ème étape
							</a>
						</li>
						<li className="mr-2 mt-2 text-center">
							<i className="fas fa-long-arrow-alt-right"></i>
						</li>
						<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
							<a
								className={
									"text-xs font-bold uppercase px-3 py-3 rounded-full block leading-normal " +
									(openTab === 3
										? "text-white bg-green-500"
										: "text-gray-600 bg-gray-200")
								}
								onClick={e => {
									e.preventDefault();
									setOpenTab(3);
								}}
								data-toggle="tab"
								href="#link3"
								role="tablist"
							>
								<i className="fas fa-seedling text-base mr-1"></i>Final
							</a>
						</li>
					</ul>
					{ editIdea ? (
						<div className="w-full px-4 flex-1 text-center">
							<p className="text-md font-semibold text-center">Vous êtes en train de modifier votre annonce <i
								className="far fa-edit animate-bounce"></i></p>
							<button
								className="bg-gray-600 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								onClick={ refreshPage }
							>
								<i className="fas fa-pen-square"></i> Je veux créé autre annonce

							</button>
						</div>
					) :(
						null
					)}
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg border border-gray-300 border-dashed rounded-lg">
						<div className="formBlock px-4 py-5 flex-auto">
							<Form
								initialValues={sendPostQuestionsvalues}
								onSubmit={onSubmit}
								render={({handleSubmit, form, submitting, values, invalid}) => (
									<form onSubmit={handleSubmit}>
										<div className="tab-content tab-space">
											<div className={openTab === 1 ? "block" : "hidden"} id="link1">
												<h4 className="text-white bg-gray-800 text-center text-lg my-4 mb-6 font-bold rounded">Parlez nous de votre idée  partager </h4>
												<div className="flex flex-wrap">
													<div className="innerList w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-800 text-md font-bold mb-2"
															htmlFor="category"
														>
															{editIdea ? "Catégorie" : "*Catégorie"}
														</label>
														<Field
															name="category"
															component="select"
															value={values.category}
															validate={formValidate.required}
															className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
															{
																categoryFilterOptions.map( (categoryFilterOption) =>(
																	<option key={categoryFilterOption.code} value={categoryFilterOption.code} >{categoryFilterOption.name}</option>
																))
															}
														</Field>
														<Error name="category"/>
													</div>

													<div className="innerList w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-800 text-md font-bold mb-2"
															htmlFor="sub_category"
														>
															{editIdea ? "Sous catégorie " : "*Sous catégorie "}
														</label>
														<Field
															name="sub_category"
															component="select"
															value={values.sub_category}
															validate={formValidate.required}
															className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
															{ !values?.category &&  <option>*--Tout les idées--*</option>}
															{
																values?.category && listFilterOptions[values?.category]?.map( (item) =>(
																	<option key={item} value={item}>{item}</option>
																))
															}
														</Field>
														<p className="text-sm font-bold text-green-500">Champs obligatoires pour afficher les étiquettes de filtre</p>
														<Error name="sub_category"/>
													</div>
												</div>

												<div className="flex flex-wrap mt-2 px-4">
													<label
														className="block uppercase text-gray-700 text-md font-bold mb-2"
														htmlFor="postal_code"
													>
														{editIdea ? "Titre " : "*Titre "}
													</label>
													<span className="text-gray-700 text-sm ml-2"> <i
														className="fas fa-info-circle animate-bounce"></i> Jusqu'à 150 caractères</span>
													<Field
														name="title"
														validate={formValidate.composeValidators(formValidate.required, formValidate.matchTitle)}
														component="input"
														type="text"
														value={values.title}
														placeholder="Titre de votre idée"
														className="px-3 py-2 placeholder-gray-400 text-gray-800 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
													/>
													<Error name="title"/>
												</div>

												<div className="flex flex-wrap mt-4 px-4">
													<label
														className="block uppercase text-gray-700 text-md font-bold mb-2"
														htmlFor="content"
													>
														{editIdea ? "*les détails de votre idée" : "*les détails de votre idée"}
													</label>
													<button
														className="ml-2 text-gray-700 active:bg-gray-800 uppercase text-sm px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
														onMouseEnter={openTooltip}
														onMouseLeave={closeTooltip}
														ref={btnRef}
													>
														<i className="fas fa-question-circle"></i> SI C'EST UNE RECETTE, MERCI DE SUIVRE CETTE TRAME
													</button>
													<div
														className={
															(popoverShow ? "" : "hidden ") +
															"bg-white border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
														}
														ref={popoverRef}
													>
														<div>
															<div
																className="text-gray-800 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg"
															>
																Example pour le recette
															</div>
															<div className="text-gray-800 p-3">
																<ul className="list-unstyled">
																	<li>
																		1. Liste des ingrédients
																	</li>
																	<li>
																		2. Ustensiles/Matériel nécessaire
																	</li>
																	<li>
																		3. Temps de Préparation
																	</li>
																	<li>
																		4. tapes de Préparation
																	</li>
																</ul>
															</div>
															<div
																className="bg-white text-gray-800 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg"
															>
																Exemple pour une annonce dune boutique, dun produit/service
															</div>
															<div className="text-gray-800 p-3">
																<ul className="list-unstyled">
																	<li>
																		1. Votre produit
																	</li>
																	<li>
																		2. Avis sur le produit
																	</li>
																	<li>
																		3. Si vous avez un site Web, veuillez indiquer le lien
																	</li>
																</ul>
															</div>
														</div>
													</div>
													<Field
														name="content"
														validate={formValidate.required}
														component="textarea"
														type="text"
														rows={8}
														value={values.content}
														placeholder="Par exemple: la liste des ingrédients, le temps de préparation, les produits utilisés etc..."
														className="ideaTextarea px-2 placeholder-gray-400 text-gray-800 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
													/>
													<Error name="content"/>
												</div>

												<div className="flex flex-wrap mt-4">
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-800 text-md font-bold mb-2"
															htmlFor="usage"
														>
															{ editIdea ? "OBJECTIF" : "*OBJECTIF"}
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="usage"
																   validate={formValidate.required}
																   component="select"
																   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
															>
																{useOptions.map(useOption => (
																	<option value={useOption.value}>{useOption.label}</option>
																))}
															</Field>
															<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-green-500">
																<i className="fas fa-chevron-circle-down text-2xl my-2"></i>
															</div>
															<Error name="usage" />
															<Condition when="usage" is="sell"
																	   className="mt-2">
																<label
																	className="block uppercase text-gray-800 text-md font-bold mb-2 mt-2"
																	htmlFor="product_price"
																>
																	Le prix de vendre / service ( Champ facultative )
																</label>
																<Field
																	name="product_price"
																	component="input"
																	type="text"
																	value={values.product_price}
																	placeholder="25"
																	className="px-3 py-2 placeholder-gray-400 text-gray-800 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
																/>
																<p className="text-md leading-relaxed text-gray-500">
																	Veuillez indiquer le prix unitaire du produit ou le prix horaire du service, par exmaple 2verre, 20heure etc, ou si vous n'avez pas de prix fixe, laissez ce champ vide
																</p>
																<Error name="product_price" />
															</Condition>
														</div>
													</div>
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-800 text-md font-bold mb-2"
															htmlFor="postal_code"
														>
															{editIdea ? "code postal" : "*code postal"}
														</label>
														<Field
															name="postal_code"
															validate={formValidate.composeValidators(formValidate.required, formValidate.matchCodepostal)}
															component="input"
															type="text"
															value={values.postal_code}
															placeholder="06130"
															className="px-3 py-2 placeholder-gray-400 text-gray-800 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
														/>
														<Error name="postal_code"/>
													</div>
												</div>

												<div className="flex flex-wrap mt-12 px-4 align-center justify-center">
													{editIdea ? (
														<div className="finalBlock text-center">
															{invalid && hasErrors ? (
																<div className="sendQuestions text-center">
																	<button
																		className="bg-gray-600 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																		type="submit"
																		disabled={invalid}
																	>
																		<i className="fas fa-exclamation-circle text-base mr-1 animate-bounce"></i> Répondre  toutes les questions afin de valider

																	</button>
																	<p className="text-md leading-relaxed text-gray-500">
																		Veuillez vérifier les champs avec * afin de compléter le questionnaire
																	</p>
																</div>
															):(
																<div className="sendQuestions text-center">
																	{isClickSubmit ? (
																		<button
																			className="bg-green-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																			type="submit"
																			disabled={submitting}
																		>
																			<i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> ENVOYER
																		</button>
																	):(
																		<a
																			className="text-kl bg-green-500 text-white font-bold uppercase px-4 py-5 shadow-lg rounded-full block leading-normal "
																			onClick={e => {
																				e.preventDefault();
																				setOpenTab(2);
																			}}
																			data-toggle="tab"
																			href="#link2"
																			role="tablist"
																		>
																			<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i> SUITE..
																		</a>
																	)}
																</div>
															)}
														</div>
													):(
														<a
															className="text-kl bg-green-500 text-white font-bold uppercase px-4 py-5 shadow-lg rounded-full block leading-normal "
															onClick={e => {
																e.preventDefault();
																setOpenTab(2);
															}}
															data-toggle="tab"
															href="#link2"
															role="tablist"
														>
															<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i> SUITE..
														</a>
													)}
												</div>
											</div>
											<div className={openTab === 2 ? "block" : "hidden"} id="link2">
												<h4 className="text-white bg-gray-800 text-center text-lg my-4 mb-6 rounded font-bold"> La connaissancede soi est intimement liée  la qualité de votre idée</h4>
												<div className="flex flex-wrap">
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-800 text-md font-bold mb-2"
															htmlFor="owner_type"
														>
															{editIdea ? "Vous êtes :" : "*Vous êtes :"}
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="owner_type" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																{statuVendeurOptions.map(statuVendeurOption => (
																	<option value={statuVendeurOption.value}>{statuVendeurOption.label}</option>
																))}
															</Field>
															<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-green-500">
																<i className="fas fa-chevron-circle-down text-2xl my-2"></i>
															</div>
															<Error name="owner_type"/>
															<Condition when="owner_type" is="pro"
																	   className="mt-2">
																<label
																	className="block uppercase text-gray-800 text-md font-bold mb-2 mt-2"
																	htmlFor="shop_address"
																>
																	Votre adress de boutique
																</label>
																<Field
																	name="shop_address"
																	component="input"
																	type="text"
																	value={values.shop_address}
																	placeholder="4 run menu 44000 Nantes"
																	className="px-3 py-2 placeholder-gray-400 text-gray-800 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
																/>
																<Error name="shop_address"/>
																<label
																	className="block uppercase text-gray-800 text-md font-bold mb-2 mt-2"
																	htmlFor="own_website"
																>
																	Lien vers votre boutique (si vous en avez un)
																</label>
																<Field
																	name="own_website"
																	//validate={formValidate.matchURL}
																	component="input"
																	type="text"
																	value={values.own_website}
																	placeholder="https://myboutique.fr"
																	className="px-3 py-2 placeholder-gray-400 text-gray-800 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
																/>
																<Error name="own_website"/>
															</Condition>
															<Condition when="owner_type" is="blogger"
																	   className="mt-2">
																<label
																	className="block uppercase text-gray-800 text-md font-bold mb-2 mt-2"
																	htmlFor="own_website"
																>
																	Lien vers votre blog
																</label>
																<Field
																	name="own_website"
																	//validate={formValidate.matchURL}
																	component="input"
																	type="text"
																	value={values.own_website}
																	placeholder="https://myblogger.fr"
																	className="px-3 py-2 placeholder-gray-400 text-gray-800 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
																/>
																<Error name="own_website"/>
															</Condition>
															<Condition when="owner_type" is="youtuber"
																	   className="mt-2">
																<label
																	className="block uppercase text-white text-md font-bold mb-2 mt-2"
																	htmlFor="own_website"
																>
																	Votre line de  Youtube ( line via Youtube )
																</label>
																<Field
																	name="own_website"
																	component="input"
																	type="text"
																	value={values.own_website}
																	placeholder="https://youtu.be/9_FfJa7dah0"
																	className="px-3 py-2 placeholder-gray-400 text-gray-800 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
																/>
																<img
																	alt="tip youtube"
																	src={require("assets/img/tipYoutube.png")}
																	className="max-w-150-px align-left mt-2"
																/>
																<span className="text-white text-sm font-bold">Cela affichera votre vidéo youtube directement sur la page de l'idée</span>
																<Error name="own_website"/>
															</Condition>
															<Condition when="owner_type" is="Instagram"
																	   className="mt-2">
																<label
																	className="block uppercase text-gray-800 text-md font-bold mb-2 mt-2"
																	htmlFor="own_website"
																>
																	Lien vers votre page Facebook
																</label>
																<Field
																	name="own_website"
																	//validate={formValidate.matchURL}
																	component="input"
																	type="text"
																	value={values.own_website}
																	placeholder="https://www.instagram.com/ecoechange/"
																	className="px-3 py-2 placeholder-gray-400 text-gray-800 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
																/>
																<Error name="own_website"/>
															</Condition>
															<Condition when="owner_type" is="fb"
																	   className="mt-2">
																<label
																	className="block uppercase text-gray-800 text-md font-bold mb-2 mt-2"
																	htmlFor="own_website"
																>
																	Lien vers votre page Instagram
																</label>
																<Field
																	name="own_website"
																	//validate={formValidate.matchURL}
																	component="input"
																	type="text"
																	value={values.own_website}
																	placeholder="https://www.facebook.com/monlienpage"
																	className="px-3 py-2 placeholder-gray-400 text-gray-800 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
																/>
																<Error name="own_website"/>
															</Condition>
														</div>
													</div>

													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-800 text-md font-bold mb-2"
															htmlFor="experience_eco"
														>
															{editIdea ? "Pour vous le respect de l’environnement est :" : "Pour vous le respect de l’environnement est :"}
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="experience_eco" validate={formValidate.required}
																   component="select"
																   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																{durationEcos.map(durationEco => (
																	<option value={durationEco.value}>{durationEco.label}</option>
																))}
															</Field>
															<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-green-500">
																<i className="fas fa-chevron-circle-down text-2xl my-2"></i>
															</div>
															<Error name="experience_eco"/>
														</div>
													</div>
												</div>

												<div className="flex flex-wrap mt-4 px-4">
													<label
														className="block uppercase text-gray-800 text-md font-bold mb-2"
														htmlFor="accord_contact"
													>
														{editIdea ? "SOUHAITEZ-VOUS AFFICHER VOS INFORMATIONS DE CONTACT :" : "*SOUHAITEZ-VOUS AFFICHER VOS INFORMATIONS DE CONTACT :"}
													</label>
													<p className="text-md leading-relaxed text-gray-500 ml-3"> ( Votre
														email ou telephone ) </p>
													<div className="relative flex w-full flex-wrap items-stretch mb-3">
														<Field name="accord_contact" validate={formValidate.required}
															   component="select"
															   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
															{OuiOptions.map(OuiOption => (
																<option value={OuiOption.value}>{OuiOption.label}</option>
															))}
														</Field>
														<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-green-500">
															<i className="fas fa-chevron-circle-down text-2xl my-2"></i>
														</div>
														<Error name="accord_contact"/>
													</div>
												</div>

												<div className="flex flex-wrap mt-12 px-4 align-center justify-center">
													{isFirst ? (
														<div className="finalBlock text-center">
															{invalid && hasErrors ? (
																<div className="sendQuestions text-center">
																	<button
																		className="bg-gray-600 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																		type="submit"
																		disabled={invalid}
																	>
																		Veuillez répondre  toutes les questions
																	</button>
																	<p className="text-md leading-relaxed text-gray-500">
																		Veuillez vérifier les champs avec * afin de compléter le questionnaire
																	</p>
																</div>
															) : (
																<div className="sendQuestions text-center">
																	{isClickSubmit2 ? (
																		<button
																			className="bg-green-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-2 my-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																			type="submit"
																			disabled={submitting}
																		>
																			ENVOYER <i className="fas fa-seedling text-2xl my-2 animate-ping-small"></i>
																		</button>
																	) :(
																		<div className="container text-center">
																			<p className="text-md leading-relaxed text-gray-500">
																				Bravo !
																				Vous avez modifier toutes !!
																			</p>
																			<label
																				className="block uppercase text-gray-800 text-md mb-2"
																				htmlFor="suivePremium"
																			>
																				Souhaitiez vous continuer modifier les photos ?
																			</label>
																			<div
																				className="relative flex w-full flex-wrap items-stretch mb-3">
																				<Field name="suivePhotos"
																					   component="select"
																					   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																					<option
																						value=""> </option>
																					<option
																						value="Oui">Oui</option>
																					<option
																						value="Non">Non</option>
																				</Field>
																				<div
																					className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-green-500">
																					<i className="fas fa-chevron-circle-down text-2xl my-2"></i>
																				</div>
																				<Condition when="suivePhotos" is="Oui">
																					<div className="container mx-auto text-center">
																						<a
																							className="text-kl mt-4 bg-green-500 text-white uppercase px-2 py-4 shadow-lg rounded-full block"
																							onClick={e => {
																								e.preventDefault();
																								setOpenTab(3);
																							}}
																							data-toggle="tab"
																							href="#link3"
																							role="tablist"
																						>
																							Modifier les photos <i className="far fa-images text-base mr-1 animate-bounce"></i>
																						</a>
																					</div>
																				</Condition>
																				<Condition when="suivePhotos" is="Non">
																					<div className="container mx-auto text-center">
																						<Link href={idea?.id ? (`/annonce?id=${idea?.id}`) : ("#")} {...idea}>
																							<button
																								className="bg-green-500 text-white active:bg-grey-500 text-sm uppercase px-12 py-4 my-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																								type="submit"
																								disabled={submitting}
																							>
																								Envoyer et Voir
																							</button>
																						</Link>
																					</div>
																				</Condition>
																			</div>
																		</div>
																	)}
																</div>
															)}
														</div>
													) :(
														<a
															className="text-kl bg-green-500 text-white font-bold uppercase px-4 py-5 shadow-lg rounded block leading-normal "
															onClick={e => {
																e.preventDefault();
																setOpenTab(3);
															}}
															data-toggle="tab"
															href="#link3"
															role="tablist"
														>
															<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i> Final
															étape
														</a>
													)}

												</div>
											</div>

											<div className={openTab === 3 ? "block" : "hidden"} id="link3">
												<div className="container mx-auto text-center">
													<div
														className="text-3xl block my-2 p-3 text-gray-600 font-bold">
														Ajoutez des photos
													</div>
													<p className="text-lg leading-relaxed text-gray-500"> Telecharger des
														photos pour publier votre idée / produit vert ( ficher jpg, png, gif ),
													</p>
													{editIdea && idea?.premium == true ? (
														<p className="text-lg leading-relaxed text-green-500"> Ajoute jusqu' 10 photos</p>
													):(
														<p className="text-lg leading-relaxed text-green-500"> Ajoute jusqu' 5 photos</p>
													)}
													<div className="demoPhotos flex justify-center">
														<div className="mr-4 p-3">
															<img
																alt="..."
																src={require("assets/img/img-example-imma.jpg")}
																className="h-auto img-responsive p-3 align-middle border-none outline-none max-w-400-px"
															/>
														</div>
													</div>
													<ImageUpload/>
													<p className="text-md leading-relaxed text-gray-500">
														OU ACCEPTEZ
														les conditions pour publier votre idée / produit vert
														<Link href="/footer/policy">
															<a
																href="#"
																className={
																	"text-sm font-normal block w-full whitespace-no-wrap bg-transparent text-green-500"
																}
															>
																Lire la politique de confidentialité
															</a>
														</Link>
													</p>

												</div>
											</div>
										</div>
									</form>
								)}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	idea: state.ideasReducer.selectedIdea,
	hasErrors: state.ideasReducer.hasErrors,
})
export default connect(mapStateToProps)(QuestionsClassic)
