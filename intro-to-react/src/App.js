import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header greeting="Hello World"/>
      <Footer companyName="Dunder Mifflin"/>
    </div>
  );
}

export default App;
