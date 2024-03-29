import React from "react"
import { Form, Field } from 'react-final-form';
import AnnonceLists from "./AnnonceLists";
import {
	useOptions,
	statuVendeurOptions
} from 'helpers/constant'
import {filterIdeas} from 'service/actions/ideas';
import {connect} from "react-redux";
import {useRouter }  from "next/router";
import CardHomeCategorySlider from "../Cards/CardHomeCategorySlider";
import {noteFilterOptions} from "helpers/constant";

const AnnonceSearchForm = ({
							   dispatch,
							   loading,
							   ideas,
							   hasErrors
						   }) => {
	const [issetFilter, setIsSetFilter] = React.useState(false)
	const router = useRouter();

	let sendValues = {
		title: router.query.title ? router.query.title : '',
		postal_code: router.query.postal_code ? router.query.postal_code : '',
		category: router.query.category ? router.query.category : '',
		//sub_category: router.query.sub_category ? router.query.sub_category : '',
		owner_type: router.query.owner_type ? router.query.owner_type : '',
		usage: router.query.usage ? router.query.usage : '',
		experience_eco: router.query.experience_eco ? router.query.experience_eco : '',
		note: router.query.note ? router.query.note : '',
	}


	if (loading) {
		return <p>Chargement des annonces ...</p>;
	}

	if(hasErrors){
		return <p>pas de idees...</p>;
	}

	const onSubmit = async (values) => {
		const per_page_req = router.query.perPage ? router.query.perPage : 24;
		const title = values.title
		const postal_code = values.postal_code
		const category = router.query.category ? router.query.category : values.category
		const owner_type = router.query.owner_type ? router.query.owner_type :values.owner_type
		const usage = router.query.usage ? router.query.usage : values.usage
		const experience_eco = router.query.experience_eco ? router.query.experience_eco : values.experience_eco
		const note = router.query.note ? router.query.usage : values.note

		try {
			dispatch(filterIdeas(router.query.page, per_page_req, title, postal_code, category, owner_type, usage, experience_eco, note))
			setIsSetFilter(true)
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<>
			<CardHomeCategorySlider />
			<section className="annonceSearchForm mt-4">
				<div className="container px-4 mx-auto border-2 rounded py-2 z-40">
					<Form
						initialValues={sendValues}
						onSubmit={onSubmit}
						render={({ handleSubmit, form, submitting, values }) => (
							<form onSubmit={handleSubmit}>
								<div className="flex flex-wrap mt-4">
									<div className="w-full px-4 flex-1">
										<label
											className="block uppercase text-green-500 font-semibold text-md text-sm mb-2"
											htmlFor="fuel"
										>
											Mots clés <i className="fas fa-tag animate-bounce"></i>
										</label>
										<Field name="title">
											{({ input, meta }) => (
												<div className="relative w-full mb-3">
													<input
														{...input}
														type="text"
														value={values.title}
														name="title"
														placeholder="nom de boutique, service ou idée"
														className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
													/>
												</div>
											)}
										</Field>
									</div>
									<div className="w-full px-4 flex-1">
										<label
											className="block uppercase text-green-500 font-semibold text-md text-sm mb-2"
											htmlFor="fuel"
										>
											code postal de ville ou région <i className="fas fa-map-marker-alt animate-bounce"></i>
										</label>
										<Field name="postal_code">
											{({ input, meta }) => (
												<div className="relative w-full mb-3">
													<input
														{...input}
														type="text"
														value={values.postal_code}
														name="postal_code"
														placeholder="44000"
														className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
													/>
												</div>
											)}
										</Field>
									</div>
									<div className="w-full px-4 flex-1">
										<label
											className="block uppercase text-green-500 font-semibold text-md text-sm mb-2"
											htmlFor="usage"
										>
											usage <i className="fas fa-bullhorn animate-bounce"></i>
										</label>
										<Field
											name="usage"
											component="select"
											placeholder="usage"
											className="block appearance-none w-full bg-white border border-green-500 hover:border-green-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
											{useOptions.map(useOption => (
												<option key={useOption.value} value={useOption.value}>{useOption.label}</option>
											))}
										</Field>
									</div>
									<div className="w-full px-4 flex-1">
										<label
											className="block uppercase text-green-500 font-semibold text-md text-sm mb-2"
											htmlFor="owner_type"
										>
											Par <i className="fas fa-mortar-pestle animate-bounce"></i>
										</label>
										<Field name="owner_type"
											   component="select"
											   className="block appearance-none w-full bg-white border border-green-500 hover:border-green-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
											{statuVendeurOptions.map(statuVendeurOption => (
												<option key={statuVendeurOption.value} value={statuVendeurOption.value}>{statuVendeurOption.label}</option>
											))}
										</Field>
									</div>
								</div>
								<div className="flex flex-wrap p-3">
									<div className="w-full flex-1">
										<label
											className="block uppercase text-green-500 font-semibold text-md text-md mb-2"
											htmlFor="note"
										>
											Note ecologique <i className="fas fa-leaf animate-bounce"></i>
										</label>
										<Field
											name="note"
											component="select"
											placeholder="note"
											className="block appearance-none w-full bg-white border border-green-500 hover:border-green-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
											{noteFilterOptions.map(noteFilterOption => (
												<option key={noteFilterOption.value} value={noteFilterOption.value}>
													{noteFilterOption.label}
												</option>
											))}
										</Field>
									</div>
								</div>
								<div className="w-full px-4 flex-1 text-center mt-2">
									<button
										className="bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
										type="submit"
										disabled={submitting}
									>
										Recherche
									</button>
								</div>
							</form>
						)}
					/>
				</div>
			</section>
			<div className="flex flex-wrap">
				<AnnonceLists transparent />
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	ideas: state.ideasReducer.ideas,
	current_page: state.ideasReducer.current_page,
	from: state.ideasReducer.from,
	to: state.ideasReducer.to,
	per_page: state.ideasReducer.per_page,
	last_page: state.ideasReducer.last_page,
	total: state.ideasReducer.total,
	hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(AnnonceSearchForm)
