import React from "react";
import styled from "styled-components";
//////// Imported Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Login from "../components/Login";
//////// Routing
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const LoginPage = () => {
    return (
        <>
        <NavBar/>
        <Login/>
        <Footer/>
        </>
    )
}

export default LoginPage;