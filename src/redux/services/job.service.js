import http from "../http-common";
import authHeader from "../../services/auth-header";

class JobDataService {
  getAllJobs() {
    return http.get("/api/getalljobs", { headers: authHeader() });
  }

  findByjobTitle(jobTitle) {
    return http.get(`/api/getjobbytitle/${jobTitle}`, { headers: authHeader() }); 
  }

  findByjobLocation(jobLocation) {
    return http.get(`/api/getjobbylocation/${jobLocation}`, { headers: authHeader() });
  }

  findByjobSkillSet(jobSkillSet) {
    return http.get(`/api/getjobbyskillset/${jobSkillSet}`, { headers: authHeader() });
  }

  findByjobId(jobId) {
    return http.get(`/api/getjobbyjobid/${jobId}`, { headers: authHeader() });
  }
  
  AddToCart(job,jobId){
    return http.get(`/api/addJobInBasket/${jobId}`,{ headers: authHeader() });
  }
   
  viewCart(){
    return http.get(`/api/viewJobBasket`,{ headers: authHeader() });
  }

  removeJob(job, jobId){
    return http.get(`/api/deleteFromBasket/${jobId}`,{ headers: authHeader() });
  }
}

export default new JobDataService();