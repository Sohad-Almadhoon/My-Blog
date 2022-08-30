import { createSlice } from "@reduxjs/toolkit";
const initialBlogState = { name: "", content: "", counter: 1, collectCard: [] };
const createBlog = createSlice({
  name: "Blog",
  initialState: initialBlogState,
  reducers: {
    getname(state, action) {
      state.name = action.payload;
    },
    getcontent(state, action) {
      state.content = action.payload;
    },
    getCounter(state) {
      state.counter++;
    },
    getcard(state, action) {
      state.collectCard.push(action.payload);
         localStorage.setItem("blog", JSON.stringify(({ blog: state })));
    },
    removecard(state, action) {
      state.collectCard = state.collectCard
        .filter((item) => {
          return item.counter !== action.payload;
        })
        .map((item, index) => {
          return { ...item, counter: index + 1 };
        });
      localStorage.setItem("blog", JSON.stringify(({ blog: state })));
    },
  },
});
const blogActions = createBlog.actions;
export { createBlog, blogActions };
