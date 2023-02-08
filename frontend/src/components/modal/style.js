import styled from "styled-components";

export const BackModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    background: #6e6e6ead;
`

export const Modaldiv = styled.div`
    position: absolute;
    top: ${props => (100 - props.height)/2}vh;
    left: ${props => (100 - props.width)/2}vw;
    border-radius: 10px;
    width: ${props => props.width}vw;
    height: ${props => props.height}vh;
    background: white;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar{
        display: none;
    }
    
`