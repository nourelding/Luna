import React from 'react'
import './App.css';
import LoginPage from './pages/login';
import RegistrationMailPage from './pages/registration_mail';
import RegistrationSentPage from './pages/registration_sent';
import Home from './pages/home';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import RegistrationVerificationPage from './pages/registration_verification';
import UserRestaurantPage from "./pages/userrestaurant";
import Restaurants from "./pages/restaurants.js";
import Review from "./pages/reviews.js";
import EditUserProfilePage from './pages/edituserprofile';
import RestaurantPage from "./pages/RestaurantPage";
import RestaurantCommentPage from "./pages/RestaurantCommentPage";
import WriteNewReview from "./pages/WriteNewReview";
import UserProfile from './pages/UserProfile';
import NewRestaurant from './pages/NewRestaurant';
import Users from './pages/users.js';
import RequireAuth from './components/RequireAuth/index.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/restaurants" element={<Restaurants/>} />
      <Route path="/reviews" element={<RequireAuth><Review/></RequireAuth>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/userprofile" element={<UserProfile/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/registrationsent" element={<RegistrationSentPage/>} />
      <Route path="/verification" element={<RegistrationVerificationPage/>} />
      <Route path="/registrationmail" element={<RegistrationMailPage/>} />
      <Route path="/userrestaurants" element={<UserRestaurantPage/>} />
      <Route path="/user/restaurants" element={<UserRestaurantPage/>} />
      <Route path="/user/edit" element={<EditUserProfilePage/>} />
      <Route path="/RestaurantPage" element={<RestaurantPage/>} />
      <Route path="/RestaurantCommentPage" element={<RestaurantCommentPage/>} />
      <Route path="/WriteNewReview" element={<WriteNewReview/>} />
      <Route path="/NewRestaurant" element={<NewRestaurant/>} />
    </Routes>
  );
}
export default App;