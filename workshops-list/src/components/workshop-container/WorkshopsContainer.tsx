import WorkshopsList from "../workshops-list/WorkshopsList";
import useRecomendedWorkshop from "../hooks/useRecomendedWorkshop";


const WorkshopContainer = () => {
    const {workshops, error, isLoading} = useRecomendedWorkshop();

    return(
        <section><WorkshopsList workshops={workshops} isLoading={isLoading} 
        error={error}/> 
        
        </section>
    )

} 
export default WorkshopContainer;