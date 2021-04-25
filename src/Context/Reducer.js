import { Actiontypes } from "./Actiontypes";
export const Initialstate = {
  notes: [{ title: "Welcome", note: "Make some awesome note here" }],
  editnote: [],
};

export const reducer = (state = Initialstate, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case Actiontypes.SET_NOTE:
      return { ...state, notes: [...state.notes, payload] };
      break;
    case Actiontypes.DELETE_NOTE:
      return {
        ...state,
        notes: [...state.notes.filter((s) => s.title !== payload.title)],
      };
      break;
    case Actiontypes.EDIT_NOTE:
      return { ...state, ...state?.editnote?.push(payload) };
    default:
      return state;
  }
};
