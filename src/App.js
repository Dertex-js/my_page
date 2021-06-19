import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
