import './App.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AppRoutes from './Views/Routes/AppRoutes';
import Login from './Views/Onboarding/Login';
import Layout from './Component/Layout/Layout';
import Home from './Views/Home';


function App() {
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: "#074FBA",
      },
      colors: {
        primary: 'var(--primary)', 
      },
      }}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<AppRoutes/>} />
        <Route path="/layout" element={<Layout/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
  );
}

export default App;
