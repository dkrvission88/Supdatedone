import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
// import Login from './pages/Login'
// import Signup from'./pages/Signup'
// import Supplierlogin from './pages/Supplylogin'

// import Contractor1 from "./popup/Contractor1";

import Supplier from "./pages/Supplier";

// import Contact from './Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Supplier />}></Route>
         
          {/* <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Supplylogin" element={<Supplierlogin />}></Route> */}
         

         
        </Routes>
      </BrowserRouter>

      {/* <Contact/> */}

      {/* <Contractor1/> */}
      {/* <Supplierlogin/>  */}
      {/* <Signup/> */}
      {/* <Login/> */}
    </>
  );
}

export default App;
