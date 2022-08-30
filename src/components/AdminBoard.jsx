import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogActions } from "../reducer/CreateBlog";
function AdminBoard() {
  const flag = useSelector((state) => state.auth.flag);
  const name = useSelector((state) => state.blog.name);
  const content = useSelector((state) => state.blog.content);
  const counter = useSelector((state) => state.blog.counter);
  const dispatch = useDispatch();
  const nameRef = useRef();
  const contentRef = useRef();
  function handleCreation(e) {
    e.preventDefault();
    dispatch(blogActions.getCounter());
    dispatch(
      blogActions.getcard({
        name,
        content,
        counter
      })
    );
  }

  return (
    <>
      {flag && (
        <div className="admin-board">
          <form action="" onSubmit={handleCreation}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter the name of the blog"
                ref={nameRef}
                onChange={() =>
                  dispatch(blogActions.getname(nameRef.current.value))
                }
              />
            </div>
            <div>
              <label>Content:</label>
              <textarea
                placeholder="Enter the content of the blog"
                ref={contentRef}
                onChange={() =>
                  dispatch(blogActions.getcontent(contentRef.current.value))
                }
              ></textarea>
            </div>
            <button className="create" type="submit">
              Create A New Blog
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default AdminBoard;
