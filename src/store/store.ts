import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import {videoAPI} from "../sevices/VideoService";
import {categoriesAPI} from "../sevices/CategoriesService";

const rootReducer = combineReducers({
    userReducer,
    [videoAPI.reducerPath]: videoAPI.reducer,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(videoAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']