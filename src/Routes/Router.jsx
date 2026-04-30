import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../components/Home/Home";
import AllPropertiesPage from "../Pages/AllPropertiesPage";
import AddPropertyPage from "../Pages/AddPropertyPage";
import MyPropertiesPage from "../Pages/MyPropertiesPage";
import MyReviewsPage from "../Pages/MyReviewsPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import TermsPage from "../Pages/TermsPage";
import PrivacyPage from "../Pages/PrivacyPage";
import NotFoundPage from "../Pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "properties",
        Component: AllPropertiesPage,
      },
      {
        path: "add-property",
        Component: AddPropertyPage,
      },
      {
        path: "my-properties",
        Component: MyPropertiesPage,
      },
      {
        path: "my-reviews",
        Component: MyReviewsPage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "signup",
        Component: SignupPage,
      },
      {
        path: "terms",
        Component: TermsPage,
      },
      {
        path: "privacy",
        Component: PrivacyPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
