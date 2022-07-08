import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Datec from './components/Datec';
import Description from './components/Description';
import Image from './components/Image';
import Name from './components/Name'
import Secure from './components/Secure';


function App() {
  return (
    <div>


<Routes>
  <Route exact path='/' element={<Navbar/>}></Route>
  <Route element={<Secure />}>
  <Route
    path="/Name"
    element={<Name heading="Your Name" />}
  ></Route>
  <Route
    path="/Image"
    element={<Image heading="Image" />}
  ></Route>
  <Route
    path="/Description"
    element={<Description heading="Description" />}
  ></Route>
  <Route
    path="/CreatedDate"
    element={<Datec heading="DateCreated" />}
  ></Route>
    </Route>
</Routes>
    </div>
  );
}

export default App;
