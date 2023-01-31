import { axiosInstance } from "./Service";

class PastUserService{
    addPastUsers(user){
        return axiosInstance.post('/addPastUser',user);
    }

    async getAllPastUsers() {
        const response = await axiosInstance.get('/getAllPastUsers')
        return response;
    }
}

export default new PastUserService()