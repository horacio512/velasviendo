import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="BIENVENIDO" name="Profesor" age={99}>
     
      </ItemListContainer>
     
    </div>

  );
}



export default App;
