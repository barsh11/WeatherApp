import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { axiosLocations as axios } from "../../services/axios";
import useDebounce from "../../hooks/useDebounce";
import Input from "../../components/UI/Input/Input";
import Loader from '../../components/UI/Loader/Loader';

const SSearch = styled.form`
  min-width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

const SUl = styled.ul`
  list-style: none;
  font-size: 2rem;
  background-color: white;
  width: 60rem;
  position: absolute;
  top: 8rem;
  margin: auto auto auto 4.5rem;
  padding: 2rem;

  box-shadow: 4px 2px 15px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 56.25em) {
    width: 65%;
    margin: auto auto auto 3rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 50%;
  }
`;

const SLi = styled.li`
  padding: 4px 2px;

  &:not(:last-child)::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ccc;
    display: block;
  }
`;

const Sa = styled.a`
  &:hover {
    cursor: pointer;
    color: #236f82;
  }
`;

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [location, setLocation] = useState(null);
  const [isShown, setIsShown] = useState(false);

  const debouncedSearchInput = useDebounce(searchInput, 500);

  const {onLocationChoice, init, onError}= props;

  const initState= useCallback(() => {
    /*setResults([]);*/
    setSearchInput('');
    setResults([]);
    setIsSearching(false);
    setLocation(null);
    setIsShown(false);
  }, [])

  useEffect(() => {
    if(init){
      initState();
    }
  }, [init, initState]);

  const getState= useCallback((query, isActive) => {
    axios
    .get("", {
      params: { ...axios.params, q: query },
    })
    .then((res) => {
      let limitedResults = [];
      const limit = 10;
      for (let i = 0; i < limit; i++) {
        if (res.data[i]) {
          limitedResults[i] = { ...res.data[i] };
        }
      }
      if(isActive){
        setResults(limitedResults);
        setIsShown(true);
        setIsSearching(false);
      }
    })
    .catch((err) => {
      onError(err);
      return [];
    });
  }, [onError]);

  useEffect(() => {
    let isActive= true;

    if (debouncedSearchInput) {
      setIsSearching(true);
      const query = debouncedSearchInput;
      getState(query, isActive);
      /*axios
        .get("", {
          params: { ...axios.params, q: query },
        })
        .then((res) => {
          let limitedResults = [];
          const limit = 10;
          for (let i = 0; i < limit; i++) {
            if (res.data[i]) {
              limitedResults[i] = { ...res.data[i] };
            }
          }
          if(isActive){
            setIsSearching(false);
            setResults(limitedResults);
            setIsShown(true);
          }
        })
        .catch((err) => {
          console.log(err); // to be exchanged with the error modal
          return [];
        });*/
    } else {
      if (isActive){
        initState();
        /*setResults([]);*/
      }
    }

    return () => {
      isActive= false;
    }
  }, [debouncedSearchInput, onError, getState, initState]);

  useEffect(() => {
    if (location) {
      onLocationChoice(location);
    }
  }, [location, onLocationChoice]);

  useEffect(() => {
    if (!isShown) {
      setSearchInput("");
    }
  }, [isShown]);

  const clickHandler = (chosenLocationIndex) => {
    if (results.length > 0) {
      const chosenLocation = { ...results[chosenLocationIndex] };
      setLocation({
        locationKey: chosenLocation.Key,
        city: chosenLocation.LocalizedName,
        countryId: chosenLocation.Country.ID,
      });
      setIsShown(false);
    }
  };

  let content;
  if ((results.length > 0) && !isSearching) {
    content = (
      <SUl>
        {results.map((el, i) => (
          <SLi key={el.Key}>
            <Sa onClick={(e) => clickHandler(i)}>
              {el.LocalizedName}, {el.Country.LocalizedName}
            </Sa>
          </SLi>
        ))}
      </SUl>
    );
  } else if(isSearching){
    content= <SUl><SLi><Loader/></SLi></SUl>
  }

  return (
    <SSearch className={props.className}>
      <Input
        changed={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      {isShown && content}
    </SSearch>
  );
};

export default Search;
