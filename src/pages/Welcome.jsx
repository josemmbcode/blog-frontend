import { useLoaderData, redirect } from "react-router-dom";
import Posts from "../components/Posts";
function WelcomePage() {
  const loadedData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loadedData} />
    </>
  );
}

export default WelcomePage;

export async function loader() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  const response = await fetch("https://josemmb.pythonanywhere.com/articles/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
}
