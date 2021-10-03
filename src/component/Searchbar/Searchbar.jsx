import PropTypes from "prop-types";

import {
  Header,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from "./Searchbar.styled";

const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e.target.elements.request.value);
        }}
      >
        <Button type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <Input
          type="text"
          name="request"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
