import styled from "styled-components";

export const EditContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    background-color: white;
`
export const SaveContainer = styled(EditContainer)`
    flex-direction: row;
    width: 100%
`
export const EditTitle = styled.div`
    display: flex;
    color: #303030;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 4%;
`
export const FormTitle = styled(EditTitle)`
    color: #979797;

`
export const SaveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border:none;
    width: 200px;
    height: 56px;
    border-radius: 28px;
    background-color: #E47D31;
    color: white;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 1%;
    margin-bottom: 309px;
    cursor: pointer;
`
export const DeleteAccount = styled(SaveButton)`
    color: #BA0000;
    font-weight: 400;
    background-color: white;
    justify-content: flex-end;
    `

export const UserInput = styled.input`
    display: flex;
    width: 324px;
    height: 52px;
    border: 1px solid #EBEBEB;
    background-color: white;
    font-size: 20px;
    margin-bottom: 2%;
    border-radius: 3px;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
`
export const LoveUserInput = styled(UserInput)`
    width: 582px;
`
export const DescriptionUserInput = styled(UserInput)`
    width: 582px;
    height: 87.82px;
`
export const Space = styled.div`
    width:15%;
`