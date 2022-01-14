import { Action } from "./actionTypes";
import { State } from "./state";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_MENU_DATA":
      return {
        ...state,
        menu: {
          ...state.menu,
          data: action.payload,
        },
      };
    case "SET_SELECTED_ITEM":
      return {
        ...state,
        menu: {
          ...state.menu,
          selected: action.payload,
        },
      };
    default:
      return state;
  }
};
