import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3001/',
    'Access-Control-Allow-Headers': 'Accept, Content-Type'
  }
});
