import './App.css';
import MainComponent from "./Component/MainComponent/MainComponent";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import myStore from './Redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div >
      <Provider store={myStore} >
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
