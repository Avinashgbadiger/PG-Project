import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8888/api/emp";

 
export const listEmp = () =>{

    return fetch(REST_API_BASE_URL);  

}
