import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import itemReducer from "../reducers/itemReducer";
const configureStore = () => {
  const store = createStore(
    combineReducers({
      items: itemReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
