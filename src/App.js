
import './App.css';
//import react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Test from './components/Test';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <p> Hello World </p>

        <a href="/test" style={{ color: "white", textDecoration: "none" }}>
          Click Here
        </a>
      </div>,
    },
    {
      path: "/test",
      element: <Test />,
    }
  ]);
  return (

    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
