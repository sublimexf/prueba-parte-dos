import { useState } from "react";
import useOutsideClick from "../../../hooks/useOutSideClick";
import { Arrow, Options, SelectContainer, Space } from "./style";

const Select = ({ children, title, width, optionsWidth, radius, hideArrow }) => {
    const [open, setOpen] = useState(false);
    const selectRef = useOutsideClick(() => setOpen(false))

    return (
        <SelectContainer
            onClick={() => setOpen(!open)}
            ref={selectRef}
            width={width}
            $radius={radius}
        >
            {title}
            {typeof title === "string" && <Space width="10px" height="1px" />}
            {!hideArrow && <Arrow dir="down" rotate={!open} $fill={radius? "black" : ""} />}
            <Options open={open} width={optionsWidth}>
                {/* <OptionsTriangle /> */}
                {children}
            </Options>
        </SelectContainer>
    )
}

export default Select;