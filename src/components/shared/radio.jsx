const Radio = ({ ...props }) => {
    return (
        <span className="w-[14px] h-[14px] rounded-full border border-black flex justify-center items-center">
            <input
                type="radio"
                className="appearance-none m-auto w-[8px] h-[8px] rounded-full checked:bg-black"
                {...props}
            />
        </span>
    );
};
export default Radio;
