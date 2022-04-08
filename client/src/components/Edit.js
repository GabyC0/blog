import React from 'react'

export const Edit = () => {
  return (
    <div>Edit</div>
  )
}



// import React from 'react'

// export const Edit = () => {
//     // const {initialBlog = {id: null, title:"", blurb: ""} = props;
//     //initial state
//     const [blogs, setBlogs] = useState([]);

//     //a state to grab the blog id
//     const [editingBlogId, setEditingBlogId] = useState(null);

//     useEffect(() => {
//         fetch('http://localhost:5001/api/blogs')
//         .then((response) => response.json())
//         .then(blogs => {
//             setBlogs(blogs);
//         })
//     }, []);

//     //a function to grab the blog id of the student that we want to edit
//     const onEdit = (blog) => {
//         const editingId = blog.id;
//         console.log(editingId);
//         setEditingBlogId(editingId);
//     }
//   return (
//     <div>Edit
//     <button type="button" onClick={() => {onEdit()}}>Edit</button>
//     </div>
//   )
// }
