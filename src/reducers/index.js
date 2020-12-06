import { createStore, applyMiddleware , combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import {rentalsReducer,rentalByIdReducer} from './rentals-reducers'
import { composeWithDevTools } from "redux-devtools-extension";

//const loggerMiddleware = createLogger();
    const reducer = combineReducers({
        rentals:rentalsReducer,
        rental:rentalByIdReducer
    })
export const store = createStore(
  reducer
  //composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);