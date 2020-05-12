import axios from "axios";

export const fetchResults = (query) => {
  return (dispatch) => {
    return axios
      .get("https://hn.algolia.com/api/v1/search?query=" + query)
      .then((response) => {
        const results = response.data.hits;
        dispatch({ type: "FETCH_RESULTS", results });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_RESULTS_ERROR", err });
      });
  };
};
