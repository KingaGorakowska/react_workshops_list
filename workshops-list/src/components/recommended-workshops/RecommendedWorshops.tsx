import useRecomendedWorkshop from "../hooks/useRecomendedWorkshop";
import WorkshopsList from "../workshops-list/WorkshopsList";

const RecommendedWorkshops = () => {
    const { workshops, isLoading, error} = useRecomendedWorkshop();

    return(
        <section>
            <WorkshopsList workshops={workshops} isLoading={isLoading} error={error}/> 
        
        </section>
    )
    

}
export default RecommendedWorkshops;