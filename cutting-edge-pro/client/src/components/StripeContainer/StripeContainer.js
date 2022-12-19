import React from "react";
import { Elements } from "@stripe/react-js"
import { loadstripe } from "@stripe/stripe-js"
import PaymentForm from "../PaymentForm/PaymentForm";

const PUBLIC_KEY = "pk_test_51MGYF2HlQuOs8fWSfOlCzNnep41sw5kaihYNTAoFY13Ohe2W6gZ35vmdZ3AMmOF4fWBhBHjtDxTRxr8Hd1PCvPP000e4BfKvyR"

const stripeTestPromise = loadstripe(PUBLIC_KEY)

export default function StripeContainer(){
    return (
        <Elements strip={stripeTestPromise}>
            <PaymentForm /> 
        </Elements>
    )
}
