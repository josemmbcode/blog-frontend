import { Form } from "react-router-dom";
import classes from "./AddArticleForm.module.css";
const AddArticleForm = ({ title, description, method, action }) => {
  return (
    <Form method={method} className={classes.form} action={action}>
      <label htmlFor="title">Title:</label>
      <br />
      <input type="text" id="title" name="title" defaultValue={title || ""} />
      <br />
      <label htmlFor="body">Body:</label>
      <br />
      <textarea
        id="body"
        name="body"
        rows="5"
        defaultValue={description || ""}
      ></textarea>
      <br />
      <input type="submit" value="Submit" />
    </Form>
  );
};

export default AddArticleForm;
