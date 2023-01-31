import { axiosInstance } from "./Service";

class ProfitService{
    addProfit(profit){
        return axiosInstance.post('/addProfit',profit);
    }

    async getProfit() {
        const response = await axiosInstance.get('/getProfit')
        return response;
    }
}

export default new ProfitService()
