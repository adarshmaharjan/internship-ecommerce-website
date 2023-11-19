import "./App.css";
import { GlobalContext } from "./context/global.context";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/home.page";
import ShopPage from "./routes/shop.page";
import Navbar from "./component/navbar/navbar.component";

function App() {
  return (
    <>
      <GlobalContext.Provider value={undefined}>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </main>
        <footer></footer>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
