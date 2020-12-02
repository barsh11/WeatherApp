import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from '../../services/axios-locations';
import useDebounce from '../../hooks/useDebounce';
import Input from "../../components/UI/Input/Input";

const SSearch= styled.form`
    min-width: 80%;

    position: relative;
`;

const SInput= styled(Input)`
    margin: 0 auto;
`;

const SUl= styled.ul`
    list-style: none;
    font-size: 2rem;
    background-color: white;
    width: 70rem;
    position: absolute;
    top: 8rem;
    left: 20rem;
    padding: 2rem;
`;

const SLi= styled.li`
`;

const Sa= styled.a`
    
    &:hover{
        cursor: pointer;
        color: #236f82;
    }
`;

const Search = (props) => {
    const [searchInput, setSearchInput]= useState('');
    const [results, setResults]= useState([]);
    const [isSearching, setIsSearching]= useState(false);
    const [location, setLocation]= useState(null);
    const [isShown, setIsShown]= useState(false);

    const debouncedSearchInput= useDebounce(searchInput, 500); 

    useEffect(() => {
        if (debouncedSearchInput){
            setIsSearching(true);
            props.onSearch(isSearching);

            const query= debouncedSearchInput;
            if (query){
                axios.get('', {
                    params: {...axios.params, q: query}
                })
                .then(res => {
                    setIsSearching(false);
                    props.onSearch(isSearching);
                    let limitedResults= [];
                    const limit= 10;
                    for (let i=0 ; i < limit ; i++){
                        if(res.data[i]){
                            limitedResults[i]= {...res.data[i]};
                        }
                    }
                    setResults(limitedResults);
                    setIsShown(true);
                })
                .catch(err => {
                    console.log(err); // to be exchanged with the error modal
                    return [];
                })
            }
        } else{
            setResults([]);
        }
    }, [debouncedSearchInput])

    useEffect(() => {
        if(location){
            props.onLocationChoice(location);
        }
    }, [location])

    useEffect(() => {
        if(!isShown){
            setSearchInput('');
        }
    }, [isShown])

    const clickHandler= (chosenLocationIndex) => {
        if(results.length>0){
            const chosenLocation= {...results[chosenLocationIndex]};
            setLocation({locationKey: chosenLocation.Key, city: chosenLocation.LocalizedName, countryId: chosenLocation.Country.ID});
            setIsShown(false);
        }
    }

   let content;
    if(results.length>0){
        content= (
            <SUl>
                {results.map((el, i) => 
                <SLi
                key= {el.Key}>
                    <Sa onClick={e => clickHandler(i)}>{el.LocalizedName}, {el.Country.LocalizedName}</Sa>
                </SLi>)}
            </SUl>
        )
    }

    return(
        <SSearch
        className= {props.className}>
            <SInput 
            changed= {e => setSearchInput(e.target.value)}
            value= {searchInput}/>
            {isShown && content}
        </SSearch>
    );
};

export default Search;