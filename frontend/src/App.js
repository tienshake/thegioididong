import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom';
import './App.css';
import AppWeb from './components/AppWeb';
import CategorySalienState from './store/accessory/CategorySalienState';
function App() {
  return (
    <CategorySalienState>
      <AppWeb />
    </CategorySalienState>


  );
}

export default App;
