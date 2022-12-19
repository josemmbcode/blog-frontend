import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import { loader as BlogPostLoader } from "./pages/Welcome";
import { loader as PostDetailLoader } from "./pages/PostDetail";
import PostDetailPage from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import LoginPage from "./pages/LoginPage";
import { action as loginAction } from "./pages/LoginPage";
import AddArticlePage from "./pages/AddArticle";
import { action as addArticleAction } from "./pages/AddArticle";
import RegisterPage from "./pages/RegisterPage";
import { action as registerAction } from "./pages/RegisterPage";
import UpdateArticlePage from "./pages/UpdateArticle";
import { action as updateAction } from "./pages/UpdateArticle";
import { action as deleteAction } from "./pages/DeleteArticle";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<p>Something went wrong! Please try again.</p>}
    >
      <Route path="/" index element={<WelcomePage />} loader={BlogPostLoader} />
      <Route
        path=":slug"
        element={<PostDetailPage />}
        loader={PostDetailLoader}
      >
        <Route
          path="update"
          element={<UpdateArticlePage />}
          action={updateAction}
        />
        <Route path="delete" action={deleteAction} />
      </Route>
      <Route path="/login" element={<LoginPage />} action={loginAction} />
      <Route
        path="/add"
        element={<AddArticlePage />}
        action={addArticleAction}
      />
      <Route
        path="/register"
        element={<RegisterPage />}
        action={registerAction}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
