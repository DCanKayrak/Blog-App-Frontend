import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navi from './component/Navbar/Navi';
import Showcase from './component/Showcase/Showcase';
import BlogList from './component/BlogList/BlogList';
import BlogPost from './component/BlogPost/BlogPost';
import AboutMe from './component/AboutMe/AboutMe';
import Footer from './component/Footer/Footer';
import Admin from './component/Admin/Admin';

function App() {
  return (
    <div className="App">
      {/* <Dashboard/> */}
      <Navi/>
      <Showcase/>
      <Routes>
            <Route exact path='/' element={<BlogList />} />
            <Route exact path='/:id' element={<BlogPost/>} />
            <Route exact path='/admin' element={<Admin/>}/>
      </Routes>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
