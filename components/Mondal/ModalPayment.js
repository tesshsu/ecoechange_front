import React from "react";
import {Elements} from "@stripe/react-stripe-js";

import CheckoutForm from "../../components/Cards/CardChekoutForm";
import stripeClient from "../../api/stripeClient";


const ModalPayment = ({ paymentIntent, onSubmit }) => {

	return (
		<Elements stripe={stripeClient}
				  options={{
					  style: {
						  complete: {
							  backgroundColor: "#ed8936"
						  }
					  },
				  }}>
			<CheckoutForm onSubmit={onSubmit} paymentIntent={paymentIntent}/>
		</Elements>
	);
}

export default ModalPayment;
