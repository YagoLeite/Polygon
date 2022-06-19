export const controlerReducer = (state, action) => {
  switch (action.type) {
    case "DIV-UPDATE":
      return { ...state, divSize: action.value >= 1500 ? 1500 : action.value };
    case "SIDES-UPDATE":
      return { ...state, sides: action.value };
    case "VERTICEDIV-UPDATE":
      return {
        ...state,
        verticeDiv: action.value,
      };
    case "BIGDIVANIM-UPDATE":
      return {
        ...state,
        bigDivRotationAnim: action.value,
      };
    case "SMALLDIVANIM-UPDATE":
      return {
        ...state,
        smallDivRotationAnim: action.value,
      };
    case "FADEIN-UPDATE":
      return {
        ...state,
        fadeInAnim: action.value,
      };
    default:
      return state;
  }
};
