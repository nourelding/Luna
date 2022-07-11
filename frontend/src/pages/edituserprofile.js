import React from "react";
import styled from "styled-components";
//////// Imported Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EditUserProfile from "../components/EditUserProfile";
//////// Routing
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";



const EditUserProfilePage = () => {
    return (
        <>
        <NavBar/>
        <EditUserProfile/>
        <Footer/>
        </>
    )
}

export default EditUserProfilePage;