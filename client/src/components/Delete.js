import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


export const Delete = () => {
    let params = useParams();
    const navigate = useNavigate();
    console.log('params', params);
    //const [deleteBlog, setDeleteBlog] = useState('');

//create a function to call with on submit
//combination of create and indiv blog fetch


const handleOnClick = () => {
    fetch(`http://localhost:5001/api/blogs/${params.blogId}`, {
        method: 'DELETE'
        }).then(() => {  
        navigate('/blogs');
    })
    //install alert and use this to confirm delete
    // confirmAlert({
    //     title: 'Confirm to submit',
    //     message: 'Are you sure you want to delete?',
    //     buttons: [
    //         {
    //             label: 'Confirm delete',
    //             onClick: () => alert('Yes')
    //         },
    //         {
    //             label: "Don't delete",
    //             onClick: () => alert('No')
    //         }
    //     ]
    // });
};



  return (
    <div>
        {/* {error && <div>{error}</div>} */}
        <button className='deleteBtn' onClick={handleOnClick}>Delete Post</button>
    </div>
  )
}
