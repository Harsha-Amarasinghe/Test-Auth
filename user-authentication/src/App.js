import logo from './logo.svg';
import "antd/dist/antd.css";
import './App.css';
import { Button } from 'antd';
import AdminLogin from './components/AdminLogin';
import AdminRegistration from './components/AdminRegistration';

function App() {
  return (
    <div className="App">
      <AdminRegistration />
      <AdminLogin />
      
    </div>
  );
}

export default App;
