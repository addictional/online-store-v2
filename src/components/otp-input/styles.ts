import styled  from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NumberInput = styled.input.attrs({
    inputMode:'numeric', 
    pattern:'[0-9]*'
})`
    ${({theme}) => `
        text-align: center;
        line-height: 40px;
        width: 40px;
        font-size: 18px;
        border-radius: 8px;
        background-color: ${theme.colors.white};
        border: 1px solid transparent;
        transition: background-color 200ms, outline 200ms ease, color 200ms ease, box-shadow 200ms ease,border-color 200ms ease;
        outline: none;
        border: 1px solid rgba(131,111,224,0.4);
        box-shadow: 0 0 0 4px transparent;
        &:focus {
            background-color: ${theme.colors.white};
            box-shadow: 0 0 0 4px rgba(131,111,224,0.1);
            &::-webkit-input-placeholder {
                color: transparent;
            }
        }
        &:placeholder {
            color: ${theme.colors.placeHolder}
        }`
    } 
`;