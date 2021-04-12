import React, {useState} from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import Link from "next/link";

const CheckoutForm = (props) => {
	const stripe = useStripe();
	const elements = useElements();

	const [checkoutError, setCheckoutError] = useState();
	const [checkoutSuccess, setCheckoutSuccess] = useState();

	const CARD_OPTIONS = {
		iconStyle: 'solid',
		style: {
			base: {
				iconColor: '#ed8936',
				color: '#ed8936',
				fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
				fontSize: '16px',
				fontSmoothing: 'antialiased',
				padding: '11px 15px 11px 0',
				':-webkit-autofill': {color: '#a0aec0'},
				'::placeholder': {color: '#a0aec0'},
			},
			invalid: {
				iconColor: '#a0aec0',
				color: '#a0aec0',
			},
		},
	};

	const handleSubmit = async (e, values) => {
		e.preventDefault();

		try {

			// Get a reference to a mounted CardElement. Elements knows how
			// to find your CardElement because there can only ever be one of
			// each type of element.
			const cardElement = elements.getElement(CardElement);
			const {error, token} = await stripe.createToken(
				cardElement
			);

			if (error) {
				setCheckoutError(error.message);
			} else {
				props.onSubmit(token).then(
					function (result) {
						console.log("result=", result);
						if (result?.status === "succeeded") {
							setCheckoutError(null);
							setCheckoutSuccess(true);
						} else {
							setCheckoutSuccess(false);
							setCheckoutError('Le paiement a échoué!');
						}
					},
					function (error) {
						setCheckoutSuccess(false);
						setCheckoutError('Le paiement a échoué!');
					}
				);
			}
		} catch (err) {
			setCheckoutError('Le paiement a échoué!');
		}
	};

	if (checkoutSuccess) return <div className="successPayment">
		<p className="text-orange-500 text-md text-center font-bold">Votre paiement à été traité avec succèsl!
		Vous pouvez modifier et répondes questions premium à tout moment depuis votre annonce : </p>
		<button
			className="bg-orange-500 mt-2 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
			type="button"
		>
			<Link href="/mesAnnonces">
				<a
					href="#pablo"
					className={
						"text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
					}
				>
					Voir Mes Annonces puis modifier votre véhicule sur Top list!!
				</a>
			</Link>
		</button>
	</div> ;

	return (
		<div className="stripPaymentBlock mt-4 text-center my-4 mt-6">
			<form onSubmit={handleSubmit}>

				<CardElement options={CARD_OPTIONS} />

				<button
					className="bg-gray-800 text-white mt-4 active:bg-gray-700 text-xs font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
					type="submit"
					disabled={!stripe}
				>
					Valider votre paiement <i className="far fa-thumbs-up"></i>
				</button>
                <p className="text-gray-700 text-md text-center my-4 "><i className="fas fa-user-lock"></i> Votre payement est 100% sécurisé</p>
				<div className="powerBystripe text-gray-700 text-md text-center border border-solid border-gray-300 rounded max-w-150-px">power by <span className="text-gray-700 text-2xl"><i className="fab fa-stripe"></i></span></div>
				{checkoutError && <span style={{color: "red"}}>{checkoutError}</span>}
			</form>
		</div>
	);
};

export default CheckoutForm;
