import './App.css';
import Header from './component/Header';
import MainContent from './component/HomeContent';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Outlet />
      </div>
    </>
  )
}
export default App
