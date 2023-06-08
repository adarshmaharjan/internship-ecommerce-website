import "./App.css";
import { GlobalContext } from "./context/global.context";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/home.page";
import ShopPage from "./routes/shop.page";

function App() {
  return (
    <>
      <GlobalContext.Provider value={undefined}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
