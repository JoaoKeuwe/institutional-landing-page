import "./App.css";
import MainPage from "../src/components/pageLayout/index";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <div style={{ background: 'blue', margin: 0 }}>

        <NavBar />

        <MainPage />
      </div>
    </>
  );
}

export default App;
