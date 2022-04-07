import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import BlogList from './components/BlogList';
// //import { Nav } from './components/Nav'
// import {Home} from './components/Home'
// import Create from './components/Create'
// import {IndivBlog} from './components/IndivBlog'
// import {About} from './components/About'
// import {Contact} from './components/Contact'
// import {Edit} from './components/Edit'
// import {Delete} from './components/Delete'

ReactDOM.render(

  // <Router>
  //   <Routes>
  //     {/* <Route path="/" element={<App/>}> */}
  //       {/* <Route index element={<Home />}/> */}
  //       {/* <Route path="blogs" element={<BlogList/>}>
  //         <Route path=":blogId" element ={<IndivBlog/>}/>
  //         <Route path="create" element={<Create />}/>
  //       <Route path="*" element={
  //         <main style={{ padding: "1rem" }}>
  //           <p>There's nothing here!</p>
  //         </main>
  //         }/>
  //     </Route> */}
  //     {/* </Route> */}
  //     <Route exact path='/' element={<App />}>
  //       <Route
  //       path="*"
  //       element={
  //         <main style={{ padding: "1rem" }}>
  //           <p>There's nothing here!</p>
  //         </main>
  //         }
  //       />
  //     </Route>


  //     <Route exact path='/blogs' element={<BlogList />}/>
  //       <Route path="/blogs/:blogId" element={<IndivBlog/>}/>
  //         {/* <Route path="/blogs/:blogId/edit" element={<Edit />}/>
  //         <Route path="/blogs/:blogId/delete" element={<Delete />}/> */}
  //     <Route path='/create' element={<Create />}/>
  //     <Route path='/about' element={<About />}/>
  //     <Route path='/contact' element={<Contact/>}/>
  //   </Routes>
  // </Router>,

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
