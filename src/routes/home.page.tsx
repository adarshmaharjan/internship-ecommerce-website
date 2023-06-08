import HomeComponent from "../component/home.component";
import Navbar from "../component/navbar/navbar.component";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomeComponent />
        
      </main>
      <footer></footer>
    </>
  );
};

export default HomePage;
