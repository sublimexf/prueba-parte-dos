import styled from "styled-components";

export const RadioContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 60%;
`

export const RadiosTitle = styled.h2`
    width: 100%;
    margin: 0;
`

export const RadioLabel = styled.label`
display: inline-flex;
align-items: center;
cursor: pointer;
float: left;
-webkit-user-select: none;
user-select: none;
cursor: pointer;

margin-top: 10px;

&:not(:first-child) {
    margin-left: 20px
}
`

export const RadioSVG = styled.svg`
    fill: none;
    vertical-align: middle;
`

export const RadioCircle = styled.circle`
    stroke-width: 2;
    stroke: #C8CCD4;
`

export const RadioPath = styled.path`
    stroke: #008FFF;
    &.inner {
        stroke-width: 6;
        stroke-dasharray: 19;
        stroke-dashoffset: 19;
    }
      
    &.outer {
        stroke-width: 2;
        stroke-dasharray: 57;
        stroke-dashoffset: 57; 
    }
`

export const RadioInput = styled.input`
display: none;
&:checked + svg {
    path {
        transition: all .4s ease;
        &.inner {
            stroke-dashoffset: 38;
            transition-delay: .3s;
        }
          
        &.outer {
            stroke-dashoffset: 0;
        }
          
    }
    
}
  
div {
    display: inline-block;
    vertical-align: middle;
}

`

export const InnerPath = styled.path`
    stroke: #008FFF;
    stroke-width: 6;
    stroke-dasharray: 19;
    stroke-dashoffset: 19;
`

export const RadioText = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-left: 10px;
`

