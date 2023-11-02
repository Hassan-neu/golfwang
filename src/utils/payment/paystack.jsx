import React from "react";
import { usePaystackPayment } from "react-paystack";
export const usePayWithPaystack = () => {
    const config = {
        reference: new Date().getTime().toString(),
        email: "user@example.com",
        amount: 20000,
        publicKey: "pk_test_d6ac81974b42368a4d3845ac89ba4ad84939000e",
    };
    const onSuccess = (reference) => {
        console.log(reference);
    };
    const onClose = () => {
        console.log("closed");
    };
    const initializePayment = usePaystackPayment(config);
    return { initializePayment, onClose, onSuccess };
};
