interface NotebookState {
  // noteBookId: string;
  noteBookTitle: string;
  // noteId: string;
  // noteTitle: string;
  // noteContent: string;
  // createdAt: number;
  // updatedAt: number;
  // isTrash: boolean;
}
import { Action } from "../actions";
import { ActionType } from "../action-types";

const reducer = (state: NotebookState, action: Action): NotebookState => {
  switch (action.type) {
    case ActionType.CREATE_NOTEBOOKS:
      return { noteBookTitle: action.payload };
    default:
      return state;
  }
};

export default reducer;
