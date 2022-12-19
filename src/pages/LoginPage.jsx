import LoginForm from "../components/LoginForm";
import { redirect } from "react-router-dom";
import { useActionData } from "react-router-dom";
function LoginPage() {
  const data = useActionData();
  return (
    <>
      <h1>Login here</h1>
      {data && data.status && <p>{data.message}</p>}
      <LoginForm />
    </>
  );
}

export default LoginPage;

export async function action({ request }) {
  const formData = await request.formData();
  const credentials = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const response = await fetch(
    "https://josemmb.pythonanywhere.com/dj-rest-auth/login/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  );

  const resullt = await response.json();

  if (resullt.key === undefined) {
    return { message: "Invalid username or password", status: 500 };
  }

  localStorage.setItem("token", resullt.key);

  return redirect("/");
}
