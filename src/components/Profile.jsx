import CreateCard from "./Card";
import Box from "@mui/material/Box";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
function Profile() {
  const collectCard = useSelector((state) => state.blog.collectCard);
  return (
    <div className="profile">
      <NavBar />
      <h2>Your Own Blogs</h2>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", width: "90%", margin: "auto" }}
        justifyContent="center"
        gap={3}
      >
        {collectCard.map((el) => (
          <CreateCard
            key={el.counter}
            name={el.name}
            content={el.content}
            counter={el.counter}
          />
        ))}
      </Box>
    </div>
  );
}

export default Profile;
