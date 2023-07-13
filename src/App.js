import { ApiContext } from './context/ApiContext';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import { useMediaQuery } from '@mui/material';

function App() {
  const is360screen=useMediaQuery("(min-width:360px)")

  return (
    <>
    {is360screen ? 
      <div className='mobileContainer'>
        <ApiContext>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
        </ApiContext>
      </div>
      :
      <div className='errorScreen'>
        <p>Este sitio está disponible sólo para pantallas 360px o mayores</p>
        <p>This site is available only for screens of 360px or higher</p>
      </div>
    }
    </>
  );
}

export default App;
