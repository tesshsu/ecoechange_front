import React from "react"
import { Form, Field } from 'react-final-form';
import AnnonceLists from "./AnnonceLists";
import {
	useOptions,
	statuVendeurOptions
} from 'helpers/constant'
import {
	categoryFilterOptions
} from "../../helpers/constantCategory"
import {filterIdeas} from 'service/actions/ideas';
import {connect} from "react-redux";
import {useRouter }  from "next/router";
import CardHomeCategorySlider from "../Cards/CardHomeCategorySlider";

const AnnonceSearchForm = ({
							   dispatch,
							   loading,
							   ideas,
							   hasErrors
						   }) => {
	const [issetFilter, setIsSetFilter] = React.useState(false)
	const router = useRouter();

	let initialValues = {
		category: router.query.category ? router.query.category : '',
		sub_category: router.query.sub_category ? router.query.sub_category : '',
		usage: router.query.usage ? router.query.usage : '',
		postal_code: router.query.postal_code ? router.query.postal_code : '',
		owner_type: router.query.owner_type ? router.query.owner_type : '',
		experience_eco: router.query.experience_eco ? router.query.experience_eco : '',
	}


	if (loading) {
		return <p>Chargement des annonces ...</p>;
	}

	if(hasErrors){
		return <p>pas de idees...</p>;
	}

	const onSubmit = async (values) => {
		const per_page_req = router.query.perPage ? router.query.perPage : 18;
		const postal_code = values.postal_code
		const category = router.query.category ? router.query.category : values.category
		const sub_category = router.query.sub_category ? router.query.sub_category : values.sub_category
		const owner_type = router.query.owner_type ? router.query.owner_type :values.owner_type
		const usage = router.query.usage ? router.query.usage : values.usage
		const experience_eco = router.query.experience_eco ? router.query.experience_eco : values.experience_eco

		try {
			dispatch(filterIdeas(router.query.page, per_page_req, postal_code, category, sub_category, owner_type, usage, experience_eco))
			setIsSetFilter(true)
			console.log("category :", category)
			console.log("usage :", usage)
			console.log("owner_type :", owner_type)

		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<CardHomeCategorySlider />
			<section className="annonceSearchForm mt-4">
				<div className="container px-4 mx-auto border-2 rounded py-2 z-40">
					<Form
						initialValues={initialValues}
						onSubmit={onSubmit}
						render={({ handleSubmit, form, submitting, pristine, values }) => (
							<form onSubmit={handleSubmit}>
								<div className="flex flex-wrap mt-4">
									<div className="w-full px-4 flex-1">
										<label
											className="block uppercase text-gray-700 text-sm mb-2"
											htmlFor="fuel"
										>
											code postal de ville ou région
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
											className="block uppercase text-gray-700 text-md text-sm mb-2"
											htmlFor="usage"
										>
											usage
										</label>
										<Field
											name="usage"
											component="select"
											value={values.usage}
											placeholder="usage"
											className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
											{useOptions.map(useOption => (
												<option key={useOption.value} value={useOption.value}>{useOption.label}</option>
											))}
										</Field>
									</div>
									<div className="w-full px-4 flex-1">
										<label
											className="block uppercase text-gray-700 text-md text-sm mb-2"
											htmlFor="owner_type"
										>
											Par
										</label>
										<Field name="owner_type" component="select"  value={values.owner_type} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
											{statuVendeurOptions.map(statuVendeurOption => (
												<option key={statuVendeurOption.value} value={statuVendeurOption.value}>{statuVendeurOption.label}</option>
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
