import { useState } from "react";
import { RadioCircle, RadioContainer, RadioInput, RadioLabel, RadioPath, RadiosTitle, RadioSVG, RadioText } from "./style";

const Radio = ({ children, selected }) => {
    return (
        <RadioLabel htmlFor={children?.toString()} >
            <RadioInput type="radio" id={children?.toString()} name="radio" defaultChecked={selected} />
            <RadioSVG width="20px" height="20px" viewBox="0 0 20 20">
                <RadioCircle cx="10" cy="10" r="9" />
                <RadioPath d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner" />
                <RadioPath d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer" />
            </RadioSVG>

            <RadioText> {children} </RadioText>
        </RadioLabel>
    )
}

const RadioList = ({radioList}) => {
    const [radioSelected, setRadio] = useState(0)
    console.log(radioList)
    return (
        <RadioContainer>
            <RadiosTitle>Opciones de Busqueda</RadiosTitle>
        {
            radioList.map((text, key) =>
                <Radio 
                        onClick={ () => setRadio(key) } 
                        selected={radioSelected === key}
                        key={key}
                    >{text}</Radio>
            )
        }
        </RadioContainer>
    )
}

export default RadioList;