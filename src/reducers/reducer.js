export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.playload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.playload] };
    case "DELETE_FAVS":
      let favsUpdated = state.favs.filter((fav) => fav.id !== action.playload);
      return { ...state, favs: favsUpdated };
    case "SWITCH_THEME":
      return { ...state, theme: action.playload };
    default:
      throw new console.error("Action no matched");
  }
};
