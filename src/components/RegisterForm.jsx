import { Form } from "react-router-dom";
import classes from "./RegisterForm.module.css";
const RegisterForm = () => {
  return (
    <Form className={classes.form} method="post">
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" placeholder="Username" id="username" />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" placeholder="Email" id="email" />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        id="password"
        autoComplete="on"
      />

      <label htmlFor="confirm_password">Confirm Password:</label>
      <input
        type="password"
        name="confirm_password"
        placeholder="Confirm Password"
        id="confirm_password"
        autoComplete="on"
      />

      <input type="submit" value="Submit" />
    </Form>
  );
};

export default RegisterForm;
