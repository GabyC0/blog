import { useState, useEffect } from "react";
import Form from "./Create";
// import {Nav} from './Nav'

function BlogList() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/blogs")
        .then((response) => response.json())
        .then(blogs =>{
            //setStudents((students[3]));
            //console.log("Testing", typeof students);
            // for (let index in blogs){
            //    if( index !== "3"){
                   setBlogs(blogs);
               //}
            //};       
        })
        
    }, []);

    

    // const addBlog = (newBlog) => {
    //     setBlogs((blogs) => [...blogs, newBlog]);
    // }


    return (
    
      <div className="blogposts">
          {/* <Nav/> */}
          <div>
        {/* <ul> */}
            {blogs.map(blog =>
                <button key={blog.id}> <b>{blog.title}</b> <br/> <br/> {blog.blurb} <br/> </button>)}
        {/* </ul> */}
        <ul>
            {blogs.map(blog => 
                <section>
                    <li key={blog.id}> <b>{blog.title}</b> <br/> <br/> {blog.blurb} <br/>{blog.content} <br/><br/> <img width='450px' src={blog.img} alt={blog.alt}></img><br/> </li>
                </section>
                
                
                
                )}
        </ul>
        {/* <Form addBlog={addBlog} /> */}
        </div>
      </div>
    );
  }
  
  export default BlogList;