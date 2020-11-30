import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from '../../services/axios-locations';
import Input from "../../components/UI/Input/Input";

const SForm= styled.form`

`;

const Search = (props) => {
    const [searchInput, setSearchInput]= useState('');
    const [results, setResults]= useState([]);
    const [isSearching, setIsSearching]= useState(false);
    

    useEffect(() => {
        
    })

    let searchField;

    return(
        <SForm>
            <Input />
        </SForm>
    );
};

export default Search;
