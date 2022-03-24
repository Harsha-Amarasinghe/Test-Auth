import logo from './logo.svg';
import "antd/dist/antd.css";
import './App.css';
import { Button } from 'antd';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <div className="App">
      <AdminLogin />
    </div>
  );
}

export default App;
