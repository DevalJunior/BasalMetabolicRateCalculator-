//como usar typescript:
// type RadioType = {
//   value: string,
//   name: string,
//   onChange: (event: any) => void,
//   label: string,
// };
//const RadioMeF = ( value, name, onChange, label): RadioType => {

import { Label, Radio } from "./styles";


const RadioMeF = ({ value, id, onChange, checked }) => {
    return (
        <>
            <Label
                htmlFor={id}
            >
                <Radio
                    id={id}
                    type="radio"
                    value={value}
                    onChange={onChange}
                    checked={checked}
                />
                {value}
            </Label>
        </>
    );
}

export default RadioMeF