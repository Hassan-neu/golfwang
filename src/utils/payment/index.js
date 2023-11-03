import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { sendReceipt } from "./sendReceipt";
import { useCartStore } from "@/libs/cart";
export const usePayWithFlutter = (formik) => {
    const totalCost = useCartStore((cart) => cart.totalCost);
    const shipping = useCartStore((cart) => cart.shipping);
    const discount = useCartStore((cart) => cart.discount);
    const {
        values: { email, firstname, lastname, phone, address, payment },
    } = formik;
    const data = {
        firstname,
        lastname,
        phone,
        address,
        payment: payment.toUpperCase(),
        email,
        shipping: shipping.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        discount: discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        totalCost: totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    };
    const config = {
        public_key: "FLWPUBK_TEST-fd4ee92411d56d253cbfc7312e1bebce-X",
        tx_ref: Date.now(),
        amount: totalCost,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
            email,
            phone_number: phone,
            name: `${firstname}, ${lastname}`,
        },
        customizations: {
            title: "GOLFWANG by HASSAN",
            description: "Payment for items in cart",
            logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
        },
    };
    const payCallback = (res) => {
        console.log(res);
        if (res.status === "successful") {
            sendReceipt(data, res.transaction_id, res.tx_ref);
        }
        closePaymentModal();
    };
    const handleFlutterPayment = useFlutterwave(config);
    return { handleFlutterPayment, payCallback };
};

import { usePaystackPayment } from "react-paystack";
export const usePayWithPaystack = (formik) => {
    const totalCost = useCartStore((cart) => cart.totalCost);
    const shipping = useCartStore((cart) => cart.shipping);
    const discount = useCartStore((cart) => cart.discount);
    const {
        values: { email, firstname, lastname, phone, address, payment },
    } = formik;
    const data = {
        firstname,
        lastname,
        phone,
        address,
        payment: payment.toUpperCase(),
        email,
        shipping: shipping.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        discount: discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        totalCost: totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        orderNumber: 12345,
    };
    const config = {
        reference: new Date().getTime().toString(),
        email,
        amount: totalCost * 100,
        publicKey: "pk_test_d6ac81974b42368a4d3845ac89ba4ad84939000e",
        metadata: {
            name: `${firstname}, ${lastname}`,
            phone,
        },
    };
    const onSuccess = (res) => {
        console.log(res);
        sendReceipt(data, res.trans, res.trxref);
    };
    const onClose = () => {
        console.log("closed");
    };
    const initializePayment = usePaystackPayment(config);
    return { initializePayment, onClose, onSuccess };
};
