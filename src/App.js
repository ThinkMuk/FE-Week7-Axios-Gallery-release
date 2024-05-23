import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article/:articleId' element={<Article />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
