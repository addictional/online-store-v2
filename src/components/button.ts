import styled from 'styled-components';

export const Button = styled.button`
    ${({theme: {colors,min,breakpoints}}) => `
        border: none;
        border-radius: 35px;
        line-height: 40px;
        background-color: ${colors.main};
        color: ${colors.white};
        font-size: 14px;
        padding: 0 16px;
        outline: none;
        cursor: pointer;
        ${min(breakpoints.hd)} {
            font-size: 20px;
            line-height: 50px;
        }
    `}
`;