import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './views/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
