import React from 'react';
import ReactDOM from 'react-dom';


import '../src/css/styles.css';
import '../src/css/animations.css';
import '../src/css/styles2.css';


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './components/root';
import WeatherProject from './project_pages/weatherProject';
import ImageBotProject from './project_pages/imagebotProject';
import KeeperAppProject from './project_pages/keeperAppProject';



// react-scripts --openssl-legacy-provider start
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: "<h1>Error</h1>",
  },
  {
    path: "/weatherapp",
    element: <WeatherProject />,
  },
  {
    path: "/imagebot",
    element: <ImageBotProject/>,
  },
  {
    path: "/keeperapp",
    element: <KeeperAppProject/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);













// Appearing Animation 

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);