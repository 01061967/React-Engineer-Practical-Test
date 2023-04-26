import { createStore, combineReducers } from "redux";
import bankReducer from "./reducers/bankReducer";


const rootReducer = combineReducers({
  banks: bankReducer,
});

const store = createStore(rootReducer);

export default store;
