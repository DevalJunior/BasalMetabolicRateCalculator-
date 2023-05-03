import styled from 'styled-components';

export const Button = styled.button`
    background: none;
    border: 1px solid black;
    color: black;
    padding: 5px;
    cursor: pointer;

    border-radius: 3px;
    &:hover {
        background-color: #cccccc;
        &:disabled {
            background: none;
        }
    }

    &:active {
        background-color: #111;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
