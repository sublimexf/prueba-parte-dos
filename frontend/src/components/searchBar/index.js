import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import useOutsideClick from "../../hooks/useOutSideClick";
import { FetchHeroes } from "../../redux/slices/heroesSlice";
import { setHero } from "../../redux/slices/heroSlice";
import { toggleShow } from "../../redux/slices/showModal";
import RadioList from "./radioList";
import { AddButton, Input, InputContainer, SearchBarContainer, SearchIcon } from "./style"

const SearchBar = () => {
    const dispatch = useDispatch();
    const [isFocused, setFocused] = useState(false)
    const [url, setUrl] = useState("publisher")
    const [inputValue, setInputValue] = useState()
    const outSideClick = useOutsideClick(() => setFocused(false))
    const heroState = useSelector(state => state.hero.hero)

    const radioList = [
        "Casa publicadora",
        "Raza",
        "Género",
        "Bando"
    ]
    const search = async () => {
        if (inputValue === "")
            dispatch(FetchHeroes())
        const promise = dispatch(FetchHeroes([url, inputValue]))

        return () => promise
    }

    return (
        <SearchBarContainer>

            <InputContainer
                onClick={() => setFocused(true)}
                isFocused={isFocused}
                ref={outSideClick}
            >
                <Input
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <SearchIcon onClick={search} />
            </InputContainer>

            <RadioList
                radioList={radioList}
                setUrl={setUrl}
            />

            <AddButton onClick={() => {
                dispatch(toggleShow())
                dispatch(setHero(heroState))
            }} >Nuevo Heroe</AddButton>

        </ SearchBarContainer>
    )
}



export default SearchBar