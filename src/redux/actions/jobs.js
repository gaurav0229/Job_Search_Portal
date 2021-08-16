import { RETRIEVE_JOBS} from "./types";
  
  import JobDataService from "../services/job.service";
  
  export const retrieveJobs = () => async (dispatch) => {
    try {
      const res = await JobDataService.getAllJobs();
  
      dispatch({
        type: RETRIEVE_JOBS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const findJobByjobTitle = (jobTitle) => async (dispatch) => {
    try {
      const res = await JobDataService.findByjobTitle(jobTitle);
  
      dispatch({
        type: RETRIEVE_JOBS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const findJobByjobLocation = (jobLocation) => async (dispatch) => {
    try {
      const res = await JobDataService.findByjobLocation(jobLocation);
  
      dispatch({
        type: RETRIEVE_JOBS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const findJobByjobSkillSet = (jobSkillSet) => async (dispatch) => {
    try {
      const res = await JobDataService.findByjobSkillSet(jobSkillSet);
  
      dispatch({
        type: RETRIEVE_JOBS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
    
  };

  export const findJobByjobId = (jobId) => async (dispatch) => {
    try {
      const res = await JobDataService.findByjobId(jobId);
  
      dispatch({
        type: RETRIEVE_JOBS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
    
  };