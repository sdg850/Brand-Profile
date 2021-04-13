import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import SideBar from './components/SideBar/SideBar'
import MainHeader from './components/Header/MainHeader'
import LayoutContainer from "./components/LayoutContainer/LayoutContainer";



function App() {
  return (
    <Layout>
        <MainHeader />
        <Layout>
        <SideBar />
        <LayoutContainer />
      </Layout>
    </Layout>
  );
}

export default App;
