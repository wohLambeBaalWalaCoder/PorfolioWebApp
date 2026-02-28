import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LearnWithMe from './components/LearnWithMe';
import ReactQuestions from './components/ReactQuestions';
import JavascriptQuestions from './components/JavascriptQuestions';
import NodejsQuestions from './components/NodejsQuestions';
import AwsQuestions from './components/AwsQuestions';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-purple-500/30">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<LearnWithMe />} />
        <Route path="/learn/react" element={<ReactQuestions />} />
        <Route path="/learn/javascript" element={<JavascriptQuestions />} />
        <Route path="/learn/nodejs" element={<NodejsQuestions />} />
        <Route path="/learn/aws" element={<AwsQuestions />} />
      </Routes>
    </div>
  )
}

export default App;
