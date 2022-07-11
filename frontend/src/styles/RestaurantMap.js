import styled from "styled-components";
import MapImage from '../assets/map.jpg'


export const MainResturantMap = styled.div `
width: 361px;
height: 336px;
background-color: white;
font-family: 'Helvetica';
overflow: hidden;
border-radius: 3px;

`
export const ResturantMapWrapper = styled.div `
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
overflow: hidden;
`
export const ResturantMapImage = styled.div `
background-image: url(${MapImage});
width: 100%;
height: 50%;
background-size: cover;
background-position: center;
`
export const ResturantMapInfo = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
height: 50%;
padding: 35px;
overflow: hidden;
justify-content: space-between;
`
export const ResturantMapAdress = styled.div `
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
`
export const ResturantMapPhone = styled.div `
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
`
export const ResturantMapWebsite = styled.div `
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
`
// export const HeaderContent = styled.div ``
