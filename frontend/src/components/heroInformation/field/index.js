import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHValue } from "../../../redux/slices/heroSlice";
import { FieldContainer, FieldInput, FieldLabel } from "./style";

const Field = ({ field, data, id }) => {
    const dispatch = useDispatch()
    const hero = useSelector(state => state.hero.hero)
    const [value, setValue] = useState(data);

    useEffect(() => {
        setValue(data)
        return () => setValue("")
    }, [data])

    const handleChange = e => {
        let auxHero = JSON.parse(JSON.stringify(hero));
        auxHero[id] = e.target.value
        dispatch(updateHValue(auxHero))
        setValue(e.target.value)
    }

    return (
        <FieldContainer>           
            <FieldInput
                type="text"
                value={value}
                onChange={e => handleChange(e)}
            />
             <FieldLabel keepOnTop={ value !== null && value !== "" && value !== undefined } >{ field }</FieldLabel>
        </FieldContainer>
    )
}

export default Field;