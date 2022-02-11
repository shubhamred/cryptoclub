import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePageComponents } from "./components/HomePageComponents";
import { Mintpages } from "./pages/mintpage/Mintpages";
import { Roadmap_page } from "./pages/roadmap/Roadmap_page";
import {AboutUs} from "./pages/AboutUs/AboutUs";
import {Team} from './pages/Team/Team';
import { Traits } from "./pages/Traits/Traits";
import { Community } from "./pages/Community/Community";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponents />} />
          <Route path="/mint" element={<Mintpages />} />
          <Route path="/roadmap" element={<Roadmap_page />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/traits" element={<Traits/>}/>
          <Route path="/community" element={<Community/>}/>
        </Routes>
      </BrowserRouter>       
    </div>
  );
}

export default App;
