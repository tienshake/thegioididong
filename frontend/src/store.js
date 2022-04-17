import noteReducers from "./store/reducers/noteReducer";
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import SetTransform from './Transforms';
const persistConfig = {
    key: 'store',
    storage,
    stateReconciler: autoMergeLevel2,
    // whitelist: ['Carts']
}

const persistedReducer = persistReducer(persistConfig, noteReducers);
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store)
export default store
export {
    persistor
}