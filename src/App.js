// optional /* global React ReactDOM */ if using React from a global file source
// import React from "react";
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     [
//       React.createElement("h1", { class: "logo" }, "Adopt Me!"),
//       // Spread operator that concatenates array created to the array that it is inside of
//       // JS feature, not React
//       // ...[1,2,3,4].map((i) => React.createElement("h2", {}, i)),
//       React.createElement(Pet), // no longer has props so will not have values in the elements
//       React.createElement(Pet, {
//         name: "Kula",
//         animal: "Korok",
//         breed: "Green Leaf",
//       }),
//       React.createElement(Pet, {
//         name: "Hollow Knight",
//         animal: "Vessel",
//         breed: "Void",
//       }),
//       React.createElement(Pet, {
//         name: "Jinbei-san",
//         animal: "Whale Shark",
//         breed: "Sanrio",
//       }),
//     ]
//     // Or it can resolve without being in an array
//     // React.createElement("h1", { class: "logo" }, "Adopt Me!"),
//     // React.createElement(Pet),
//     // React.createElement(Pet),
//     // React.createElement(Pet),
//   );
// };

const App = () => {
   const themeHook = useState("darkblue");
   return (
      <ThemeContext.Provider value={themeHook}>
         <div>
            <Router>
               <header>
                  <Link to="/">
                     <h1>Adopt Me!</h1>
                  </Link>
               </header>
               <Switch>
                  <Route path="/details/:id">
                     <Details />
                  </Route>
                  <Route path="/">
                     <SearchParams />
                  </Route>
               </Switch>
            </Router>
            {/* <Pet name="Kula" animal="Korok" breed="Green Leaf" />
         <Pet name="Hollow Knight" animal="Vessel" breed="Void" />
         <Pet name="Jinbei-san" animal="Whale Shark" breed="Sanrio" /> */}
         </div>
      </ThemeContext.Provider>
   );
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(
   <StrictMode>
      <App />
   </StrictMode>,
   document.getElementById("root")
);
