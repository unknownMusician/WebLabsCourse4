import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignUp } from './components/SignUp'
import './App.css';
import { SignIn } from './components/SignIn';
import { Me } from './components/Me';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/me" element={<Me />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  )
}
