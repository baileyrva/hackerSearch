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
        <div>
          <h1>Previous</h1>

          <div>
            <div>
              {searches.map((search) => {
                return (
                  <ul>
                    <button
                      className="btn btn-info"
                      id={search}
                      onClick={this.previousSearch}
                    >
                      {search}
                    </button>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searches: state.searches,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResults: (query) => dispatch(fetchResults(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);
