import { useState } from "react"
import useOutsideClick from "../../hooks/useOutSideClick";
import RadioList from "../radio";
import Radio from "../radio";
import { Input, InputContainer, RadioContainer, SearchBarContainer, SearchIcon } from "./style"

const SearchBar = () => {
    const [isFocused, setFocused] = useState(false)
    
    const outSideClick = useOutsideClick(() => setFocused(false))
    const radioList = [
        "Casa publicadora",
        "Raza",
        "Género",
        "Bando"
    ]

    return (
        <SearchBarContainer>

            <InputContainer 
                onClick={ () => setFocused(true)} 
                isFocused={isFocused}
                ref={outSideClick}
            >
                <Input />
                <SearchIcon />
            </InputContainer>

            <RadioList radioList={radioList}/>
            
        </ SearchBarContainer>
    )
}



export default SearchBar