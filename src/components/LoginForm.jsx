import { Form } from "react-router-dom";
import classes from "./LoginForm.module.css";
function LoginForm() {
  return (
    <Form className={classes.form} method="post" action="/login">
      <label htmlFor="username" className={classes.labels}>
        Username:
      </label>
      <input
        className={classes.actions}
        type="text"
        name="username"
        placeholder="Enter your username"
        required
        id="username"
      />
      <label htmlFor="password" className={classes.labels}>
        Password:
      </label>
      <input
        className={classes.actions}
        type="password"
        name="password"
        placeholder="Enter your password"
        required
        id="password"
      />
      <input className={classes.submitbtn} type="submit" value="Submit" />
    </Form>
  );
}

export default LoginForm;
