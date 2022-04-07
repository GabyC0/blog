import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const IndivBlog = () => {
    const [blogs, setBlogs] = useState([]);
    // const {id} = props.match.params;

    useEffect(() => {
        fetch('http://localhost:5001/api/blogs')
        .then((response) => response.json())
        .then(blogs => {
            setBlogs(blogs);
        })
    }, []);

    let params = useParams();
  return (
    <div className="contacts">
        <h2>Blog Number: {params.blogId}</h2>
            <div>
            <h3 key={params.blogId}>{blogs.title} {blogs.blurb} {blogs.content}{<img width='450px' src={blogs.img} alt={blogs.alt}></img>}</h3>
            {/* <Link to='/edit'><button>Edit</button></Link> */}
            <Link to="/specific"><button>Delete</button></Link>
        </div>
      </div>
  )
}

//     // let params = useParams();
//     let {blogId} = useParams();
//      let blog = fetch(`/api/blogs/${blogId}`);
//   return blog ? (
//     <div className="contacts">
//         <h2>Blog Number: {blog.blogTitle}</h2>
//             {/* <div>
//             <h3 key={params.blogId}>{blogs.title} {blogs.blurb} {blogs.content}{<img width='450px' src={blogs.img} alt={blogs.alt}></img>}</h3>
//             <Link to='/edit'><button>Edit</button></Link>
//             <Link to="/specific"><button>Delete</button></Link>
//             </div> */}
//       </div>
//   ) : (
//       <Create />
//   );
