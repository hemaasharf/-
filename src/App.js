import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import './App.css';
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
