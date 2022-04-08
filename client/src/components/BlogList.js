import { useState, useEffect } from "react";
//import Form from "./Create";
//import {Nav} from './Nav'
import { Link, Outlet } from "react-router-dom";

function BlogList() {

    const [blogs, setBlogs] = useState([]);
    //state to edit a student
    const [editingBlogId, setEditingBlogId] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5001/api/blogs")
        .then((response) => response.json())
        .then(blogs =>{
                   setBlogs(blogs);     
        })
        
    }, []);

    

    // const addBlog = (newBlog) => {
    //     setBlogs((blogs) => [...blogs, newBlog]);
    // }


    return (
    
      <div className="blogposts">
          <div className="blogList">
            {blogs.map(blog =>
                <Link to={`/blogs/${blog.id}`}>
                    <button className="singleBlog"
                    key={blog.id}> 
                    <b>{blog.title}
                    </b> 
                    <br/> 
                    <br/> 
                    {blog.blurb} 
                    <br/>
                    </button> 
                </Link>
                // <button key={blog.id}> <b>{blog.title}</b> <br/> <br/> {blog.blurb} <br/> </button>
                )}
        {/* <Form addBlog={addBlog} /> */}
        </div>
        <Outlet/>
      </div>
    );
  }
  
  export default BlogList;