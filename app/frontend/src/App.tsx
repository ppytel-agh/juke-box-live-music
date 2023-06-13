import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Events from './components/Events/Events';
import { useState } from 'react';

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Header  isLogged = {isLogged} />
      <Events />
    </>
  );
}

export default App;
