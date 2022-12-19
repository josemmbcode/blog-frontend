import { redirect } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { useActionData } from "react-router-dom";
const RegisterPage = () => {
  const actionData = useActionData();
  let errors = [];
  if (actionData) {
    for (let error in actionData) {
      actionData[error].forEach((element) => {
        errors.push(element);
      });
    }
  }
  return (
    <>
      <h2>Please register here</h2>
      {errors ? (
        <ul
          style={{
            backgroundColor: "#FFCCBA",
            color: "#D63301",
            maxWidth: "50%",
            margin: "auto",
            borderRadius: "2rem",
          }}
        >
          {errors.map((error) => (
            <li style={{ margin: "5px", padding: "10px" }} key={error}>
              {error}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      <RegisterForm />
    </>
  );
};

export default RegisterPage;

export async function action({ request }) {
  const formData = await request.formData();
  const credentials = {
    username: formData.get("username"),
    email: formData.get("email"),
    password1: formData.get("password"),
    password2: formData.get("confirm_password"),
  };

  const response = await fetch(
    "https://josemmb.pythonanywhere.com/dj-rest-auth/registration/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  );
  if (!response.ok) {
    if (response.status === 400) {
      return await response.json();
    } else {
      throw new Error("Something went wrong");
    }
  }
  const result = await response.json();
  localStorage.setItem("token", result.key);
  return redirect("/");
}
