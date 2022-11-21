// Ucitavamo ReactDOM objekat
import ReactDOM from "react-dom/client";

// Ucitavamo css
import "./index.css";
import App from "./App";

// Zadajemo gde bi se React aplikacija trebalo nalaziti
// U ovom slucaju je to selektovan div element sa id root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
