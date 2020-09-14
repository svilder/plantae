import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Accept, Content-Type',
    'Access-Control-Allow-Credentials': 'true'
  }
});
