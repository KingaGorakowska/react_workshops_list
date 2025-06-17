import './styles/main.scss';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import Navbar from './components/header/navbar/Navbar';
import WorkshopsPage from './pages/WorkshopsPage';
import Footer from './components/footer/Footer';


function App() {
const routes = [
  {
    title:"home", 
    path:"/",
    element:<HomePage/>
  },
  {
    title:"workshops",
    path:"/workshops",
    element:<WorkshopsPage/>
  },
  {
    title:"favorite",
    path:"/favorite",
    element:<FavoritePage/>
  }  

];
  return (
    <>
      <Router>
          <Navbar/>
          <div className="content">
                <Routes>
                   {routes.map((r:any)=><Route path={r.path} element={r.element}/>)}
                </Routes>
          </div>
          <Footer/>
      </Router>
    </>
  )
}

export default App
