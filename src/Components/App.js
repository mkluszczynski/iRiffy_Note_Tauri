import { useState } from 'react';
import '../Styles/App.css';
import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import AddPage from './AddPage/AddPage';
import ListPage from './ListPage/ListPage';

function App() {
  
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <NavBar />
      {page === "home" && <HomePage />}
      {page === "add" && <AddPage />}
      {page === "list" && <ListPage />}
    </div>
  );
}

export default App;
