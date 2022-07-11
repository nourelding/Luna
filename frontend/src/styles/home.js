import styled from 'styled-components';
import Backgroundimage from '../assets/background_home.webp';

export const Maincontainer = styled.div`
display:flex;
align-items:center;
height:100vh;
width:100%;
flex-direction:column;
`
export const Maincontentbox = styled.div`
display:flex;
flex-direction:column;
height:100%;
width:100%;
`
export const SearchbarBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:35%;
width:100%;
background:url(${Backgroundimage}) rgba(0, 0, 0, 0.35);
background-position:center center;
background-size:cover;
`
export const Searchbar = styled.input`
color:#4C4C4C;
height: 55px;
width: 30%;
top:1px;
border-radius:3px;
font-family: Helvetica;
font-size: 20px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0px;
border: 1px solid black;
margin-right:25px;
`
export const Button = styled.button`
height: 58px;
width: 200px;
left: 0px;
top: 0px;
border-radius: 28px;
background: #E47D31;
font-family: Helvetica;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0px;
text-align: center;
color:#FFFFFF;
`
export const RatedRestaurantsBox = styled.div `
display:flex;
flex-direction:column;
height:100%;
width:100%;
background-color:#F2F2F2;
`
export const H1 = styled.h1`
font-family: Helvetica;
font-size: 24px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0px;
text-align: center;
margin-top:29px;
`
export const Img = styled.img`
height:3px;
width:265px;
`
export const ImgBox = styled.div`
display:flex;
flex-direction:column;
align-items:center;
top:39px;
left:453px;
`