import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Lounge from "./components/Lounge/Lounge";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Subcriber from "./components/Subcribers/Subcriber";
import Support from "./components/Support/Support";
import Travelers from "./components/Travelers/Travelers";
import './mian.css'



function App() {
  return <>
    <Navbar />
    <Home />
    <Search />
    <Support />
    <Info />
    <Lounge />
    <Travelers />
    <Subcriber />
    <Footer />
  </>;
}

export default App;
