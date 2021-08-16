import axios from 'axios';
import authHeader from './auth-header';

const job_base_url="http://localhost:8084/api/getalljob";
const base_url="http://localhost:8084/api/postjob";
const base_url1="https://cors-anywhere.herokuapp.com/http://localhost:8084/job";
const base_url_edit="http://localhost:8084/api/editjob";
const base_url_delete="http://localhost:8084/api/deletejob";
const base_url_applicants= "http://localhost:8084/api/getjobseekerbyjobid";
 
class employerservice{
getAllJob (){
return(
axios.get(job_base_url , { headers: authHeader() })
);
}
postjob(job){
    return(
        axios.post("http://localhost:8084/api/postjob",job ,  { headers: authHeader() })
    )
}

getJobByJobId(jobId){
    return(
        axios.get(base_url1+'/'+jobId ,  { headers: authHeader() })
    );
}
updateJob(job,jobId){
    console.log("jobid=>"+jobId);
    return(
    //   axios.put(base_url_edit+'/'+jobId,job)
    axios.put(`${base_url_edit}/${jobId}`, job,   { headers: authHeader() }) 
    );
}
deleteJob(job,jobId){
    console.log("delete job ")
    return(
        axios.delete(`${base_url_delete}/${jobId}`,   { headers: authHeader() })
    )
}
getJobSeekerByJobId(jobId){
    console.log("Get applicants")
    return(
        axios.get(`${base_url_applicants}/${jobId}` ,  { headers: authHeader() })
    );
}
    
}
export default new employerservice();