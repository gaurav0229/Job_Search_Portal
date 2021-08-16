import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8084/api';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getAdminBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getEmployerBoard() {
    return axios.get(API_URL + 'emp', { headers: authHeader() });
  }

  getJsBoard() {
    return axios.get(API_URL + 'js', { headers: authHeader() });
  }
  
  // getalljob(){
  //   return axios.get(API_URL + 'getalljob', { headers: authHeader() });
  // }


}

export default new UserService();