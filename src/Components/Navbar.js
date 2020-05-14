import React, { Component } from "react";
import { connect } from "react-redux";
import { search } from "../actions/searchAction";
import { fetchResults } from "../actions/resultsAction";

class Navbar extends Component {
  state = {
    currentSearch: "",
  };

  handleInputChange = (event) => {
    let newSearch = event.target.value;

    this.setState({
      currentSearch: newSearch,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");

    this.props.search(this.state.currentSearch);

    this.props.fetchResults(this.state.currentSearch);
  };

  render() {
    return (
      <div>
        <nav className="hackerTitle">
          Hacker News
          <div className="row">
            <form className="searchBox" onSubmit={this.handleFormSubmit}>
              <input
                type="search"
                onChange={this.handleInputChange}
                placeholder="Search The News!"
                aria-label="Search"
              ></input>
            </form>
            <div className="row">
              <button
                className="btn"
                type="submit"
                onClick={this.handleFormSubmit}
              >
                Search
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searches: state.searches,
    results: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (terms) => {
      dispatch(search(terms));
    },
    fetchResults: (query) => dispatch(fetchResults(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
