import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmpComponent from './components/ListEmpComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <BrowserRouter future={{ v7_startTransition: true }}> */}
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListEmpComponent />} />
          <Route path="/employees" element={<ListEmpComponent />} />
          <Route path="*" element={<h2 className="text-center">404: Page Not Found</h2>} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
