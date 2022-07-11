import styled from "styled-components";

import {
  BaseButton,
} from './Buttons'

export const FilterWrapper = styled.div `
width:650px;
height: 40px;
display: flex;
justify-content: space-between;
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  box-sizing: border-box;
  padding-top: 10px;
`
export const FilterInput = styled.input `
width: 510px;
height: 40px;
border: 1px solid #EBEBEB;
border-radius: 3px;
outline: none;
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  box-sizing: border-box;
`
export const FilterButton = styled(BaseButton) `
width:120px ;
height:40px ;

`
// export const FilterWrapper = styled.div ``
// export const FilterWrapper = styled.div ``
// export const FilterWrapper = styled.div ``
// export const FilterWrapper = styled.div ``