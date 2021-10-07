import { Component } from "react";
import PropTypes from "prop-types";

import {
  Header,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from "./Searchbar.styled";

export default class Searchbar extends Component {
  state = {
    request: "",
  };

  handleChange = (e) => {
    this.setState({ request: e.currentTarget.value.trim() });
  };

  handleSubmit = (e) => {
    const { request } = this.state;

    e.preventDefault();
    if (request === "") {
      alert("What are you looking for??");

      return;
    }

    this.props.onSubmit(request);

    this.setState({ request: "" });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            name="request"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.request}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
