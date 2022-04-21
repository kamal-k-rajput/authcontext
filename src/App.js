import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import { LoginStatus } from "./components/LoginStatus";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Login></Login>
      <LoginStatus></LoginStatus>
    </div>
  );
}

export default App;
