import './App.css';
import BlogList from './components/BlogList';
//import Students from './components/BlogList';
import {Nav} from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <div>
        <h1> Gumball Travels </h1>
      </div>
      <div>
        <h2>Getting lost in the right direction...</h2>
      </div>
      {/* remove */}
      <BlogList />
    </div>
  );
}

export default App;
