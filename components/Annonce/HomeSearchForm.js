import React from "react"
import { Form, Field } from 'react-final-form';
import AnnonceLists from "./AnnonceLists";
import {
	categoryFilterOptions
} from "../../helpers/constantCategory"
import {filterIdeas} from 'service/actions/ideas';
import {connect} from "react-redux";
import {useRouter }  from "next/router";


const HomeSearchForm = ({
							   dispatch,
							   loading,
							   ideas,
							   hasErrors
						   }) => {
	const [issetFilter, setIsSetFilter] = React.useState(false)
	const router = useRouter();

	let initialValues = {
		category: '',
		postal_code: '',
	}

	if (loading) {
		return <p>Chargement des annonces ...</p>;
	}

	if(hasErrors){
		return <p>pas de idees...</p>;
	}

	const onSubmit = async (values) => {
		const per_page_req = router.query.perPage ? router.query.perPage : 6;
		const title = values.title
		const postal_code = values.postal_code
		const category = values.category
		const owner_type = values.owner_type
		const usage = values.usage
		const experience_eco = values.experience_eco
		const note = values.note

		try {
			dispatch(filterIdeas(router.query.page, per_page_req, title, postal_code, category, owner_type, usage, experience_eco, note))
			setIsSetFilter(true)
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<>
			<section className="annonceSearchForm">
				<div className="container px-4 mx-auto py-2 z-40">
					<Form
						initialValues={initialValues}
						onSubmit={onSubmit}
						render={({ handleSubmit, form, submitting, pristine, values }) => (
							<form onSubmit={handleSubmit}>
								<div className="flex flex-wrap">
									<div className="w-full px-4 flex-1">
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
												<Field name="category"
													   component="select"
													   value={values?.category}
													   className="block appearance-none w-full bg-white px-3 py-2 border-green-500 border rounded shadow leading-tight focus:outline-none focus:shadow-outline">
													{
														categoryFilterOptions.map( (categoryFilterOption) =>(
															<option key={categoryFilterOption.code} value={categoryFilterOption.code} >{categoryFilterOption.name}</option>
														))
													}
												</Field>
										</div>
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
			<div className="container flex flex-wrap px-4 mx-auto">
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

export default connect(mapStateToProps)(HomeSearchForm)
