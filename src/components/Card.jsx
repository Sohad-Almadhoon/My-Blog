import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { blogActions } from "../reducer/CreateBlog";
const CreateCard = ({ name, content, counter }) => {
  const dispatch = useDispatch();
  function deleteBlog() {
    dispatch(blogActions.removecard(counter));
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image="https://www.justwords.in/wp-content/uploads/2021/02/How-to-Promote-Your-Blog.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ color: "#5439b1", fontWeight: 500 }}
            >
              {counter}
            </Typography>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ color: "#99154e" }}
            >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            sx={{ color: "#99154e" }}
            onClick={deleteBlog}
          >
            Delete
            <DeleteIcon sx={{ fontSize: 30 }} />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CreateCard;
