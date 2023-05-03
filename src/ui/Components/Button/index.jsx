import * as S from './styles';

const Button = ({ children, type, onClick, disabled }) => {
    return (
        <S.Button
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </S.Button>

    );
}

export default Button;