import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const createNotebook = (term: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE_NOTEBOOKS,
      payload: "22",
    });
  };
};
