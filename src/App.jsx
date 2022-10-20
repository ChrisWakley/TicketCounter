import "./App.scss";
import { images } from "./assets/Images/Index";
import CounterContainer from "./components/CounterContainer/CounterContainer";

const App = () => {

  
  return (
    <div className="App">
      <div className="App__image">
        <img src={images[0]} alt="" className="App__background" />
      </div>
      <div className="Container">
        <CounterContainer />
      </div>
    </div>
  );
}

export default App;
