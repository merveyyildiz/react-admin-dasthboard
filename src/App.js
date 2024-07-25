import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./layouts/Topbar";
import SideBar from "./layouts/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import ProfileForm from "./pages/profileForm";
import Calendar from "./pages/calendar";
// import Bar from "./pages/bar";

// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";

// import Geography from "./pages/geography";

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
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/profile-form" element={<ProfileForm />} />
              <Route path="/calendar" element={<Calendar />} />
              {/*<Route path="/bar" element={<Bar />} />
             
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
       */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
