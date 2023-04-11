export const ADD_COMPANY = "ADD_COMPANY";
export const DELETE_COMPANY = "DELETE_COMPANY";
export const FETCH_RESULT = "FETCH_RESULT";
export const RESET_RESULT = "RESET_RESULT";
export const AddCompanyAction = (data) => {
  return { type: ADD_COMPANY, payload: data };
};

export const DeleteCompanyAction = (index) => {
  return { type: DELETE_COMPANY, payload: index };
};
export const resetResultsAction = () => ({ type: RESET_RESULT });
export const getCompanyAction = (params) => {
  return async (dispatch) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: FETCH_RESULT, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getJobsAction = (query) => {
  return async (dispatch) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: FETCH_RESULT, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
