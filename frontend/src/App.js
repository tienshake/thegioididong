
import './App.scss';
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
