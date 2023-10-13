import React from "react";

export const Domestic = ({ handleChange }) => {
    return (
        <div className="grid grid-cols-2 auto-rows-auto gap-2">
            <input
                type="text"
                name="address"
                placeholder="Address"
                required={true}
                className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm [grid-column:1/3]"
                onChange={handleChange}
            />
            <input
                type="text"
                name="apartment"
                placeholder="Apartment, suite, etc (optional)"
                className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm [grid-column:1/3]"
                onChange={handleChange}
            />
            <input
                type="text"
                name="city"
                placeholder="City"
                required={true}
                className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm [grid-column:1/2]"
                onChange={handleChange}
            />
            <input
                type="number"
                name="zipcode"
                placeholder="Zip / Postcode"
                required={true}
                className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm
                [grid-column:2/3]"
                onChange={handleChange}
            />
        </div>
    );
};

export const International = ({ handleChange }) => {
    return (
        <div className="grid grid-cols-2 auto-rows-auto gap-2">
            <input
                type="text"
                name="country"
                placeholder="Country"
                required={true}
                className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm [grid-column:1/3]"
                onChange={handleChange}
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                required={true}
                className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm [grid-column:1/3]"
                onChange={handleChange}
            />
            <input
                type="text"
                name="apartment"
                placeholder="Apartment, suite, etc (optional)"
                className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm [grid-column:1/3]"
                onChange={handleChange}
            />
            <input
                type="text"
                name="city"
                placeholder="City"
                required={true}
                className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm [grid-column:1/2]"
                onChange={handleChange}
            />
            <input
                type="number"
                name="zipcode"
                placeholder="Zip / Postcode"
                required={true}
                className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm
                [grid-column:2/3]"
                onChange={handleChange}
            />
        </div>
    );
};
