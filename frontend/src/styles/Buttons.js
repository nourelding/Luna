import styled from "styled-components";


export const BaseButton = styled.button `
display: flex;
justify-content: center;
align-items: center;
background-color: #E47D31;
/* padding: 10px 30px; */
border-radius: 20px;
border: 1px solid rgba(0,0,0,0.2);
cursor: pointer;
outline:none;
position:relative;
color:white;
transition:all .3s ease-out;
font-size: 16px;
text-transform:uppercase;
`


export const BigButton = styled(BaseButton) `
width: 200px;
height: 39px;
`
export const GrayBigButton = styled(BaseButton) `
width: 125px;
height: 33px;
border-radius:0;
background: rgba(145, 145, 145, 0.6);
font-family: 'Helvetica';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
`
