import RadioMeF from "../../Components/RadioMeF";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import ShowResultTmb from "../../Components/ShowResultTmb";
import * as S from "./styles"

const BodyTmb = ({
    inputProps,
    radioProps,
    buttonProps
}) => {
    console.log("radioPropsBoryTMB", radioProps);
    const { children, type, onClick } = buttonProps;
    const { radioMascProps, radioFemProps } = radioProps;
    const { inputPeso, inputAltura, inputIdade, resultTmbStateFem, resultTmbStateMasc } = inputProps;
    return (
        <S.Wrapper>
            <h2>Insira seus dados:</h2>
            <S.ContainerRadio>
                <RadioMeF {...radioMascProps} />
                <RadioMeF {...radioFemProps} />
            </S.ContainerRadio>
            <S.ComponentsContainer>
                <S.InputContainer>
                    <Input
                        placeholder={inputIdade.placeholder}
                        onChange={inputIdade.onChange}
                        value={inputIdade.value}
                    />
                    <Input
                        placeholder={inputAltura.placeholder}
                        onChange={inputAltura.onChange}
                        value={inputAltura.value}
                    />
                    <Input
                        placeholder={inputPeso.placeholder}
                        onChange={inputPeso.onChange}
                        value={inputPeso.value}
                    />
                </S.InputContainer>
                <Button
                    type={type}
                    onClick={onClick}
                    disabled={!(inputIdade.value && inputPeso.value && inputAltura.value)}
                >
                    {children}
                </Button>
            </S.ComponentsContainer>
            <ShowResultTmb>
                {resultTmbStateFem && resultTmbStateFem}
                {resultTmbStateMasc && resultTmbStateMasc}
            </ShowResultTmb>
        </S.Wrapper>
    )
}

export default BodyTmb;