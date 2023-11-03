import emailjs from "@emailjs/browser";
export const sendReceipt = async (data, orderNumber, referenceId) => {
    try {
        const res = await emailjs.send(
            "service_aryc0y6",
            "template_x04ra2o",
            { ...data, orderNumber, referenceId },
            "APvSrxPLalFrFzEg7"
        );
        console.log(res.text);
    } catch (err) {
        console.log(err.text);
    }
};
