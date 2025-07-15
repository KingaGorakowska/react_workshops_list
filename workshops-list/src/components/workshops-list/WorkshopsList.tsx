import type { Workshop } from "../../types/types";
import SkeletonPlaceHolder from "../skeleton/SkeletonPlaceHolder";
import WorkshopItem from "../workshops-item/WorkshopItem";
interface WorkshopsListProps{
    workshops:Workshop[],
    isLoading?:boolean,
    error?:string|null,
    isFavorite?:boolean
};

const WorkshopsList:React.FC<WorkshopsListProps> = ({workshops, isLoading, error, isFavorite}) => {
    return(
        <section>
            {isLoading ? (
                <div className="workshops-grid">
                    <SkeletonPlaceHolder length={20}/>
                </div>
                ) : (
                <div>
                    {error ? (
                    <h3 className="error-message">{error}</h3>
                    ) : (
                    <div className="workshops-grid">
                        {!workshops || workshops.length === 0 ? (
                        <h3>{isFavorite ? "You haven't added any favorite workshops yet.":"There is no workshops."}</h3>
                        ) : (
                        workshops.map((w: Workshop,index:number) => <WorkshopItem key={index} workshop={w} />)
                        )}
                    </div>
                    )}
                </div>
            )}
        </section>
    )

}

export default WorkshopsList;