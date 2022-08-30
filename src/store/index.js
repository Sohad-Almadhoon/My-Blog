import { configureStore } from "@reduxjs/toolkit";
import { LogIn } from "../reducer/LogIn";
import { createBlog } from '../reducer/CreateBlog';
import { retriveBlog } from "../middleware";
export const store = configureStore({
  reducer: { auth: LogIn.reducer, blog: createBlog.reducer },
  preloadedState:retriveBlog(),
});
