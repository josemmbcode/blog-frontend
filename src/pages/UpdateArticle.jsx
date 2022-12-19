import AddArticleForm from "../components/AddArticleForm";
import { useMatches } from "react-router-dom";
import { redirect } from "react-router-dom";
const UpdateArticlePage = () => {
  const matches = useMatches();
  const articleInfo = matches[1].data.article;
  return (
    <>
      <AddArticleForm
        title={articleInfo.title}
        description={articleInfo.description}
        method={""}
        action={`/${articleInfo.slug}/update`}
      />
    </>
  );
};

export default UpdateArticlePage;

export async function action({ params, request }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  const formData = await request.formData();
  const article = {
    title: formData.get("title"),
    description: formData.get("body"),
  };

  const response = await fetch(
    `https://josemmb.pythonanywhere.com/articles/${params.slug}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(article),
    }
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return redirect(`/${params.slug}`);
}
