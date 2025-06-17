import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

interface SkeletonPlaceHolderProps{
    length:number
}

const SkeletonPlaceHolder :React.FC<SkeletonPlaceHolderProps> =  ({length}) => {

    return(
        <Box sx={{ width: 300, padding: 1 }}>
            {Array.from({ length }).map((_, index) => (
                <Skeleton sx={{ width:"100%", height:"100%"}} key={index} />
            ))}
        </Box>
    )



}
export default SkeletonPlaceHolder;