import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Launch from './Launch';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;