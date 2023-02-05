import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
`


export const InputContainer = styled.div`
    display: flex;
    border: solid green 1px;
    width: 40%;
    height 40px;
    padding: 1%;
    margin: 1%;
    border-radius: 10px;
	cursor: pointer;
    padding-left: 12px;
    

    ${props => props.isFocused ? `
        border-color: green;
    `:`
        border-color: black;
    `}

    
`

export const Input = styled.input`
    width: 90%;
    border: none;
    font-size: 20px;

    :focus {
        outline: none;
        border-color: red; 
    }
`

export const SearchIcon = () => 
<svg width="10%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z" fill="#0F1729"/>
</svg>

