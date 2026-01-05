import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { cube, pi, graph } from "./my-module.js";

// Run module side-effects / logging before mounting the app
graph.options = {
  color: "blue",
  thickness: "3px",
};

graph.draw(); // Logs "From graph draw function"
console.log(cube(3)); // 27
console.log(pi);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

