import './App.css';
//import BlogList from './components/BlogList';
//import Students from './components/BlogList';
import {Nav} from './components/Nav'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BlogList from './components/BlogList';
//import { Nav } from './components/Nav'
import {Home} from './components/Home'
import Create from './components/Create'
import {IndivBlog} from './components/IndivBlog'
import {About} from './components/About'
import {Contact} from './components/Contact'
// import {Edit} from './components/Edit'
import {Delete} from './components/Delete'
//import {useParams} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

        <Nav />
    <Routes>
      {/* <Route path="/" element={<App/>}> */}
        {/* <Route index element={<Home />}/> */}
        {/* <Route path="blogs" element={<BlogList/>}>
          <Route path=":blogId" element ={<IndivBlog/>}/>
          <Route path="create" element={<Create />}/>
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
          }/>
      </Route> */}
      {/* </Route> */}
      <Route exact path='/' element={<Home />}>
        <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
          }
        />
      </Route>


      <Route exact path='/blogs' element={<BlogList />}/>
      {/* <Route path="/blogs/:blogId" render={(props) => <IndivBlog {...props} />}/> */}
        <Route path="/blogs/:blogId" element={<IndivBlog/>}/>
          {/* <Route path="/blogs/:blogId/edit" element={<Edit />}/> */}
          <Route path="/blogs/:blogId/delete" element={<Delete />}/>
      <Route path='/create' element={<Create />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
      </Router>
      






      {/* <div className="top">
        <div >
          <h1> Gumball Travels </h1>
        </div>
        <div>
          <h2>Getting lost in the right direction...</h2>
        </div>
      </div> */}
      {/* remove */}
      {/* <BlogList /> */}
    </div>
  );
}

export default App;
