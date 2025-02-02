
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import JourneyBlock from './components/JourneyBlock';
import Offers from './components/Offers';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Offers />
      <JourneyBlock />
      <Footer />
    </div>
  );
}

export default App;
