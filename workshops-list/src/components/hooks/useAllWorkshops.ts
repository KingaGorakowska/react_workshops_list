import { useEffect, useState } from "react";
import { getAll} from "../../api/workshopsApi";
import type { Workshop } from "../../types/types";

const useAllWorkshops = () => {

const [allWorkshops,setAllWorkshops] = useState<Workshop[]>([]);
const [errorMessage,setErrorMessage] = useState<null|string>(null);


useEffect( ()=>{
    const fetchWorkshops = async() => {

        try {

            const result = await getAll();
            console.log(result);
            setAllWorkshops(result.results);
                
        } catch (error) {
            console.log(error);
            setErrorMessage("Something went wrong...")
        } 
}
fetchWorkshops();
},[]);
return{
    allWorkshops, errorMessage
}};

export default useAllWorkshops;