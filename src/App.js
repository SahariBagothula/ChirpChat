import "./App.css";
import { useContext } from "react";



import { Toaster } from "react-hot-toast";


import { AuthenticationContext } from "./Contexts/AuthenticationContext";
import { AppRouts } from "./routes/Route";
import { SideBar } from "./Pages/sidebar/SideBar";
import { Users } from "./Pages/users/Users";

function App() {
  const { isSignIn } = useContext(AuthenticationContext);
  return (
    <div className="App">
      <Toaster position="bottom-right" reverseOrder={false} />
      {isSignIn && <SideBar />}
      <AppRouts />
      {isSignIn && <Users />}
    </div>
  );
}

export default App;