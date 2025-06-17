import type { Filters } from "../../../types/types";

                
interface FilterWorkshopSelectProps{
    filters:Filters|null;
    handleOnChange:(key:any, value:any)=>void,
};

const FilterWorkshopSelect :React.FC<FilterWorkshopSelectProps>= ({filters,handleOnChange}) => {
    return(
        <div className="filters-nav">
            {/* <select className="select-filters" onChange={(e)=>handleOnChange("additional",e.target.value)}> 
                <option value="">Additional</option>
                {filters?.additional.map((f:any)=> <option key={f.name} value={f.name}>{f.name}</option>)}
            </select>
            <select className="select-filters" onChange={(e)=>handleOnChange("availability",e.target.value)}>
                <option value="">Availability</option>
                {filters?.availability.map((f:any)=> <option key={f.name} value={f.name}>{f.name}</option>)}
            </select> */}
            <select className="select-filters" onChange={(e)=>handleOnChange("brands",e.target.value)}>
                <option value="">Brands</option>
                {filters?.brands.map((f:any)=> <option key={f.name} value={f.name}>{f.name}</option>)}
            </select>
            <select className="select-filters" onChange={(e)=>handleOnChange("districts",e.target.value)}>
                <option value="">Districts</option>
                {filters?.districts.map((f:any)=> <option key={f.name} value={f.name}>{f.name}</option>)}
            </select>
            <select className="select-filters" onChange={(e)=>handleOnChange("networks",e.target.value)}>
                <option value="">Networks</option>
                {filters?.networks.map((f:any)=> <option key={f.name} value={f.name}>{f.name}</option>)}
            </select>
        </div>
    )

}

export default FilterWorkshopSelect;
