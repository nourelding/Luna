import React from "react";
import styled from "styled-components";
import { SaveButton, EditContainer, EditTitle, FormTitle, UserInput, LoveUserInput, DescriptionUserInput, DeleteAccount, SaveContainer, Space } from "../../styles/editUserProfile";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import useFetchAuthorized from "../../useFetchAuthorization";
const EditUserProfile = () => {
    const {data:profile,isPending, error} = useFetchAuthorized('http://127.0.0.1:8000/backend/api/me/');
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [username,setUsername] = useState();
    const [location,setLocation] = useState();
    const [lastName,setLastName] = useState();
    const [phone,setPhone] = useState();
    const [firstName,setFirstName] = useState();
    const [description,setDescription] = useState();
    const [love,setLove] = useState();

    const updateFirstName = (event) =>{
        setFirstName(event.target.value);
    }
    const updateEmail = (event) =>{
        setEmail(event.target.value);
    }
    const updateUsername = (event) =>{
        setUsername(event.target.value);
    }
    const updateLocation = (event) =>{
        setLocation(event.target.value);
    }
    const updateLastName = (event) =>{
        setLastName(event.target.value);
    }
    const updatePhone = (event) =>{
        setPhone(event.target.value);
    }
    const updateDescription = (event) =>{
        setDescription(event.target.value);
    }
    const updateLove = (event) =>{
        setLove(event.target.value);
    }
    const updateProfile = (event) => {
        event.preventDefault();
        const url = "http://127.0.0.1:8000/backend/api/me/";
        const data = {
            email:email,
            username:username,
            phone:phone,
            first_name:firstName,
            last_name:lastName,
            location:location,
            description:description,
            loved_things:love,
        };
        console.log(data)
        const fetchConfig = {
            method: "PATCH",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`,
            }),
            body: JSON.stringify(data),
        };
        fetch(url,fetchConfig)
        .then((response) => {
            console.log(response)
            return response.json();
        })
    }
    const deleteProfile = (event) => {
        event.preventDefault();
        const url = "http://127.0.0.1:8000/backend/api/me/";
        const data = {
            email:email,
            username:username,
            phone:phone,
            first_name:firstName,
            last_name:lastName,
            location:location,
            description:description,
            loved_things:love,
        };
        console.log(data)
        const fetchConfig = {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`
            }),
            body: JSON.stringify(data),
        };
        fetch(url,fetchConfig)
        .then((response) => {
            console.log(response)
        return response.json();
        })
    }
    return (
        <>
        <EditContainer>
            <EditTitle>EDIT USER PROFILE</EditTitle>
            {error &&<div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {  profile ? <>
            <FormTitle>Username</FormTitle>
            <UserInput onChange={updateUsername} type="text" placeholder={profile.username} ></UserInput>
            <FormTitle>First name</FormTitle>
            <UserInput onChange={updateFirstName} type="text" placeholder={profile.first_name}></UserInput>
            <FormTitle>Last name</FormTitle>
            <UserInput onChange={updateLastName} type="text" placeholder={profile.last_name}></UserInput>
            <FormTitle>E-Mail</FormTitle>
            <UserInput onChange={updateEmail} type="email" placeholder={profile.email}></UserInput>
            <FormTitle>Location</FormTitle>
            <UserInput onChange={updateLocation} type="text" placeholder={profile.location}></UserInput>
            <FormTitle >Phone</FormTitle>
            <UserInput onChange={updatePhone} type="text" placeholder={profile.phone}></UserInput>
            <FormTitle>Things I love</FormTitle>
            <LoveUserInput onChange={updateLove} type="text" placeholder={profile.loved_things}></LoveUserInput>
            <FormTitle>Description</FormTitle>
            <DescriptionUserInput onChange={updateDescription} type="text" placeholder={profile.description}></DescriptionUserInput>
            </> :null}
        </EditContainer>
        <SaveContainer>
            <SaveButton onClick={updateProfile}>Save</SaveButton>
            <Space></Space>
            <DeleteAccount onClick={deleteProfile}>Delete account</DeleteAccount>
        </SaveContainer>

       </>
    )
}

export default EditUserProfile;

// at the moment only the placeholders are possible, if one chooses to use values the fields are not changeable anymore... Only idea left is to fetch before the return and put it already in the useState not sure if this works..