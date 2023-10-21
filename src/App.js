import logo from "./logo.svg";
import "./App.css";
import Hero from "./compenents/Hero/Hero";
import Programs from "./compenents/Programs/Programs";
import Reasons from "./compenents/Reasons/Reasons";
import Plans from "./compenents/Plans/Plans";
import Testimonials from "./compenents/Testimonials/Testimonials";
import Join from "./compenents/Join/Join";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
    </div>
  );
}

export default App;
