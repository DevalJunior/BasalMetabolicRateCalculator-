const ShowResultTmb = ({ children, resultTmbState }) => {
    console.log('componente showresultTmb', resultTmbState);
    return !!children && (
        <h1>
            {`Seu resultado é: ${children}`}
        </h1>
    );
}

export default ShowResultTmb; 