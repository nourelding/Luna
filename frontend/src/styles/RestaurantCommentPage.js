import styled from "styled-components";
import {
  BaseButton,
  BigButton,
  GrayBigButton,
} from './Buttons'
import UserProfile from '../assets/userprofile.jpg'

export const MainRestaurantPage = styled.div`
height: 1313px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background: #F2F2F2;
margin: 0;
padding: 0;
font-family: 'Roboto', sans-serif;
box-sizing:border-box;
background: #F5F5F5;

`


export const HeroContent = styled.div`
width: 1180px;
margin:  0 auto;
display: flex;
justify-content: center;

gap:20px;

`

export const HeroContentLeft = styled.div`
width: 650px;
height:744px;

`
export const HeroContentRight = styled.div`
width: 508px;
background: #F2F2F2;
height:100%;
overflow: hidden;

`
export const RestaurantTime = styled.div`
text-align: left; 
padding:15px;
border-bottom: 1px solid #D8D8D8;
`
export const PriceLevel = styled.div`
text-align: left;
padding:15px;
`
export const Buttons = styled.div`
display: flex;
justify-content: space-between;
padding: 17px ;

`

export const WriteReview = styled(BigButton)`

`

export const EditData = styled(BigButton)`

`

export const RestaurantComments = styled.div`
width: 650px;
height:744px;
overflow: auto;
margin-top:20px;
`

export const SingleComment = styled.div`
display: flex;
flex-direction: column;
/* gap:20px; */
text-align: left;
background-color: white;
padding-bottom: 10px;
border-radius: 3px;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
margin-bottom: 10px;
:last-child {
  margin-bottom:100px;
}
`
export const CommentUsertinfo = styled.div`
height: 66px;
width:100%;
display: flex;

align-items: center;
border-bottom: 1px solid #EBEBEB;
`
export const UserPic = styled.div`        
width:66px;
height: 66px;
background-image:url(${UserProfile});
background-size: cover;
background-position:center;
margin-right: 10px;
`

export const UserWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 5px;
`
export const UserName = styled.div`

`
export const UserTottalReviews = styled.div``

export const CommentContent = styled.div`
padding: 20px;
font-family: 'Helvetica';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 25px;
`
export const CommentLikes = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
`



export const Stars = styled.div` 
margin-left: 20px;
`
export const ReviewTime = styled.div`
text-align: right;
width: 42%;
`

export const FixedFooter = styled.div`
position: fixed;
bottom: 0;
left: 0;
width:100%;
`
export const CommentBottom = styled.div``
export const ViewAllComments = styled.div``
export const BottomButtons = styled.div`
display: flex;
`

export const Likes = styled(GrayBigButton)`
border-top-left-radius:28px ;
border-bottom-left-radius:28px ;
`
export const Comments = styled(GrayBigButton)`
border-top-right-radius:28px ;
border-bottom-right-radius:28px ;
margin-left: 1px;
`

export const CommentInput = styled.input`
width: 414px;
height: 31px;
border: 1px solid #EBEBEB;
border-radius: 3px;
outline: none;
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  box-sizing: border-box;
`
export const CommentButton = styled(BaseButton)`
width:120px;
height: 31px;
`
export const HideComment = styled.p`
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
text-align: right;

color: #E47D31;
`
export const UsersComments = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
border-top: 1px solid #EBEBEB;


:not(:last-child) {
  
}

`
export const UsersCommentsLeft = styled.div``
export const UserNamee = styled.p`
font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #E47D31;
`
export const TheComment = styled.p`
font-family: 'Helvetica';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: #000000;
`
export const UsersCommentsRight = styled.div``
export const CommentDate = styled.p`
font-family: 'Helvetica';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
text-align: right;
color: #000000;
`

// 
// 
// export const UsersComments = styled.div``