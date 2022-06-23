import axios from 'axios'
import {baseUrl} from '../Components/constants/constants'
const instance = axios.create({
    baseURL: baseUrl,
    
  });

  export default instance