import styled from "styled-components";
import BackgrounImge from '../assets/london-restaurant.jpeg'
import { BaseButton } from "./Buttons";


export const MainmWriteNewReview = styled.div`
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  box-sizing: border-box;
`
export const HeaderTopWrapper = styled.div`
background-image:url(${BackgrounImge});

`
export const Content = styled.div`
height: 540px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const ContentWrapper = styled.div`
width: 832px;
`
export const ContentTop = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const Rating = styled.div`
margin-right: 30px;
`
export const RatingTitle = styled.p`
font-family: 'Helvetica';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 23px;
color: #7E7E7E;
`


export const ContentBody = styled.form``

export const ContentInput = styled.input `
width: 832px;
height: 264.5px;
/* text-align:left; */
`

export const ContentBottom = styled.div`
display: flex;
justify-content:space-between;
width: 832px;
padding:  10px 0;
`

export const SubmetReview = styled(BaseButton)`
width: 200px;
height: 57px;
border-radius: 28px;
color: #000000;
text-align: right;
`
export const FormRequired = styled.p`
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color: #B00000;
margin-top: -7px;
`
// export const WriteNewReview = styled.div``
// export const WriteNewReview = styled.div``
// export const WriteNewReview = styled.div``
// export const WriteNewReview = styled.div``
// export const WriteNewReview = styled.div``
// export const WriteNewReview = styled.div``