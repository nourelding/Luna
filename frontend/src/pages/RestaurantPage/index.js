import React from "react";
import RestaurantFilter from "../../components/RestaurantFilter";
import {MdOutlineWatchLater} from 'react-icons/md'
import {GiMoneyStack} from 'react-icons/gi'
import {AiOutlineStar} from 'react-icons/ai'
import Footer from "../../components/Footer";
import useFetchAuthorized from '../../useFetchAuthorization.js';
import RestaurantHero from '../../components/RestaurantHero'
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


  FixedFooter,
  } from '../../styles/RestaurantPage'


const RestaurantPage = () => {
  const {data:reviews,isPending, error} = useFetchAuthorized('http://127.1.1.1:8000/backend/api/reviews/restaurant/1/'); //custom hook to fetch data
  const {data:rest,isPending:pend, error:err} = useFetchAuthorized('http://127.1.1.1:8000/backend/api/restaurants/6/'); //custom hook to fetch data
  const {data:comment,isPending:pendComment, error:errComment , dataLenght} = useFetchAuthorized('http://127.1.1.1:8000/backend/api/review/comment/1/'); //custom hook to fetch data


  return ( 
    <MainRestaurantPage>
      <RestaurantHero />

      <HeroContent>
        <HeroContentLeft>
        <RestaurantFilter />

          <RestaurantComments>
            {error &&<div>{error}</div>}
            {isPending && <div>Loading...</div>}
            
            {reviews && reviews.map(data => (
              
              <SingleComment key={data.id}>
                {console.log(data.length)}
              <CommentUsertinfo>
                <UserPic></UserPic>
                <UserWrapper>
                  <UserName>{data.user}</UserName>

                  <UserTottalReviews>{data.total_reviews}</UserTottalReviews>
                </UserWrapper>
                <Stars>
                  <AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" /><AiOutlineStar size="1.5rem" />
                </Stars>
                <ReviewTime>{data.created.slice(0,10)}</ReviewTime>
              </CommentUsertinfo>

              <CommentBottom>
                <CommentContent>{data.content}</CommentContent>
                <CommentLikes>
                  <BottomButtons>
                    <Likes>Likes {data.likes}</Likes>
            {err &&<div>{err}</div>}
            {pend && <div>Loading...</div>}
            {  comment ? 
                    <Comments>Comments {dataLenght}
                    </Comments>
            :null }
                  </BottomButtons>
                  <ViewAllComments>View all comments</ViewAllComments>
                </CommentLikes>
              </CommentBottom>
            </SingleComment>
            ))}
          </RestaurantComments>

        </HeroContentLeft>

        
        {err &&<div>{err}</div>}
            {pend && <div>Loading...</div>}
            {  rest ?  
              <HeroContentRight>
              <RestaurantTime> <MdOutlineWatchLater /> {rest.opening_hours}</RestaurantTime>
              <PriceLevel><GiMoneyStack /> Price level:{rest.price_level} </PriceLevel>
              <Buttons>
                <WriteReview>Write a review</WriteReview>
                <EditData>Edit data</EditData>
              </Buttons>
            </HeroContentRight>:null }

 

        
      </HeroContent>

      <FixedFooter>
        <Footer />
      </FixedFooter>
    </MainRestaurantPage>


   );
}
 
export default RestaurantPage;

