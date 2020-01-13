const initialState = { background: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case "CHANGE__BACKGROUND":
      return {
        ...state,
        background: action.payload
      };
    default:
      return state;
  }
}
