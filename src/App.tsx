import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/home.page";
import { GlobalContext } from "./context/global.context";

function App() {
  return (
    <>
      <GlobalContext.Provider value={undefined}>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
