import Navigation from "./Components/NavBar/Navigation";
import Banner from "./Components/Banner/Banner";
import Posts from "./Components/Posts/Posts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <Posts />
    </>
  );
}

export default App;
