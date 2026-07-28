import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Execom from './pages/Execom';
import Events from './pages/Events';
import NoticeBoard from './pages/NoticeBoard';
import Leaderboard from './pages/Leaderboard';
import Join from './pages/Join';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-textMain font-sans flex flex-col justify-between">
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/execom" element={<Execom />} />
            <Route path="/events" element={<Events />} />
            <Route path="/notice-board" element={<NoticeBoard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
