import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Piyush Jagtap",
    location: "Bengaluru, INDIA",
    email: "piyushjagtapyes@gmail.com",
    availability: "Open for work",
    brand:
      "Software Engineer, with experience working on various technologies and participating in Hackathons",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
