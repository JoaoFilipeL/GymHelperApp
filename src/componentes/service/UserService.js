import axios from "axios";

class UserService{
    static BASE_URL = "https://localhost:8080"

    static async login(email, password){
        try{
            const response = await axios.post(`${UserService.BASE_URL}/auth/login`, {email, password})
            return response.data;

        }catch(error){
            throw error;
        }
    }

    static async register(userData, token){
        try{
            const response = await axios.post(`${UserService.BASE_URL}/auth/register`, userData, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(error){
            throw error;
        }
    }

    /**AUTHENTICATION CHECKER */
    static logout(){
        localStorage.removeItem('token')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }

}

export default UserService;