import { Rating } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
import engineSound from '../../assets/car-engine.mp3';
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteWorkshop, removeFavoriteWorkshop } from "../../redux/slices/favoriteWorkshopsSlice";
import type { RootState } from "../../redux/store";
import { useState } from "react";
import type { Workshop } from "../../types/types";

interface WorkshopItemProps {
    workshop:Workshop,
};

const WorkshopItem : React.FC<WorkshopItemProps> = ({workshop}) => {

    const dispatch = useDispatch();
    const [animate, setAnimate] = useState(false);

    const {favoriteWorkshops} = useSelector((state:RootState)=>state.favoriteWorkshopSlice);
    const isFavorite = favoriteWorkshops.some(item => item.name === workshop.name);

    const toggleFavorite = () => {
        if (isFavorite){
            dispatch(removeFavoriteWorkshop(workshop.name));
        }else{
            dispatch(addFavoriteWorkshop(workshop))
        }
    }

    // const addFavoriteItem = () => {
    //     dispatch(addFavoriteWorkshop(workshop));
        
    // };
    
    const handleClick = () => {
        const audio = new Audio(engineSound);
        audio.currentTime = 8;
        audio.play();
        toggleFavorite();
        setAnimate(true);
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 200);
    };

    return(
        <section className="workshop">
           <div className="workshop-card">
                 <div className="card-image"><img src={workshop.image} alt={workshop.name}/></div>
                 <div className="card-content">
                    <h3 className="card-title">{workshop.name}</h3>
                    <p className="card-address">
                       {workshop.address.street}, {workshop.address.postcode} {workshop.address.locality}        
                    </p>
                    <p className="card-phone">{workshop.phoneNumber}</p>
                     <span className="reviews">
                        <Rating 
                            value={workshop.reviews.score} 
                            readOnly/> ({workshop.reviews.count})
                        </span>
                 </div>
                 <div className="card-fav">
                    <Tooltip title={isFavorite? "Remove form favorites" : "Add to favorites"}>
                        {isFavorite? <FavoriteIcon onClick={handleClick} className={animate?'fav-animate':''}/> : <FavoriteBorderIcon onClick={handleClick} className={animate?'fav-animate':''}/>}
                    </Tooltip>
                 </div>
           </div>
            
        </section>
    )


}

export default WorkshopItem;