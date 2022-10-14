import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import {videoAPI} from "../sevices/VideoServices";
import {categoriesAPI} from "../sevices/CategoriesServices";
import {mainTabsAPI} from "../sevices/MainTabsServices";
import {externalTabsAPI} from "../sevices/ExternalTabsServices";
import {channelsAPI} from "../sevices/ChannelsServices";
import {exploreAPI} from "../sevices/ExploreServices";
import {moreYoutubesAPI} from "../sevices/MoreYoutubesServices";
import {settingsAPI} from "../sevices/SettingsServices";

const rootReducer = combineReducers({
    userReducer,
    [videoAPI.reducerPath]: videoAPI.reducer,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [mainTabsAPI.reducerPath]: mainTabsAPI.reducer,
    [externalTabsAPI.reducerPath]: externalTabsAPI.reducer,
    [channelsAPI.reducerPath]: channelsAPI.reducer,
    [exploreAPI.reducerPath]: exploreAPI.reducer,
    [moreYoutubesAPI.reducerPath]: moreYoutubesAPI.reducer,
    [settingsAPI.reducerPath]: settingsAPI.reducer,
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