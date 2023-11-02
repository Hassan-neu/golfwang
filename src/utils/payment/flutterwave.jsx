import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
export const usePayWithFlutter = () => {
    const config = {
        public_key: "FLWPUBK_TEST-fd4ee92411d56d253cbfc7312e1bebce-X",
        tx_ref: Date.now(),
        amount: 100,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
            email: "user@gmail.com",
            phone_number: "070********",
            name: "john doe",
        },
        customizations: {
            title: "GOLFWANG by HASSAN",
            description: "Payment for items in cart",
            logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
        },
    };
    const handleFlutterPayment = useFlutterwave(config);
    return { handleFlutterPayment, closePaymentModal };
};
