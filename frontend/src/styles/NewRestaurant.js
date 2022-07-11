import styled from "styled-components"

export const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
`

export const RegistrationTitle = styled.div`
    display: flex;
    font-size: 24px;
    font-family: Helvetica, sans-serif;
    color: #4C4C4C;
    margin-bottom: 16px;
    margin-top: 47.99px;
    font-weight: 700;
    line-height: 28px;
`
export const OrangeLine = styled.div`
    display: flex;
    width: 200px;
    height: 2px;
    background-color: #E47D31;
    margin-bottom: 77px;
`

export const EmailInput = styled.input`
    display: flex;
    width: 370px;
    height: 50px;
    border: 1px solid #EBEBEB;
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
    width: 344px;
`
export const LoginInput = styled(VerificationInput)`
    margin-bottom: 20px;

`
export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 1180px;
    margin-bottom: 47px;
    justify-content: center;
    align-items: center;
`
export const InputTop = styled.div`
    display: flex;
    /* justify-content: center;
    align-items: center; */
    /* width: 340px; */
    /* margin-right: 30px; */
    flex-wrap: wrap;
    padding: 20px;
    gap:35px;


`
export const InputBottom = styled(InputTop)`
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
    cursor: pointer;
`
export const SubmitButton = styled(RegisterButton)`
margin-bottom: 40px;
    
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


export const LabelInputField = styled.label`
font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #979797;
/* opacity: 50%; */
width: 120px;
margin-bottom: 10px;
`

export const VerificationInputImage = styled.input`
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;
width: 215px;
height: 38px;
color: #FFFFFF;
background: #E47D31;
border-radius: 28px;
opacity: 0;
/* transform: scale(2); */
`

export const Categoryy = styled.select`

    display: flex;
    width: 370px;
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
export const Country = styled(Categoryy)``

export const LabelInputFieldImage = styled.label`
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
text-transform: uppercase;
width: 215px;
height: 38px;
color: #FFFFFF;
background: #E47D31;
border-radius: 28px;
position: absolute;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
`


export const InputWrapper = styled.div`
width:30%;
`
export const InputWrapperImage = styled.div`
position: relative;

`
// export const LabelInputField = styled.div``
// export const LabelInputField = styled.div``
// export const LabelInputField = styled.div``
// export const LabelInputField = styled.div``
// export const LabelInputField = styled.div``
// export const LabelInputField = styled.div``
