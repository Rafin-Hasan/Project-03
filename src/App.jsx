import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import LayoutOne from "./Layout/LayoutOne";
import Home from "./Pages/HomePage";
import WhatWeDoPage from "./Pages/WhatWeDoPAge";
import ServicePage from "./Pages/ServicePage";
import Project from "./Pages/Project";
import BlogPage from "./Pages/BlogPage";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path="/whatwedo" element={<WhatWeDoPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
