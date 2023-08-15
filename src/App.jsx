import Search from "./components/Search";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Favourites from "./components/Favourites";
import { useGlobalContext } from "./context";

import "./App.css";

function App() {
  const { showModal } = useGlobalContext();
  return (
    <>
      <Search />
      {/* <Favourites /> */}
      <Meals />
      {showModal && <Modal />}
    </>
  );
}

export default App;
