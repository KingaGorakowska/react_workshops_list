import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface initialStateType{

    favoriteWorkshops : any[];
    
}

const initialState :initialStateType= {
    favoriteWorkshops:[]
}

const favoriteWorkshopsSlice = createSlice({
    name:"favoriteWorkshops",
    initialState,
    reducers:{
        addFavoriteWorkshop:(state,action:PayloadAction<any>) => {
            const newWorkshop = action.payload;
            const existWorkshop = state.favoriteWorkshops.find(e => e.name === newWorkshop.name );
            if(existWorkshop) return;
            state.favoriteWorkshops.push(newWorkshop);
        },
        removeFavoriteWorkshop:(state,action:PayloadAction<any>) =>{
            const name = action.payload;
            const filteredFavoriteWorkshop = state.favoriteWorkshops.filter(e => e.name !== name);
            state.favoriteWorkshops = filteredFavoriteWorkshop;
        },
        removeAll:(state) =>{
            state.favoriteWorkshops = [];
        }
    }
})

export const { addFavoriteWorkshop, removeFavoriteWorkshop, removeAll } = favoriteWorkshopsSlice.actions;
export default favoriteWorkshopsSlice.reducer;