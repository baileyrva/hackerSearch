import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchResults } from "../actions/resultsAction";

class SearchHistory extends Component {
  previousSearch = (event) => {
    this.props.fetchResults(event.target.id);
  };

  render() {
    const { searches } = this.props;
    return (
      <div className="search-results">
        <div className="row">
          <div className="col-12">
            <h1 className="text-light">Previous Searches</h1>
          </div>
        </div>
        <div className="row m-3 p-2 bg-dark text-light border border-info">
          <div className="col-12">
            <p>"Click on any previous search to search again.</p>
            {searches.map((search) => {
              return (
                <button
                  className="btn btn-info m-2"
                  id={search}
                  onClick={this.previousSearch}
                >
                  {search}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        searches: state.searches
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchResults: (query) => dispatch(fetchResults(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory)