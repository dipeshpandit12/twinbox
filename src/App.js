import {
  Route,
  Routes
}from 'react-router-dom';
import Layout from "./components/Layout/Layout"
import LoginPage from "./components/pages/Login/LoginPage";
import NotFoundPage from "./components/pages/NotFound/NotFoundPage";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </>
  );
}
export default App;
