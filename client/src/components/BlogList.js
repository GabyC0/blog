import { useState, useEffect } from "react";
//import Form from "./Create";
//import {Nav} from './Nav'
import { Link } from "react-router-dom";

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
          {/* <Nav/> */}
          <div>
        {/* <ul> */}
            {blogs.map(blog =>
                <Link to={`/blogs/${blog.id}`}><button key={blog.id}> <b>{blog.title}</b> <br/> <br/> {blog.blurb} <br/></button> </Link>
                // <button key={blog.id}> <b>{blog.title}</b> <br/> <br/> {blog.blurb} <br/> </button>
                )}
        {/* </ul> */}
        {/* <ul>
            {blogs.map(blog => 
                <section>
                    <li key={blog.id}> <b>{blog.title}</b> <br/> <br/> {blog.blurb} <br/>{blog.content} <br/><br/> <img width='450px' src={blog.img} alt={blog.alt}></img><br/> </li>
                </section>
                )}
        </ul> */}
        {/* <Form addBlog={addBlog} /> */}
        </div>
      </div>
    );
  }
  
  export default BlogList;