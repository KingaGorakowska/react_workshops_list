import axios from "axios"

export const getAllWorkshops = async (page:number) => {

    console.log(page);
    try {

        const res = await axios.get(`https://motointegrator.com/api/search/v4/workshop?districts=wawer&locale=en&market=PL&page=${page}&perPage=20&query=warszawa`);
        return res.data;
        
    } catch (error) {
        throw error 
    }

};

export const getRecommendedWorkshops = async () => {

    try {

        const res = await axios.get("https://dev.mi.csp-dev.az.intercars.local/api/search/v4/recommended-workshops?market=PL&locale=pl&geoLat=52.2341&geoLng=20.98");
        return res.data;
        
    } catch (error) {
        throw error 
    }

};

export const getAll = async () => {
    try {

        const res = await axios.get(`https://motointegrator.com/api/search/v4/workshop?districts=wawer&locale=en&market=PL&page=${1}&perPage=81&query=warszawa`);
        return res.data;
        
    } catch (error) {
        throw error 
    }

}