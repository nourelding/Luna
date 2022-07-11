import React from "react";
import RestaurantFilter from "../../components/RestaurantFilter";
import {MdOutlineWatchLater} from 'react-icons/md'
import {GiMoneyStack} from 'react-icons/gi'
import {AiOutlineStar} from 'react-icons/ai'
import Footer from "../../components/Footer";
import useFetch from '../../useFetch.js';

import {
  MainRestaurantPage,
  HeroContent,
  HeroContentLeft,
  HeroContentRight ,
  RestaurantTime,
  PriceLevel,
  Buttons,
  WriteReview,
  EditData,
  RestaurantComments,
  SingleComment,
  CommentUsertinfo,
  UserPic,
  UserWrapper,
  UserName,
  Stars,
  ReviewTime,
  UserTottalReviews,
  CommentBottom,
  CommentContent,
  CommentLikes,
  BottomButtons,
  ViewAllComments,
  Likes,
  Comments,
  CommentInput,
  CommentButton,
  HideComment,
  UsersComments,
  UsersCommentsLeft,
  UsersCommentsRight,
  UserNamee,
  TheComment,
  CommentDate,




  FixedFooter,
  } from '../../styles/RestaurantCommentPage'

import RestaurantHero from '../../components/RestaurantHero'
const RestaurantCommentPage = () => {
  const {data:reviews,isPending, error} = useFetch('http://localhost:9000/restaurants-nour'); //custom hook to fetch data
  const {data:rest,isPending:pend, error:err} = useFetch('http://localhost:9000/restaurants-nour/3'); //custom hook to fetch data
  const {data:fullcomment,isPending:comentpend, error:commenterr} = useFetch('http://localhost:9000/restaurants-nour/3'); //custom hook to fetch data
  const {data:usercomment,isPending:userpend, error:usererror} = useFetch('http://localhost:9000/comments-nour'); //custom hook to fetch data
  return ( 
    <MainRestaurantPage>
      <RestaurantHero />

      <HeroContent>
        <HeroContentLeft>
        <RestaurantFilter />

          <RestaurantComments>

 {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}

          {error &&<div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {fullcomment &&
              <SingleComment key={fullcomment.id}>
              <CommentUsertinfo>
                <UserPic></UserPic>
                <UserWrapper>
                  <UserName>{fullcomment.username}</UserName>
                  <UserTottalReviews>{fullcomment.total_reviews}</UserTottalReviews>
                </UserWrapper>
                <Stars>
                  <AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" />
                </Stars>
                <ReviewTime>{fullcomment.openingtime}</ReviewTime>
              </CommentUsertinfo>

              <CommentBottom>
                <CommentContent>{fullcomment.comment}</CommentContent>
                <CommentLikes>
                  <CommentInput  type='text' name="filterlist" placeholder= 'Hide comments'/>
                  <CommentButton>POST</CommentButton>
                  <HideComment>Hide</HideComment>
                </CommentLikes>
                  {usererror &&<div>{usererror}</div>}
                  {userpend && <div>Loading...</div>}
                  {usercomment && usercomment.map(data => (
                <UsersComments>
                  <UsersCommentsLeft>
                    <UserNamee>{data.name}</UserNamee>
                    <TheComment>{data.comment}</TheComment>
                  </UsersCommentsLeft>
                  <UsersCommentsRight>
                    <CommentDate>{data.date}</CommentDate>
                  </UsersCommentsRight>
                </UsersComments>

            ))}


              </CommentBottom>
            </SingleComment>
}


            {commenterr && <div>{commenterr}</div>}
            {isPending && <div>Loading...</div>}
            {reviews && reviews.map(data => (
              <SingleComment key={data.id}>
              <CommentUsertinfo>
                <UserPic></UserPic>
                <UserWrapper>
                  <UserName>{data.username}</UserName>
                  <UserTottalReviews>{data.total_reviews}</UserTottalReviews>
                </UserWrapper>
                <Stars>
                  <AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" />
                </Stars>
                <ReviewTime>{data.openingtime}</ReviewTime>
              </CommentUsertinfo>

              <CommentBottom>
                <CommentContent>{data.comment}</CommentContent>
                <CommentLikes>
                  <BottomButtons>
                    <Likes>Likes {data.likes}</Likes>
                    <Comments>Comments {data.comments}</Comments>
                  </BottomButtons>
                  <ViewAllComments>View all comments</ViewAllComments>
                </CommentLikes>
              </CommentBottom>
            </SingleComment>
            
            ))}
          </RestaurantComments>

        </HeroContentLeft>

        
        {err &&<div>{err}</div>}
            {userpend && <div>Loading...</div>}
            {  rest ?  
              <HeroContentRight>
              <RestaurantTime> <MdOutlineWatchLater /> {rest.openingtime}</RestaurantTime>
              <PriceLevel><GiMoneyStack /> Price level:{rest.Price_level} </PriceLevel>
              <Buttons>
                <WriteReview>Write a review</WriteReview>
                <EditData>Edit data</EditData>
              </Buttons>
            </HeroContentRight> :null }

 

        
      </HeroContent>

      <FixedFooter>
        <Footer />
      </FixedFooter>
    </MainRestaurantPage>


   );
}
 
export default RestaurantCommentPage;

