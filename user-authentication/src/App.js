import logo from './logo.svg';
import "antd/dist/antd.css";
import './App.css';
import { Button } from 'antd';
import AdminLogin from './components/AdminLogin';
import AdminRegistration from './components/AdminRegistration';
import DashboardMain from './components/Dashboard/DashboardMain';

function App() {
  return (
    <div className="App">
      <DashboardMain />
      
    </div>
  );
}

export default App;
