export const backgroundAction = payload => dispatch => {
  dispatch({
    type: "CHANGE__BACKGROUND",
    payload
  });
};
