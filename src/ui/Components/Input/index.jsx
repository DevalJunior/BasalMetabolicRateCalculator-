const Input = ({ placeholder, onChange, value }) => {
    return (
        <input
            type="number"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
}
export default Input;