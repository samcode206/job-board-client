import axios from "axios";


const baseURL = axios.create({
    baseURL: "https://job-board-services.herokuapp.com"
});


export default baseURL; 