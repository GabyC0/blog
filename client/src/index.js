import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BlogList from './components/BlogList';
import { Nav } from './components/Nav'

ReactDOM.render(

  <Router>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<BlogList/>}/>
        <Route path="blogs" element={<BlogList/>}/>
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
          }/>

      </Route>
      {/* <Route exact path='/' element={<App/>}/>
      <Route path='/blogs' element={<BlogList/>}/> */}
    </Routes>
  </Router>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
