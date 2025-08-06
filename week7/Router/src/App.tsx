import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Landing = lazy(() => import("./pages/Landing"));
const Notfound = lazy(() => import("./pages/Notfound"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <Suspense fallback={<b>loading... </b>}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
