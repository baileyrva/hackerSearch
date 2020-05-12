import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import SearchHistory from "./components/SearchHistory";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-5 text-center">
          <div className="row">
            <div className="col-6">
              <SearchResults />
            </div>
            <div className="col-6">
              <SearchHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
