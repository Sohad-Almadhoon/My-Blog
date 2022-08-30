import React from "react";
import { useDispatch } from "react-redux";
import { LogInActions } from "../reducer/LogIn";
import { useSelector } from "react-redux";
function LogIn() {
  const flag = useSelector((state) => state.auth.flag);
  const dispatch = useDispatch();
  function handleCreation(e) {
    e.preventDefault();
    dispatch(LogInActions.logIn());
  }

  return (
    <>
      {!flag && (
        <div className="admin-board">
          <form action="" onSubmit={handleCreation}>
            <div>
              <label>Email:</label>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div>
              <label>Password:</label>
              <input placeholder="Enter your password" type="password" />
            </div>
            <button className="create" type="submit">
              Log In
            </button>
          </form>{" "}
        </div>
      )}
    </>
  );
}

export default LogIn;
