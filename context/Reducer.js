export const controlerReducer = (state, action) => {
  switch (action.type) {
    case "DIV-UPDATE":
      return { ...state, divSize: action.value };
    case "SIDES-UPDATE":
      return { ...state, sides: action.value };
    case "VERTICEDIV-UPDATE":
      return {
        ...state,
        verticeDiv: action.value,
      };
  }
};
