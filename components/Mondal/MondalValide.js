import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Link from "next/link";
import {Field, Form} from 'react-final-form'
import CardAcceptCondition from "components/Cards/CardAcceptCondition.js";
import useLoggedUser from 'service/hooks/useLoggedUser';
import useVotes from "../../service/hooks/useVotes";
import useAnnonces from "../../service/hooks/useAnnonces";
import Router, {useRouter} from "next/router";

import {
    voteFilterOptions
} from '../../helpers/constant'

const ModalValide = ({ dispatch,
                         loading,
                         idea,
                         votes}) => {
    const {
        isAuthentificated,
        loggedUser
    } = useLoggedUser();

    const router = useRouter();

    const owner = loggedUser?.loggedUser?.id;

    const [hasErrors, setHasErrors] = React.useState(true);

    const {
        create
    }= useVotes();

    const [cookie, setCookie] = React.useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('ACCESS_TOKEN');
            if(token){
                setCookie(true)
            }
        }
    }, [dispatch]);

    const sendPostVotevalues ={
        category: "idea",
        sub_categories: votes?.sub_categories,
        entity_id: idea?.id
    }
    const {
        modifyIdea
    } = useAnnonces();

    const [isFirst, setIsFirst] = React.useState(true)

    const onSubmit = async (values) => {
        try {
            const payload = {
                category: "idea",
                sub_categories: [ values?.sub_categories ],
                entity_id: idea?.id
            }

            await create(payload);
            setIsFirst(false)
        }catch (error) {
            console.log(error.message);
            setHasErrors(true);
        }
    }
    return (
        <>
            <p className="mt-2 text-gray-600 text-sm">Vous pouvez participer à la confirmation de la note écologique de cette annonce !</p>
            <div
                className="justify-center items-center flex border border-solid border-gray-300 overflow-x-hidden overflow-y-auto inset-0 z-10 outline-none focus:outline-none"
            >
                <div className="relative w-full">
                    <div className="w-full">
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div className="container px-4">
                                <div className="flex flex-wrap">
                                    <div className="w-full flex-1">
                                        <p className="text-md block text-green-500 font-bold">LA COMMUNAUTÉ VALIDE </p>
                                        <p className="text-xs block text-green-500">Participez en donnant votre opinion sur cette annonce</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container px-4">
                                <div className="flex flex-wrap">
                                    <Form
                                        initialValues={sendPostVotevalues}
                                        onSubmit={onSubmit}
                                        render={({handleSubmit, form, submitting, values, invalid}) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="flex flex-wrap">
                                                    <label
                                                        className="block uppercase text-gray-600 text-sm font-bold mb-2"
                                                        htmlFor="sub_categories"
                                                    >
                                                        QUELLE A ETE VOTRE EXPERIENCE AVEC LE PRODUIT/SERVICE DE CETTE ANNONCE
                                                    </label>
                                                    <Field
                                                        name="sub_categories"
                                                        component="select"
                                                        value={values.sub_categories}
                                                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                        {
                                                            voteFilterOptions.map( (voteFilterOption) =>(
                                                                <option key={voteFilterOption.label} value={voteFilterOption.value} >{voteFilterOption.label}</option>
                                                            ))
                                                        }
                                                    </Field>
                                                    <p className="text-sm text-gray-400">Il n'est possible de voter qu'une seule fois par annonce</p>
                                                </div>
                                                    <div className="">
                                                        {isFirst ? (
                                                            <div className="">
                                                                { isAuthentificated && cookie ? (
                                                                    <button
                                                                        className="bg-green-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-2 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                        type="submit"
                                                                        disabled={submitting}
                                                                    >
                                                                        <i className="fas fa-seedling text-base mr-1 animate-bounce"></i>  Votez
                                                                    </button>
                                                                ):(
                                                                    <Link href="/auth/login">
                                                                        <a
                                                                            href="#"
                                                                            className={
                                                                                "text-xl py-1 px-2 font-normal block w-full whitespace-no-wrap bg-transparent underline"
                                                                            }
                                                                        >
                                                                            <i className="text-gray-800 fas fa-user-circle" />Se connecter pour voter
                                                                        </a>
                                                                    </Link>
                                                                )}
                                                            </div>
                                                        ):(
                                                            <button
                                                                className="bg-green-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-2 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                type="button"
                                                                disabled={true}
                                                            >
                                                                <i className="far fa-smile-wink"></i>  Merci de participer
                                                            </button>
                                                        )}
                                                    </div>
                                            </form>
                                        )}
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">L’annonceur obtient un badge de certification à partir de 5 confirmations</p>
                            {isAuthentificated && cookie && (
                                <CardAcceptCondition />
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

const mapStateToProps = (state) => ({
    loading: state.votesReducer.loading,
    idea: state.ideasReducer.selectedIdea,
    hasErrors: state.votesReducer.hasErrors,
    votes: state.votesReducer.votes
})

export default connect(mapStateToProps)(ModalValide)
