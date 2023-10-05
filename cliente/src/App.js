import './App.css';
import { DataProvider } from './context/DataContext';
import Routers from './router/Routers';
import NavBar from './views/NavBar';
import Footer from './views/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'swiper/swiper-bundle.css';

function App() {
  
  return (
    <DataProvider>
        <NavBar />
        <Routers />
        <Footer/>
    </DataProvider>
  );
}

export default App;
