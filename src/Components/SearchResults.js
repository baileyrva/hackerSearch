import React, { Component } from "react";
import { connect } from "react-redux";

class SearchResults extends Component {
  handleSearchResults = () => {
    if (this.props.results.length === 0) {
      return <p className="text-info p-3 m-2">Search Something!</p>;
    } else {
      const { results } = this.props;
      return (
        <div>
          {results.map((result) => {
            return (
              <ul>
              <a
                href={result.url}
                key={result.objectID}
              >
                <strong className="text-dark">{result.title}</strong>
              </a>
              </ul>
            );
          })}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="search-results">
        <div className="row">
            <div>
              <h1 className="text-light">Results</h1>
            </div>
          </div>
          <div className="row m-3">
            <div>
              {this.handleSearchResults()}
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};

export default connect(mapStateToProps)(SearchResults);
