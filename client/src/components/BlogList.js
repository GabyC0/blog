import { useState, useEffect } from "react";
import Form from "./Form";

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

    

    const addBlog = (newBlog) => {
        setBlogs((blogs) => [...blogs, newBlog]);
    }


    return (
      <div className="blogposts">
        <ul>
            {blogs.map(blog =>
                <li key={blog.id}> <b>{blog.title}</b> <br/> <br/> {blog.blurb} <br/> </li>)}
        </ul>
        <ul>
            {blogs.map(blog => 
                <li key={blog.id}>{blog.title}{blog.blurb}{blog.content} <img src={blog.img} alt={blog.alt}></img></li>)}
        </ul>
        <Form addBlog={addBlog} />
      </div>
    );
  }
  
  export default BlogList;