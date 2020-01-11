const useReducers = () => {
  const initialState = { menu: false };

  function reducer(state, action) {
    switch (action.type) {
      case false:
        return { count: action.type };
      case true:
        return { count: action.type };
      default:
        throw new Error();
    }
  }

  return { reducer, initialState };
};

export default useReducers;
