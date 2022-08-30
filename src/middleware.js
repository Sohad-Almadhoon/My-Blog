export const localStorageMiddleWare =
  ({ getState }) =>
  (next) =>
  (action) => {
    localStorage.setItem("blog", JSON.stringify(getState()));
    return next(action);
  };
export const retriveBlog = () => {
  if (localStorage.getItem("blog")) {
    return JSON.parse(localStorage.getItem("blog"));
  }
};
