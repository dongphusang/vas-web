import NavBar from "./layouts/navbar/NavBar";
import Footer from "./layouts/footer/Footer"
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Team from "./pages/Team";
import Memory from "./pages/Memory";
import JoinUs from "./pages/JoinUs";


function App() {
  return <>
    {/* <NavBar/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/memory" element={<Memory />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/join" element={<JoinUs />} />
    </Routes>
    <Footer/>
  </>
}

export default App;