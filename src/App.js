// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './parts/header/Header';
import Brands from './components/brands/Brands';
import Whatsgpt from './parts/whatsgpt/Whatsgpt';
import Features from './parts/features/Features';
import Possibilities from './parts/possibilities/Possibilities';
import Cta from './components/cta/Cta';
import Blog from './parts/blog/Blog';
import Footer from './parts/footer/Footer';

import Signin from './components/signin/Signin';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header/>
      </div>
      <Brands/>
      <Whatsgpt/>
      <Features/>
      <Possibilities/>
      <Cta/>
      {/* <Blog /> */}
      <Signin/>
      <Footer/>
    </div>
  );
}

export default App;
