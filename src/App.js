import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Random from './components/Random';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import CardDisplay from './components/CardDisplay';
import './App.css';
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <CardDisplay />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/random" component={Random} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
