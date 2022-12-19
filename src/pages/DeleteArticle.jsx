import { redirect } from "react-router-dom";
export async function action({ params }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }

  const response = await fetch(
    `https://josemmb.pythonanywhere.com/articles/${params.slug}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return redirect(`/`);
}
