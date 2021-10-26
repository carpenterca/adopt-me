import { createContext } from "react";

// const ThemeContext = createContext(["green", () => {}]);
const ThemeContext = createContext(["green", function () {}]);

export default ThemeContext;
