import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/loginPage"
import Home from "./pages/homePage";
import PrivateLayout from "./layouts/privateLayouts";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/login' element = {<Login />} />
        <Route element ={<PrivateLayout />}>
          <Route path = '/' element = {<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
