import { redirect, useLoaderData } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import { Outlet } from "react-router-dom";
function PostDetailPage() {
  const postData = useLoaderData();
  return (
    <>
      <BlogPost
        title={postData.article.title}
        text={postData.article.description}
        published={postData.article.published}
        isAuthor={postData.user.username === postData.article.author}
      />
      <Outlet />
    </>
  );
}

export default PostDetailPage;

export async function loader({ params }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  const response = await fetch(
    `https://josemmb.pythonanywhere.com/articles/${params.slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const article = await response.json();
  const fetchedUser = await fetch(
    `https://josemmb.pythonanywhere.com/dj-rest-auth/user`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }
  );

  if (!fetchedUser.ok) {
    throw new Error("Something went wrong");
  }
  const user = await fetchedUser.json();
  return { article, user };
}
