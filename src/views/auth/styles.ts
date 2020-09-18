
import styled from 'styled-components';
import {} from '../../components/button';


export const MainWrapper = styled.div`
    overflow-x: hidden;
    height: 100vh;
    background: ${({theme : {colors}}) => colors.main};
`;
interface StateProps {
    active: boolean
}
export const Wrapper = styled.div<StateProps>`
    ${({theme : {min,breakpoints},active}) => `
        display: flex;
        transition: transform 200ms;
        ${min(breakpoints.tablet)} {
            ${active && `transform: translateX(-40%);`};
        }
    `}
`;

export const FirstSection = styled.section`
    ${({theme : {min,breakpoints,colors}}) => `
        min-height: 100vh;
        display: none;
        flex-direction: column;
        ${min(breakpoints.tablet)} {
            width: 40%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-shrink: 0;
        }
    `}
`;

export const Logo = styled.svg`
    ${({theme : {min,breakpoints,colors}}) => `
        fill: ${colors.white};
        width: 50%;
        margin-bottom: 20px;
        ${min(breakpoints.tablet)} {
        }
    `}
`;

export const StoreName = styled.span`
    ${({theme : {colors,min,breakpoints}}) => `
        text-align: center;
        font-family: Comfortaa;
        color: ${colors.white};
        font-size: 20px;
        margin-bottom: 20vh;
        ${min(breakpoints.tablet)} {
            font-size: 50px;
        }
        ${min(breakpoints.hd)} {
            font-size: 70px;
        }
        ${min(breakpoints.fullHD)} {
            font-size: 100px;
        }
    `}  
`

export const SecondSection = styled.section<StateProps>`
    ${({theme : {colors,min,breakpoints},active}) => `
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${colors.white};
        transition: border-radius 200ms;
        position: relative;
        ${min(breakpoints.tablet)} {
            width: 60%;
            flex-shrink: 0;
            // border-radius: ${active ? '0% 50% 50% 0%' : '50% 0% 0%  50%'};
        }
    `}
`;

export const Container = styled.div`
    margin:20px 20px;
    & input {
        margin-bottom: 10px;
    }
    width: 100%;
    ${({theme : {min,breakpoints}}) => `
        ${min(breakpoints.tablet)} {
            max-width : 416px;
        }
    `}
`;

interface ButtonContainerProps {
    column?: boolean
}

export const  ButtonContainer = styled.div<ButtonContainerProps>`
    ${({column,theme : {colors,min,breakpoints}}) => `
        display: flex;
        justify-content: center;

        & button:first-child {
            width: 164px;
            ${min(breakpoints.hd)} {
                width: 233px;
            }
        }

        ${column && `
            align-items: center;
            flex-direction: column;
            & > button {
                width: 100%;
                margin-bottom: 10px;
            }
        `}
    `}
`

export const Title = styled.h1`
    ${({theme : {colors,min,breakpoints}}) => `
        text-align: center;
        font-family: Montserrat Bold;
        color: ${colors.main};
        ${min(breakpoints.hd)} {
            font-size: 30px;
        }
    `}  
`;


export const ErrorText = styled.p`
    ${({theme : {colors,min,breakpoints}}) => `
        color: red;
        font-size: 14px;
        text-align: center;
        margin: 0 0 20px 0;
        min-height: 38px;
        ${min(breakpoints.hd)} {
            font-size: 20px;
        }
    `}    
`;
interface ProposeProps {
    right?: boolean;
}
export const Propose = styled.p<ProposeProps>`
    ${({theme : {colors,min,breakpoints},right}) => `
        width: 100%;
        margin-top: 20px;
        & > a {
            color: ${colors.main};
        }
        ${min(breakpoints.tablet)} {
            margin: 0;
            width: auto;
            position: absolute;
            top: 20px;
            ${right ? 'left: 20px': 'right: 20px'};
        }
        ${min(breakpoints.hd)} {
            font-size: 20px;
        }
    `}
`