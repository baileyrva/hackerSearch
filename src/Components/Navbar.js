import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from "../actions/searchAction"
import { fetchResults } from "../actions/resultsAction"

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
      <nav className="navbar navbar-expand-md stick-top navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Hacker News
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-0" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <form className="form-inline" onSubmit={this.handleFormSubmit}>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  onChange={this.handleInputChange}
                  placeholder="Search Hacker News!"
                  aria-label="Search"
                ></input>
                <button
                  className="btn btn-outline-info my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
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
    search: (terms) => { dispatch(search(terms));
    },
    fetchResults: (query) => dispatch(fetchResults(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar); 
