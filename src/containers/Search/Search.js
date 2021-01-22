import React, { useCallback, useState, useEffect } from "react";
import _ from "lodash";
import { axiosLocations as axios } from "../../services/axios";
import useDebounce from "../../hooks/useDebounce";
import { SSearch, SUl, SLi, Sa } from "./SearchStyle";
import Input from "../../components/UI/Input/Input";
import Loader from "../../components/UI/Loader/Loader";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchInput = useDebounce(searchInput, 500);

  const { onLocationChoice, init, onError } = props;

  const initState = useCallback(() => {
    setSearchInput("");
    setIsSearching(false);
    setResults([]);
  }, []);

  useEffect(() => {
    if (init) {
      initState();
    }
  }, [init, initState]);

  const getState = useCallback(async (query, isActive) => {
    setIsSearching(true);
    await axios
      .get("", {
        params: { ...axios.params, q: query },
      })
      .then((res) => {
        let limitedResults = [];
        const limit = 10;
        for (let i = 0; i < limit; i++) {
          if (res.data[i]) {
            limitedResults[i] = _.cloneDeep(res.data[i]);
          }
        }
        if (isActive) {
          setResults(limitedResults);
          setIsSearching(false);
        }
      })
      .catch((error) => {
        onError(Object.getOwnPropertyDescriptor(error, "message").value);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let isActive = true;

    if (debouncedSearchInput) {
      const query = debouncedSearchInput;
      getState(query, isActive);
    } else {
      if (isActive) {
        initState();
      }
    }

    return () => {
      isActive = false;
    };
  }, [debouncedSearchInput, getState, initState]);

  const clickHandler = (chosenLocationIndex) => {
    if (results.length) {
      const chosenLocation = { ...results[chosenLocationIndex] };
      setSearchInput("");
      setResults([]);
      onLocationChoice({
        locationKey: chosenLocation.Key,
        city: chosenLocation.LocalizedName,
        countryId: chosenLocation.Country.ID,
      });
    }
  };

  let content;

  if (results.length) {
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
  } else if (isSearching) {
    content = (
      <SUl>
        <SLi>
          <Loader />
        </SLi>
      </SUl>
    );
  } else {
    content = null;
  }

  return (
    <SSearch className={props.className}>
      <Input
        changed={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      {content}
    </SSearch>
  );
};

export default Search;
