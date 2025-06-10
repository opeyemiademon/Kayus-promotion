import axios from 'axios';

// Create a GraphQL client using Axios
const graphqlClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GRAPHQL_API_URL || 'http://localhost:4000/graphql',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
graphqlClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});


// Add response interceptor for error handling
graphqlClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  }
);

export default graphqlClient;
