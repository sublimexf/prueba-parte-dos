import styled from "styled-components"

export const SelectContainer = styled.div`
  width: fit-content;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  position: relative;
  font-size: 1.25em;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  width: 70%;
  margin-bottom: 50px;
  
  ${props => props.$radius && `
    padding: 5px;
    border-radius: 5px;
    border: solid 1px black;
  `}

`

export const Options = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  width: ${props => props.width ? props.width : "auto"};
  background: white;
  min-width: calc(100% + 10px);
  max-width: 0px;
  max-height: 0px;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: clip;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  background: white;
  border: solid 2px black;
  border-top: none;

  ::-webkit-scrollbar{
    display: none;
}

  ${props => props.open && `
      opacity: 1;
      max-width: 210px;
      max-height: 1000%;
      padding-top: 5px;
      padding-bottom: 5px;
  `}
  
  option {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    color: black;

    &:hover {
      background: #ddd;
    }
  }
`

const ArrowSVG = styled.svg`
    ${props => `
        transform: ${props.$transform};
        fill: ${props.$fill !== "" ? props.$fill : props.theme.color.font};
    `}
    transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
`

export const Arrow = ({ dir, rotate, $fill }) => {

    //reutrn: rotate(dir) scaleY(rotate)
    const transform = () => {
        let auxRotate = " scaleY(" + (rotate ? "-1" : "1") + ")"

        if (dir === "up") return "rotate(180deg)" + auxRotate
        if (dir === "right") return "rotate(90deg)" + auxRotate
        if (dir === "left") return "rotate(270deg)" + auxRotate
        return auxRotate
    }

    return (
        <ArrowSVG $transform={transform()} $fill={'black'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 312.36" width="20" height="20" preserveAspectRatio="xMidYMid meet">
            <path fillRule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z">
            </path>
        </ArrowSVG>
    )
}

export const Space = styled.div`
    width: ${props => props.width ? props.width : "20px"};
    height: ${props => props.height ? props.height : "20px"};
`