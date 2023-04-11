import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../Reducers/favouritesReducer";
import companyReducer from "../Reducers/companyReducer";
import jobsReducer from "../Reducers/jobsReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
  company: companyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
