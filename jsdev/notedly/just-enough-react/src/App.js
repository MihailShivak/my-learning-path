import logo from './logo.svg';
import './App.css';
import Sparkle from './Sparkle';

function App() {
  const name = 'Mihail'
  const now = String(new Date())
  return (
    <div className="App">
      <p>Hello, {name}!</p>
      <p>the current time is {now}</p>
      <p>Tumba plus Umba is {"Tumba" + "Umba"}</p>
      <Sparkle />
    </div>
  );
}

export default App;
