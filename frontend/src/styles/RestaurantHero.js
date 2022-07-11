import styled from "styled-components";
import Laderach from '../assets/laderach.jpg'
import {
  BaseButton,
  BigButton,
} from '../styles/Buttons'

export const MainRestaurantHero = styled.div`
/* height: 1313px; */
/* width: 100vw; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background: #F2F2F2;
margin: 0;
padding: 0;
font-family: 'Roboto', sans-serif;
box-sizing:border-box;
`
export const HeroTop = styled.div`
`

export const HeroWrapper = styled.div`
/* height: 560px; */
position:relative;
`

export const HeroSection = styled.div`
width: 1440px;
height: 496px;
background-image: url(${Laderach});
background-position: bottom;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`
export const HeroMap = styled.div`
position:absolute;
top:29px;
left:956px;
`
export const H1 = styled.h1`
margin-left:10px;
font:Helvetica;
font-weight:400;
font-size:20px;
font-style:normal;
color:black;
`
export const H3 = styled.h3`
margin-left:10px;
font:Helvetica;
font-weight:400;
font-size:18px;
font-style:normal;
color:#4C4C4C;
`