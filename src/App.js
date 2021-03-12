import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/Context.provider";
import { Main } from "./components/Main";

function App() {
  return (
    <AppProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </React.StrictMode>
    </AppProvider>
  );
}

export default App;
