import axios from "axios";


const baseURL = axios.create({
    baseURL: "http://ec2-35-164-223-25.us-west-2.compute.amazonaws.com:5000"
});


export default baseURL; 
