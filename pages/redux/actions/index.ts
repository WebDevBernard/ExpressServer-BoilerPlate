import { ActionType } from "../action-types/index";

interface CreateNotebookAction {
  type: ActionType.CREATE_NOTEBOOKS;
  payload: string;
}

export type Action = CreateNotebookAction;
