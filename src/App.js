import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Topbar from "./layouts/Topbar";
import SideBar from "./layouts/Sidebar";

const routes = [
  {
    path: "/",
    name: "homePage",
    page: lazy(() => import("./pages/dashboard/index"))
  },
  {
    path: "/team",
    name: "teamPage",
    page: lazy(() => import("./pages/team/index"))
  },
  {
    path: "/contacts",
    name: "contactPage",
    page: lazy(() => import("./pages/contacts/index"))
  },
  {
    path: "/invoices",
    name: "invoicesPage",
    page: lazy(() => import("./pages/invoices/index"))
  },
  {
    path: "/profile-form",
    name: "profileFormPage",
    page: lazy(() => import("./pages/profileForm/index"))
  },
  {
    path: "/calendar",
    name: "calendarPage",
    page: lazy(() => import("./pages/calendar/index"))
  },
  {
    path: "/faq",
    name: "faqPage",
    page: lazy(() => import("./pages/faq/index"))
  },
  {
    path: "/bar",
    name: "barPage",
    page: lazy(() => import("./pages/bar/index"))
  },
  {
    path: "/pie",
    name: "piePage",
    page: lazy(() => import("./pages/pie/index"))
  },
  {
    path: "/line",
    name: "linePage",
    page: lazy(() => import("./pages/line/index"))
  },
  {
    path: "/geography",
    name: "geography",
    page: lazy(() => import("./pages/geography/index"))
  }
];

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              {routes.map((item) => (
                <Route path={item.path} key={item.name} element={<Suspense fallback={<div>Loading...</div>}><item.page /></Suspense>} />
              ))}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
