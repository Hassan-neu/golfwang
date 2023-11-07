import { toast } from "@/components/ui/use-toast";
export const validateForm = (values) => {
    const errors = {};
    if (!values.firstname) {
        errors.firstname = "Enter a first name";
    } else if (values.firstname.includes(" ")) {
        errors.firstname = "Remove empty space";
    }
    if (!values.lastname) {
        errors.lastname = "Input a your last name";
    } else if (values.lastname.includes(" ")) {
        errors.lastname = "Remove empty space";
    }
    if (!values.email) errors.email = "Please enter email";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email";
    }
    if (!values.phone) {
        errors.phone = "Enter a phone number";
    } else if (
        !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
            values.phone
        )
    ) {
        errors.phone = "Invalid phone number";
    }
    if (!values.shipping) {
        errors.shipping = "Select a shipping option";
    }
    if (!values.payment) {
        errors.payment = "Select a payment merchant";
    }
    if (!values.address) {
        errors.address = "Enter the destination address";
    }
    if (!values.city) {
        errors.city = "Enter the destination city";
    }
    if (!values.zipcode) {
        errors.zipcode = "Enter your zipcode";
    }
    if (values.shipping === "international" && !values.country) {
        errors.country = "Enter the destination country";
    }
    return errors;
};
