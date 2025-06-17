import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import WorkshopsList from "../components/workshops-list/WorkshopsList";
import type {RootState} from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from '../redux/slices/favoriteWorkshopsSlice';

const FavoritePage = () => {

    const {favoriteWorkshops} = useSelector((state:RootState)=>state.favoriteWorkshopSlice);
    const dispatch = useDispatch();
    return(
        <main className="container">
          <div className="row">
            <div className="col">
                <h1>Your favorite workshops, all in one place.</h1>
                <h2>Save your trusted car workshops here to easily find and manage them whenever you need.</h2>
                <div className='remove-favorite-button'>
                    {favoriteWorkshops.length> 0 && (
                      <Tooltip title="Remove all favorites">
                        <IconButton onClick={() => dispatch(removeAll())}>
                            <DeleteIcon/>
                        </IconButton>
                      </Tooltip>  
                    )}
                </div>
                <WorkshopsList workshops={favoriteWorkshops} isFavorite={true}/>
            </div>
          </div>
        </main>
    )


}
export default FavoritePage;