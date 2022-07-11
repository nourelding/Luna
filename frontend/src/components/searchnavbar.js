import React from 'react';
import {SearchBox, SearchBar, Label} from "../styles/searchnavbar.js"
import useFetch from '../useFetch.js';
import '../styles/usermap.css'

const SearchNavBar = () => {
    const {data,isPending, error} = useFetch('https://luna.propulsion-learn.ch/backend/api/category/list/');
    return ( 
        <SearchBox>
        <SearchBar placeholder="Search" ></SearchBar>
        <Label for="category">Select a category...</Label>
        <select name="category" id="category">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && data.map(data => (
        <option value={data.name}>{data.name}</option>
        ))};
        </select>
        
    </SearchBox>
    );
}

export default SearchNavBar;