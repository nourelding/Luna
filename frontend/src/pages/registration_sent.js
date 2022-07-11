import React from "react";
import styled from "styled-components";
//////// Imported Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RegistrationSent from "../components/RegistrationSent";
//////// Routing
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";



const RegistrationSentPage = () => {
    return (
        <>
        <NavBar/>
        <RegistrationSent/>
        <Footer/>
        </>
    )
}

export default RegistrationSentPage;