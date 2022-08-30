import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import { store } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="blogs" element={<Profile />} />
        <Route path="*" element={<h1>Erorr</h1>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
