import {
  Route,
  Routes
}from 'react-router-dom';
import pages from "./utils/pages"
import Layout from "./components/Layout/Layout"
import LoginPage from "./components/pages/Login/LoginPage";
import NotFoundPage from "./components/pages/NotFound/NotFoundPage";
import UnderConstructionPage from './components/pages/UnderConstruction/UnderConstructionPage';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path={pages.get("login").path} element={<LoginPage/>}/>
          <Route path={pages.get("dashboard").path} element={<UnderConstructionPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </>
  );
}
export default App;
