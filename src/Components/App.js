import { useState } from 'react';
import '../Styles/App.css';
import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import AddPage from './AddPage/AddPage';
import ListPage from './ListPage/ListPage';

function App() {
  
  const [page, setPage] = useState("home");

  function loadHomePage(){
    console.log("Clicked on home");
    setPage("home");
  }

  function loadAddPage(){
    setPage("add");
    console.log("Clicked on add");
  }

  function loadListPage(){
    setPage("list");
    console.log("Clicked on list");
  }

  return (
    <div className="App">
      <NavBar onHomeClick={loadHomePage} onAddClick={loadAddPage} onListClick={loadListPage}/>
      {page === "home" && <HomePage />}
      {page === "add" && <AddPage />}
      {page === "list" && <ListPage />}
    </div>
  );
}

export default App;
