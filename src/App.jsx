import "./App.css";
import MainPage from "./components/pageLayout/mainSection/index";
import NavBar from "./components/navBar";
import AboutUs from "./components/pageLayout/aboutUsSection";
import VendooPage from "./components/pageLayout/vendooPage";
// import FirstProfile from "./components/pageLayout/firstProfile";
import JobPixel from "./components/pageLayout/jobpixel";
// import SecondProfile from "./components/pageLayout/secondProfile";
import Descola from "./components/pageLayout/descola";
// import ThirdProfile from "./components/pageLayout/thirdProfile";
// import Specialties from "./components/pageLayout/specialties";
// import Form from "./components/pageLayout/forms";
function App() {
  const divStyle = {
    background: "linear-gradient(288deg, #0038a7 1.5%, #004ba0 91.6%)",
    height: "90vh",
  };

  return (
    <>
      <div style={divStyle}>
        <NavBar />
        <MainPage />
      </div>
      <AboutUs />
      <VendooPage />
       {/* <FirstProfile /> */}
       <JobPixel />
       {/* <SecondProfile /> */}
       <Descola />
       {/* <ThirdProfile /> */}
       {/* <Specialties /> */}
       {/* <Form />  */}
    </>
  );
}

export default App;
