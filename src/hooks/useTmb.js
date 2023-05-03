import { useState } from 'react';

export const useTmb = () => {
    const [genre, setGenre] = useState('Masculino');
    const [pesoState, setPesoState] = useState(0);
    const [alturaState, setAlturaState] = useState(0);
    const [idadeState, setIdadeState] = useState(0);

    const [resultTmbStateMasc, setResultTmbStateMasc] = useState(0);
    const [resultTmbStateFem, setResultTmbStateFem] = useState(0);

    const handleCalculateTmb = () => {
        if (genre === 'Masculino') {
            const tmbMasc = (
                66 +
                pesoState * 13.8 +
                alturaState * 5 -
                idadeState * 6.8
            ).toFixed(2);
            setResultTmbStateMasc(tmbMasc);
        } else {
            const tmbFem = (
                655 +
                pesoState * 9.6 +
                alturaState * 1.8 -
                idadeState * 4.7
            ).toFixed(2);
            setResultTmbStateFem(tmbFem);
        }
    };
    return {
        setGenre,
        genre,
        setPesoState,
        setAlturaState,
        setIdadeState,
        pesoState,
        alturaState,
        idadeState,
        handleCalculateTmb,
        resultTmbStateMasc,
        resultTmbStateFem,
    };
};
