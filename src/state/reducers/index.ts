import { combineReducers } from "redux";
import repostioriesReducer from "./repositoriesReducers";

const reducers = combineReducers({
  repositories: repostioriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
