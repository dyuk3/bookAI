import './App.css';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';

// linear-gradient(135deg, #1e0533, #110a1f)

function App() {
  return (
    <div className=' min-h-screen bg-gradient-to-r from-[#1e0533] to-[#110a1f] py-4 px-96'>
      <Navbar />
      <Pricing />
    </div>
  );
}

export default App;
