import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import useAppStore from "./store/store";

const queryClient = new QueryClient();

const App = () => {
  const { theme } = useAppStore((state) => state.theme);
  const { locale } = useAppStore((state) => state.locale);
  const {
    i18n: { changeLanguage },
  } = useTranslation();

  useLayoutEffect(() => {
    (document.querySelector("html") as HTMLElement).setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    changeLanguage(locale);
  }, [locale, changeLanguage]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
export default App;
