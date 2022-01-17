import './App.css';
import DoroTimer from './component/DoroTimer'
import TimerSetup from './component/TimerSetup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header>
          CustomDoro
        </header>
        <TimerSetup></TimerSetup>
        <DoroTimer></DoroTimer>
      </header>
    </div>
  );
}

export default App;
