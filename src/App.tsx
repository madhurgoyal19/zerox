import "./App.css";
import GhostWriter from "@/components/routes/GhostWriter";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import SidePanel from "./components/SidePanel";
import Humanizer from "./components/routes/Humanizer";
import Researcher from "./components/routes/Researcher";
import Translator from "./components/routes/Translator";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
  },
]);

function App() {
  return (
    <div className="bg-black w-full h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

function Root() {
  return (
    <div className="flex flex-row">
      <SidePanel />
      <Routes>
        <Route path="" element={<GhostWriter />} />
        <Route path="/ghost-writer" element={<GhostWriter />} />
        <Route path="/humanizer" element={<Humanizer />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/researcher" element={<Researcher />} />
      </Routes>
    </div>
  );
}

export default App;
