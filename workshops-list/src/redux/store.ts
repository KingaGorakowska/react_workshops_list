import { configureStore } from "@reduxjs/toolkit";
import favorieWorkshops from "./slices/favoriteWorkshopsSlice";

export const store = configureStore({
    reducer:{
        favoriteWorkshopSlice:favorieWorkshops,

    }


});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;