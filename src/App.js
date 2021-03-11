import AppProvider from "./context/Context.provider";
import { Main } from "./components/Main";

function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;
