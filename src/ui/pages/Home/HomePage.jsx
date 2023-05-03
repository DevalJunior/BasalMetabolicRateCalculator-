import { useEffect, useState } from "react";
import HomeTemplate from "../../Templates/HomeTemplate";
import * as S from "./styles"
import { useTmb } from "../../../hooks/useTmb";

const HomePage = () => {
    const { genre, setGenre, setPesoState, setAlturaState, setIdadeState, pesoState, alturaState, idadeState, resultTmbStateFem, resultTmbStateMasc, handleCalculateTmb } = useTmb(null);

    useEffect(() => {
        setPesoState(0)
        setAlturaState(0)
        setIdadeState(0)
    }, []);

    return (
        <S.HomePageContainer>
            <HomeTemplate
                pageTitle="Calcule aqui sua Taxa de Metabolismo Basal - TMB"
                bodyTmbProps={{
                    radioProps: {
                        radioMascProps: {
                            id: "Masculino",
                            value: "Masculino",
                            label: "Masculino",
                            onChange: e => setGenre(e.target.value),
                            checked: genre === 'Masculino'
                        },
                        radioFemProps: {
                            id: "Feminino",
                            value: "Feminino",
                            label: "Feminino",
                            onChange: e => setGenre(e.target.value),
                            checked: genre === 'Feminino'
                        }
                    },
                    inputProps: {
                        resultTmbStateFem,
                        resultTmbStateMasc,
                        inputPeso: {
                            placeholder: "Peso",
                            onChange: e => setPesoState(e.target.value),
                            value: pesoState || ''
                        },
                        inputAltura: {
                            placeholder: "Altura",
                            onChange: e => setAlturaState(e.target.value),
                            value: alturaState || ''
                        },
                        inputIdade: {
                            placeholder: "Idade",
                            onChange: e => setIdadeState(e.target.value),
                            value: idadeState || ''
                        }
                    },
                    buttonProps: {
                        children: "Resultado",
                        type: "button",
                        onClick: handleCalculateTmb(),
                    }
                }}
            />
        </S.HomePageContainer>
    );
}

export default HomePage;

