import NotFound from "pages/404";
import Dashboard from "pages/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
