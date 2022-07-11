import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useSelector,useDispatch } from 'react-redux';
//////// Imported Styles
import {
ContentContainer,
RegistrationTitle,
InputContainer, 
InputTop, 
InputBottom, 
VerificationInput, 
OrangeLine, 
SubmitButton,
LabelInputField,
Categoryy,
Country,
VerificationInputImage,
LabelInputFieldImage,
InputWrapper,
InputWrapperImage,


} from '../../styles/NewRestaurant';
//////// Logos and Icons




const RegistrationVerification = () => {

  const token = localStorage.getItem('token')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [category,setCategory] = useState("");
  const [country,setCountry] = useState("");
  const [street,setStreet] = useState("");
  const [city ,setCity ] = useState("");
  const [website,setWebsite] = useState("");
  const [zip,setZip] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [opening,setOpening] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");
  const [status,setStatus] = useState();
    console.log(token);
    const url = "http://127.0.0.1:8000/backend/api/restaurants/new/";
    // const tokenUrl ="http://127.0.0.1:8000/backend/api/token/"

    const completeRegistration = (event) => {
            
        event.preventDefault();
        const body = {
            name: name,
            category: category,
            country: country,
            street: street,
            city: city,
            zip: zip,
            website: website,
            phone: phone,
            email: email,
            opening_hours: opening,
            price_level:price,
            // image:image,
        };
        const fetchConfig = {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`,
            }),
            body: JSON.stringify(body),
        };
        console.log(body)
        // console.log(body)
        fetch(url,fetchConfig)
        .then((response) => {
            console.log(response)
            setStatus(response.status)
        return response.json();
        })
        if (status === 201){
        navigate("/home")
        }
        else if(status === 405) {
          console.log("bad request 405")
        }
        
    }

    return (
        
        <div>
          <NavBar />
        <ContentContainer>
            <RegistrationTitle>Create new restaurant</RegistrationTitle>
            <OrangeLine/>
            <InputContainer>
                <InputTop>
                
                    <InputWrapper>
                    <LabelInputField htmlFor="name">Name *:</LabelInputField>
                    <VerificationInput  required onChange={ event => setName(event.target.value)} id ='name' type="text" />
                    </InputWrapper>

                    <InputWrapper>
                    <LabelInputField htmlFor="Categoryy">Category *:</LabelInputField>
                    <Categoryy onChange={ event => setCategory(event.target.value)} required id="Categoryy" name = 'category'>
                        <option value='category'>Select Category</option>
                        <option value='1'>Category1</option>
                        <option value='2'>Category2</option>
                        <option value='3'>Category3</option>
                        <option value='4'>Category4</option>
                        <option value='5'>Category5</option>
                        <option value='6'>Category6</option>
                        <option value='7'>Category7</option>
                        <option value='8'>Category8</option>
                        <option value='9'>Category9</option>
                        <option value='10'>Category10</option>

                    </Categoryy>
                    </InputWrapper>
                    
                    <InputWrapper>
                    <LabelInputField  required htmlFor="country">Country *:</LabelInputField>
                    <Country onChange={ event => setCountry(event.target.value)} required id="country" name = 'country'>
                        <option value='category'>Select Country</option>
                        <option value='Country1'>Country1</option>
                        <option value='Country2'>Country2</option>
                        <option value='category3'>Country3</option>
                        <option value='category4'>Country4</option>
                        <option value='category5'>Country5</option>
                        <option value='category6'>Country6</option>
                        <option value='category7'>Country7</option>
                        <option value='category8'>Country8</option>
                        <option value='category9'>Country9</option>
                        <option value='category10'>Country10</option>
                    </Country>
                    </InputWrapper>

                    <InputWrapper>
                    <LabelInputField htmlFor="street">street *:</LabelInputField>
                    <VerificationInput required onChange={ event => setStreet(event.target.value)} id ='street' type="text"/>
                    </InputWrapper>

                    <InputWrapper>
                    <LabelInputField htmlFor="city">City *:</LabelInputField>
                    <VerificationInput required onChange={ event => setCity(event.target.value)} id ='city' type="text" />
                    </InputWrapper>

                    <InputWrapper>
                    <LabelInputField htmlFor="zip">Zip *:</LabelInputField>
                    <VerificationInput required onChange={ event => setZip(event.target.value)} id ='zip' type="text"/>
                    </InputWrapper>
                </InputTop>
                <InputBottom>

                     <InputWrapper>
                    <LabelInputField htmlFor="Website">Website:</LabelInputField>
                    <VerificationInput  onChange={ event => setWebsite(event.target.value)} id ='Website' type="text" />
                    </InputWrapper>

                    <InputWrapper>
                    <LabelInputField htmlFor="phone">Phone *:</LabelInputField>
                    <VerificationInput required onChange={ event => setPhone(event.target.value)} id ='phone' type="text"/>
                    </InputWrapper>

                    <InputWrapper>
                    <LabelInputField htmlFor="email">Email:</LabelInputField>
                    <VerificationInput onChange={ event => setEmail(event.target.value)} id='email' type="email" />
                    </InputWrapper>

                    <InputWrapper>
                    <LabelInputField htmlFor="opening-hours">Opening hours *:</LabelInputField>
                    <VerificationInput required onChange={ event => setOpening(event.target.value)} id ='opening-hours' type="text"/>
                    </InputWrapper>

                    <InputWrapper>
                    <LabelInputField htmlFor="price">Price level:</LabelInputField>
                    <VerificationInput onChange={ event => setPrice(event.target.value)} id ='price' type="text" />
                    </InputWrapper>

                    <InputWrapperImage>
                    <LabelInputField htmlFor="image">Image:</LabelInputField>
                    <LabelInputFieldImage htmlFor="image">Choose a file...</LabelInputFieldImage>
                    <VerificationInputImage onChange={ event => setImage(event.target.value)} id ='image' type="file" />
                    </InputWrapperImage>
                </InputBottom>
            <SubmitButton onClick={completeRegistration}>SUBMIT</SubmitButton>

            {/* <InputWrapper>
                    <LabelInputField htmlFor="price">Price level:</LabelInputField>
                    <VerificationInput onChange={ event => setPrice(event.target.value)} id ='price' type="select" />
                    </InputWrapper> */}
            </InputContainer>
        </ContentContainer>
          <Footer />  
        </div>

    )
}

export default RegistrationVerification;