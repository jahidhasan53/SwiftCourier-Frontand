// Set your FastAPI backend URL in the .env file as VITE_API_URL.
const baseUrl =
  import.meta.env.VITE_API_URL || 'https://swiftcourier-backend-r0hu.onrender.com';

export default baseUrl;
