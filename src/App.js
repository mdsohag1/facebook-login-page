import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Deshboard from "./components/Deshboard/Deshboard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login";
function App() {
   return (
      <div className="App">
         <Header />
         <Login />
         <Footer />
      </div>
   );
}

export default App;
