import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  // { searcgRepositories: dispatch(searchRepositories)}
  return bindActionCreators(actionCreator, dispatch);
};
