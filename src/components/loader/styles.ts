import styled,{keyframes} from 'styled-components';


export const spin = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
`; 

interface ContainerProps {
    opacity: number;
}

export const Container = styled.div<ContainerProps>`
    z-index: 50;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    background: rgba(255,255,255,${({opacity}) => opacity ? opacity : 1});
    width: 100%;
`;

export const Text = styled.span`
    ${({theme : {min,breakpoints}}) => `
        font-family: Comfortaa;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 22px;
        color: #0E203D;
        z-index: 1;
        ${min(breakpoints.tablet)} {
            font-size: 30px;
        }
        ${min(breakpoints.hd)} {
            font-size: 40px;
        }
    `}
`;


export const Spinner = styled.div`
    animation: ${spin} 1.5s infinite linear;    
    ${({theme : {min,breakpoints,colors}}) => `
        position: absolute;
        width:  63px;
        height: 63px;
        border: 3px solid ${colors.main};
        border-radius: 50%;
        border-top-color: transparent;
        ${min(breakpoints.tablet)} {
            font-size: 30px;
            width: 82.6584px;
            height: 82.6584px;
            border-width: 5px;
        }
        ${min(breakpoints.hd)} {
            width: 124px;
            height: 124px;
        }
    `}   
`; 