import styled from "styled-components"

export const ContentContainer = styled.div`
    display: flex;
    height:850px; //changed from no height to this to fix footer being too high
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
`

export const RegistrationTitle = styled.div`
    display: flex;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: #4C4C4C;
    margin-bottom: 16px;
    margin-top: 47.99px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
`
export const OrangeLine = styled.div`
    display: flex;
    width: 100px;
    height: 2px;
    background-color: #E47D31;
    margin-bottom: 77px;
`

export const EmailInput = styled.input`
    display: flex;
    width: 387px;
    height: 52px;
    border: 1px solid #EBEBEB;
    padding-left: 23px;
    background-color: white;
    font-size: 20px;
    color: #979797;
    margin-bottom: 51px;
    border-radius: 3px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
`
export const VerificationInput = styled(EmailInput)`
    margin-bottom: 15px;
    width: 317px;
`
export const LoginInput = styled(VerificationInput)`
    margin-bottom: 20px;

`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 710px;
    margin-bottom: 47px;
`
export const InputLeft = styled.div`
    display: flex;
    width: 340px;
    margin-right: 30px;
    flex-direction: column;

`
export const InputRight = styled(InputLeft)`
    margin-right: 0px;
`
export const RegisterButton = styled.button`
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
    margin-bottom: 309px;
    cursor: pointer;
`
export const VerificationButton = styled(RegisterButton)`
    
`
export const LoginButton = styled(RegisterButton)`
    margin-top: 30px;
    
`

export const MailText = styled.div`
    display: flex;
    width: 497px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;    
    color: #4C4C4C;
    margin-bottom: 339px;

`
