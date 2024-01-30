import { useEffect, useState } from "react";
import {
  useNavigate,
  createSearchParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";

const SearchForm = ({ products, setFiltered }) => {
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const [value, setValue] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const filtered = products.filter((val) => {
      const found = val.attributes.find((ele) => {
        return ele.name.toLowerCase().match(value.toLowerCase());
      });
      return val.name.toLowerCase().match(value.toLowerCase()) || found;
    });
    if (
      selectedSuggestionIndex > filtered.length - 1 &&
      filtered.length - 1 >= 0
    ) {
      setSelectedSuggestionIndex(filtered.length - 1);
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(filtered);
    }
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchParams({
        product: value,
      });
      setFiltered(filteredSuggestions);
      setValue("");
    }
    if (e.key === "ArrowDown") {
      if (selectedSuggestionIndex < filteredSuggestions.length - 1) {
        setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
      }
    }
    if (e.key === "ArrowUp") {
      setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
      if (selectedSuggestionIndex > 0) {
        setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
      } else if (selectedSuggestionIndex === 0) {
        setSelectedSuggestionIndex(selectedSuggestionIndex * 0);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname.includes("/s")) {
      setSearchParams({
        product: value,
      });
      setFiltered(filteredSuggestions);
      setValue("");
    } else {
      navigate({
        pathname: "s",
        search: createSearchParams({
          product: value,
        }).toString(),
      });
      setFiltered(filteredSuggestions);
      setValue("");
    }
  };
  return (
    <Wrapper>
      <StyledButton
        onClick={handleSubmit}
        style={{ padding: "8px 10px" }}
        type="submit"
      >
        Search
      </StyledButton>
      <Form>
        <Input
          type="text"
          name="s"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={(e) => setValue(e.target.value.replace(/[^a-z0-9 ]/gi, ""))}
          autoComplete="off"
        ></Input>
        <Ul>
          {value !== "" &&
            filteredSuggestions[0] &&
            filteredSuggestions.map((suggestion, index) => {
              let isSelected = false;
              const selectedTitle =
                filteredSuggestions[selectedSuggestionIndex].id;
              if (selectedTitle === suggestion.id) {
                isSelected = true;
              }
              const valLength = value.length;
              const firstHalf = suggestion.name.slice(0, valLength);
              const secondHalf = suggestion.name.slice(valLength);
              return (
                <Li
                  key={index}
                  style={{
                    backgroundColor: isSelected
                      ? "hsla(50deg, 100%, 80%, 0.25)"
                      : "transparent",
                  }}
                  onClick={(e) => {
                    navigate(
                      `/products/${suggestion.permalink.split("/")[4]}/${
                        suggestion.permalink.split("/")[5]
                      }/${suggestion.slug}`,
                      {
                        state: {
                          id: `${suggestion.id}`,
                          slug: `${suggestion.slug}`,
                          product: `${JSON.stringify(suggestion)}`,
                        },
                      }
                    );
                    localStorage.setItem(
                      `${suggestion.slug}`,
                      JSON.stringify(suggestion)
                    );
                  }}
                  onMouseEnter={() => setIsSelected(true)}
                >
                  <span>
                    {firstHalf}
                    <span style={{ fontWeight: "bold" }}>{secondHalf}</span>
                  </span>
                </Li>
              );
            })}
        </Ul>
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  margin-left: 150px;
  @media screen and (max-width: 1024px) {
    margin-left: 10px;
  }
`;

const Ul = styled.ul`
  position: absolute;
  background-color: white;
  z-index: 998;
  margin-top: 40px;
  width: auto;
  & :hover {
    background-color: hsla(50deg, 100%, 80%, 0.25);
  }
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Li = styled.li`
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0;
  margin-bottom: 0;
  z-index: 999;
  border: 1px solid black;
`;

const Form = styled.form`
  width: 60%;
  padding: 0 10px 0 10px;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0px 10px;
  }
`;
export default SearchForm;
