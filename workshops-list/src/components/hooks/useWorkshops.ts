import { useEffect, useState } from "react";
import {getAllWorkshops} from "../../api/workshopsApi";
import type { Filters, Workshop } from "../../types/types";

const useWorkshops = (currentPage:number) => {

const [workshops,setWorkshops] = useState<Workshop[]>([]);
const [isLoading,setIsLoading] = useState<boolean>(false);
const [error,setError] = useState<null|string>(null);
const [total, setTotal] = useState(0);
const [totalPages, setTotalPages] = useState(0);
const [filters, setFilters] = useState<Filters|null>(null);



useEffect( ()=>{
    if(currentPage == 0) return;
    const fetchWorkshops = async() => {
        setError(null);
        setIsLoading(true);
        try {

            const result = await getAllWorkshops(currentPage);
            console.log(result);
            setWorkshops(result.results);
            setTotal(result.pagination.total);
            setTotalPages(result.pagination.totalPages);
            setFilters({
                additional:result.filters.additional,
                availability:result.filters.availability,
                brands:result.filters.brands,
                districts:result.filters.districts,
                networks:result.filters.networks
            });
            
        } catch (error) {
            console.log(error);
            setError("Something went wrong...")
        } finally{
            setIsLoading(false);
        }
}
fetchWorkshops();
},[currentPage]);

return{
    workshops, isLoading, error, total, totalPages, filters
}};

export default useWorkshops;