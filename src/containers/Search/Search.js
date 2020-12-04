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

/*$bp-largest: 75em; //1200px
$bp-large: 68.75em; //1100px
$bp-medium: 56.25em; //900px
$bp-small:  37.5em; //600px
$bp-smallest: 31.25em; //500px*/

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

  const {onLocationChoice}= props;

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
        setIsSearching(false);
        setResults(limitedResults);
        setIsShown(true);
      }
    })
    .catch((err) => {
      console.log(err); // to be exchanged with the error modal
      return [];
    });
  }, [])

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
        setResults([]);
      }
    }

    return () => {
      isActive= false;
    }
  }, [debouncedSearchInput, getState]);

  useEffect(() => {
    if (location) {
      onLocationChoice(location);
    }
  }, [location, onLocationChoice], getState);

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
