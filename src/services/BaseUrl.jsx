// Set your FastAPI backend URL in the .env file as VITE_API_URL.
export const baseUrl =
  import.meta.env.VITE_API_URL || 'https://swiftcourier-backend-3.onrender.com';

export default baseUrl;
