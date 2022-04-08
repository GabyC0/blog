import React, { useState } from 'react'

export const Delete = (props) => {
    const [deleteBlog, setDeleteBlog] = useState('');

//create a function to call with on submit
//combination of create and indiv blog fetch
  return (
    <div>
        <h1>Delete a post</h1>
        <form id="delete-blog" action="#" onSubmit={(e) => {e.preventDefault(); props.deleteBlog(deleteBlog); setDeleteBlog("");}}>
            <fieldset>
                <label>User Id</label>
                <input type="text" id="delete-user-id" value={deleteBlog} onChange={(e) => setDeleteBlog(e.target.value)}/>
            </fieldset>
            <input type="submit" />
        </form>
    </div>
  )
}
