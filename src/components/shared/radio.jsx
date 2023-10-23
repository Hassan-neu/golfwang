const Radio = ({ ...props }) => {
    return (
        <span className="w-[12px] h-[12px] rounded-full border border-black flex justify-center items-center">
            <input
                type="radio"
                className="appearance-none m-auto w-[7px] h-[7px] rounded-full checked:bg-black"
                {...props}
            />
        </span>
    );
};
export default Radio;
