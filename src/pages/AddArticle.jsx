import { redirect } from "react-router-dom";
import AddArticleForm from "../components/AddArticleForm";
import { useActionData } from "react-router-dom";
const AddArticlePage = () => {
  const data = useActionData();
  return (
    <>
      <h1>Add Article</h1>
      {data && data.status && <p>{data.message}</p>}
      <AddArticleForm method="post" action={"/add"} />
    </>
  );
};

export default AddArticlePage;

export async function action({ request }) {
  const token = localStorage.getItem("token");
  const formData = await request.formData();
  const article = {
    title: formData.get("title"),
    description: formData.get("body"),
  };
  if (
    article.title.trim().length < 5 ||
    article.description.trim().length < 10
  ) {
    return { message: "Invalid input data provided.", status: 422 };
  }

  const response = await fetch("https://josemmb.pythonanywhere.com/articles/", {
    method: "POST",
    body: JSON.stringify(article),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Could not add your article, please try again later");
  }

  return redirect("/");
}
