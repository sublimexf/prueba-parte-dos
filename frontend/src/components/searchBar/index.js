import { useState } from "react"
import useOutsideClick from "../../hooks/useOutSideClick";
import RadioList from "../radioList";
import { AddButton, Input, InputContainer, SearchBarContainer, SearchIcon } from "./style"

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

            <AddButton>Nuevo Heroe</AddButton>
            
        </ SearchBarContainer>
    )
}



export default SearchBar