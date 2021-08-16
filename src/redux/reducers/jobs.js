import {RETRIEVE_JOBS} from "../actions/types";
  
  const initialState = [];
  
  function jobReducer(jobs = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      case RETRIEVE_JOBS:
        return payload;
  
      default:
        return jobs;
    }
  };
  
  export default jobReducer;