import styled from "styled-components"

export const NavContainer = styled.div`
    width: 100%;
    height: 12%;
    display: flex;
    border-bottom: 1px solid #EBEBEB;
`

export const NavLeftSide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding-left: 10px;
`
export const NavLuna = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 30px;
`

export const NavLogoImg = styled.div`
    display: flex;
    height: 45px;
    width: 144px;
    cursor: pointer;
`

export const NavRightSide = styled.div`
    width: 720px;
    height: 71px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 106px;
    font-size: 23px;
    font-family: Helvetica;
    color: #4A4A4A;
`

export const NavHome = styled.div`
    display: flex;
    &:hover {
    border-bottom: 2px solid #E47D31;
    margin-bottom: -2px;
    cursor: pointer;
    & > p {
      color: black;
    }}
`
export const NavSearch = styled.div`
    display: flex;
    margin-left: 73.5px;
    &:hover {
    border-bottom: 2px solid #E47D31;
    margin-bottom: -2px;
    cursor: pointer;
    & > p {
      color: black;
    }}
`

export const NavProfile = styled.div`
    display: flex;
    margin-left: 73.5px;
    margin-right: 62px;
    &:hover {
    border-bottom: 2px solid #E47D31;
    margin-bottom: -2px;
    cursor: pointer;
    & > p {
      color: black;
    }}
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 30px;
`
export const SignUpLoginButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 200px;
    border-radius: 28px;
    background: #E47D31;
    border: none;

`
export const TextClick = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    cursor: pointer;
`
export const WhiteLine = styled.div`
    width: 3px;
    height: 40px;
    background-color: white;
`