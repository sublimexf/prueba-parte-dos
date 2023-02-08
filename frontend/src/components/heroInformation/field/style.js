import styled, { css } from "styled-components";

export const FieldContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 80%;
    height: calc(40px + 1em);
    margin: 40px;
`

const onTop = css`
    top: 0;
    font-size: 0.95em;
    color: black;
    text-shadow: 3px 4px 7px #000000a8;

    font-weight: bold;
`

export const FieldLabel = styled.label`
    position: absolute;
    top: calc(100% - 30px);
    z-index: -1;
    color:  black;
    transition: all 0.5s ease-in-out;
    z-index: 1;
    ${props => props.keepOnTop && onTop};
`

export const FieldInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    color: black;
    border-bottom: solid 2px black;

    background: transparent;
    outline: none;
    font-size: 1em;
    
    &:focus ~ {
        ${FieldLabel} {
            ${ onTop };
        }
    } 

`

