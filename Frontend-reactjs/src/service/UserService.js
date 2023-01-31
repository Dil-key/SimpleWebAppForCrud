import { axiosInstance } from "./Service";

// const EMPLOYEE_API_BASE_URL = "";

class UserService {
    addUser(user) {
      return axiosInstance.post('/addUser',user);
    }

    getOneUser(userNo) {
      const response = axiosInstance.get('/'+`${userNo}`);
      console.log(response);
      return response;
    }

    getAllUserLife() {
        const response = axiosInstance.get('/life');
        console.log(response);
        return response;
      }

      getUserProperty() {
        const response = axiosInstance.get('/property');
        console.log(response);
        return response;
      }

      getUserMotor() {
        const response = axiosInstance.get('/motor');
        console.log(response);
        return response;
      }

      deleteUser(userNo){
          return axiosInstance.delete('/deleteUser/'+`${userNo}`)
      }

      updateUser(userNo,user){
          return axiosInstance.put('/updateUser/'+`${userNo}`,user)
      }

}

export default new UserService();