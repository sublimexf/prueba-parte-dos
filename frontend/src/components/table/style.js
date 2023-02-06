import styled from "styled-components";

export const TableContainer = styled.div`
    width: 100%;
    height: 70vh;
    margin-bottom: 100px;
    border-radius: 10px;
    border: 1px solid black;
    overflow: auto;

    ::-webkit-scrollbar{
        display: none;
      }

    > table {
        width: 100%;
    }
`
export const Th = styled.th`
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
    text-align: center;
    position: sticky; 
    top: 0;

    :nth-child(1) {
        border-top-left-radius: 10px;
    }
    :nth-child(6) {
        width: 115px;
        border-top-right-radius: 10px;
    }
`