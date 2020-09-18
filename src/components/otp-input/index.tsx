import React,{useRef, useState,useEffect} from 'react';
import {
    Wrapper,
    NumberInput
} from './styles';

interface Props {
    onChange?(value : string): void;
    length: number;
}


const OTPInput : React.FC<Props> = ({onChange,length}) => {
    const [inputs,setInputs] = useState( Array(length).fill('')); 
    const ref = useRef([] as Array<HTMLInputElement|null>);
    const validateKey = (str :string) => {
        return str === 'Enter' || str === 'Backspace' || str.match(/\d/) !== null;
    }

    useEffect(()=>{
        if(typeof onChange == 'function') {
            onChange(inputs.reduce((a,b)=> a + b,''))
        }
    },[inputs,onChange])

    // const sendValue = () => {
    //     if(typeof onChange == 'function') {
    //         onChange(inputs)
    //     }
    // }

    const handleKeyDown : React.KeyboardEventHandler = (e) => {
        const target = e.target as HTMLInputElement;
        const index = parseInt(target.dataset.number as string);
        const key = e.key;
        if((e.ctrlKey && key === 'v') || key === 'Unidentified') {
            return;
        }
        e.preventDefault();
        if(validateKey(key)) {
            switch(key) {
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '0': {
                    setInputs(state => {
                        state[index] = key;
                        if(ref.current[index+1]) {
                            ref.current[index+1]?.focus();
                        }
                        return [...state];
                    });
                    break;
                }
                case 'Backspace': {
                    setInputs(state => {
                        state[index] = '';
                        if(ref.current[index-1]) {
                            ref.current[index-1]?.focus();
                        }
                        return [...state];
                    });
                    break;
                }
            } 
        }
    };

    const handlePaste : React.ClipboardEventHandler  = (e) => {
        const str = e.clipboardData.getData('Text').slice(0,6);
        const inputsClone = [...inputs];
        Array.from(str).forEach((char,index) => {
            inputsClone[index] = char;
        })
        setInputs(inputsClone);
    }


    return (
        <Wrapper>
            {(()=>{
                return inputs.map((value,key)=> {
                    return (
                        <NumberInput onPaste={handlePaste} placeholder='0' ref={el => {
                            ref.current = [...ref.current,el];
                        }} value={value} onKeyDown={handleKeyDown} key={key} data-number={key}/>
                    )
                })
            })()}
        </Wrapper>
    );
}

export default OTPInput;