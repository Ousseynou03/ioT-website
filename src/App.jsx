import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Service';
import About from './components/About';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Services/>
      <About/>
      <Blog/>
      <Newsletter/>
      <MyFooter/>
    </>
  )
}

export default App
