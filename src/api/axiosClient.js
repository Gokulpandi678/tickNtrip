import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000",
    timeout:10000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)

export default apiClient;