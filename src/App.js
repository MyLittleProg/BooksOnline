import { useContext, useState } from 'react';
import cl from './style/App.module.css'
import { BooksContxext } from './context/context';
import { BrowserRouter} from 'react-router-dom';
import AppRouter from './AppRouter';
function App() {
  const [valueBooks,setValueBooks] = useState([])
  const [valueMenu,setValueMenu] = useState(null)
  return (
    <BooksContxext.Provider value={{
      valueBooks,setValueBooks,
      valueMenu,setValueMenu
    }}>
    <BrowserRouter>
    <div className={cl.App}>
      <AppRouter/>
    </div>
    </BrowserRouter>
    </BooksContxext.Provider>
  );
}

export default App;
