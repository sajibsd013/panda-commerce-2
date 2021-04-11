import './App.css';
import MainComponent from "./Component/MainComponent/MainComponent";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <div >
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
