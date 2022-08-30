export const retriveBlog = () => {
  if (localStorage.getItem("blog")) {
    return JSON.parse(localStorage.getItem("blog"));
  }
};
