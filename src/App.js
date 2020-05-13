import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import SearchHistory from "./components/SearchHistory";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div className="rowC">
          <div className="searchResultsColumn">
            <SearchResults />
          </div>
          <div className="searchHistoryColumn">
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
