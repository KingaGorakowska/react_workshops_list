import { useEffect, useState } from "react";
import { getRecommendedWorkshops} from "../../api/workshopsApi";
import type { Workshop } from "../../types/types";

const useRecomendedWorkshop = () => {

const [workshops,setWorkshops] = useState<Workshop[]>([]);
const [isLoading,setIsLoading] = useState<boolean>(false);
const [error,setError] = useState<null|string>(null);


useEffect( ()=>{
    const fetchWorkshops = async() => {

        setIsLoading(true);
        try {

            const result = await getRecommendedWorkshops();
            setWorkshops(result.results);
                
        } catch (error) {
            setError("Something went wrong...")
        } finally{
            setIsLoading(false);
        }
}
fetchWorkshops();
},[]);
return{
    workshops, isLoading, error
}};

export default useRecomendedWorkshop;