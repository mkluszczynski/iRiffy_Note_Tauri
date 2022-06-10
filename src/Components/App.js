import { useEffect, useState } from 'react';
import '../Styles/App.css';
import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import AddPage from './AddPage/AddPage';
import ListPage from './ListPage/ListPage';
import { appDir, homeDir, join } from '@tauri-apps/api/path';
import { createDir, readDir, readTextFile, writeFile } from '@tauri-apps/api/fs';

function App() {

  const [page, setPage] = useState("home");

  useEffect(() => {
    CheckSaveFile();
  }, [])

  function loadHomePage() {
    console.log("Clicked on home");
    setPage("home");
  }

  function loadAddPage() {
    setPage("add");
    console.log("Clicked on add");
  }

  function loadListPage() {
    setPage("list");
    console.log("Clicked on list");
  }


  async function CheckDir() {
    const path = await join(await appDir());
    console.log(path);

    try {
      await readDir(path).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
      await createDir(path);
    }
  }

  async function CheckSaveFile() {

    await CheckDir();

    const path = await join(await appDir(), "data.json");

    //Check if file exists
    try {
      await readTextFile(path);
    }
    //If not create it
    catch (error) {
      console.log(error);
      await writeFile({
        path: path,
        contents: "[]"
      });
    }

  }

  return (
    <div className="App">
      <NavBar onHomeClick={loadHomePage} onAddClick={loadAddPage} onListClick={loadListPage} />
      {page === "home" && <HomePage />}
      {page === "add" && <AddPage />}
      {page === "list" && <ListPage />}
    </div>
  );
}

export default App;
