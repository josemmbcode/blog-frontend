import classes from "./BlogPost.module.css";
import { Link, Form } from "react-router-dom";
function BlogPost({ title, text, published, isAuthor }) {
  return (
    <article className={classes.post}>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>Published: {published.slice(0, 10)}</p>
      <Link to="update">
        {isAuthor && <button className={classes.green}>Update</button>}
      </Link>
      <Form method="delete" action="delete">
        {isAuthor && <button className={classes.red}>Delete</button>}
      </Form>
    </article>
  );
}

export default BlogPost;
