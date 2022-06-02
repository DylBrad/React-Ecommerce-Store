import './default.scss'
import {
  Routes,
  Route,
} from 'react-router-dom'
//Layouts
import HomepageLayout from './layouts/HomepageLayout';
import MainLayout from './layouts/MainLayout';
// Pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomepageLayout />}>
          <Route path="/" element={<Homepage />}  />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/registration" element={<Registration />}  />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
