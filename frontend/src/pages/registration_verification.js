import React from "react";
import styled from "styled-components";
//////// Imported Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RegistrationVerification from "../components/RegistrationVerification";
//////// Routing
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";



const RegistrationVerificationPage = () => {
    return (
        <>
        <NavBar/>
        <RegistrationVerification/>
        <Footer/>
        </>
    )
}

export default RegistrationVerificationPage;