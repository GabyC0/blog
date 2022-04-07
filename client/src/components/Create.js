import { useState } from "react";

const Form = (props) => {
    const [blog, setBlogPost] = useState({
        title: "",
        blurb: "",
        content: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleTitleChange = (event) => {
        const title = event.target.value;
        setBlogPost((blog) => ({ ...blog, title }));

    }

    const handleBlurbChange = (event) => {
        const blurb = event.target.value;
        setBlogPost((blog) => ({ ...blog, blurb }));

    }

    const handleContentChange = (event) => {
        const content = event.target.value;
        setBlogPost((blog) => ({ ...blog, content }));

    }

    const handleImgChange = (event) => {
        const img = event.target.value;
        setBlogPost((blog) => ({ ...blog, img }));

    }

    const handleAltChange = (event) => {
        const alt = event.target.value;
        setBlogPost((blog) => ({ ...blog, alt }));

    }

    //A function to handle the post request
    const postBlog = async (newBlogPost) => {
        const response = await fetch('http://localhost:5001/api/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBlogPost)
        });
        const data = await response.json();
        console.log("From the post ", data);
        props.addBlogPost(data);
    }

    //A function to handle the UPDATE request
    const updateBlog = async (existingBlog) => {
        const response = await fetch(`/api/blogs/${existingBlog.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringigy(existingBlog)
        });
        const data = await response.json();
        console.log('From put req ', data);
        props.saveBlog(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(blog.id) {
            updateBlog(blog);
        } else {
            postBlog(blog);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Title </label>
                <input
                    type="text"
                    id="add-blog-title"
                    placeholder="Title"
                    required
                    value={blog.title}
                    onChange={handleTitleChange}

                />
                <label>Summary Blurb</label>
                <input
                    type="text"
                    id="add-post-blurb"
                    placeholder="Summary blurb"
                    required
                    value={blog.blurb}
                    onChange={handleBlurbChange}
                />
                <label>Content</label>
                <input
                    type="text"
                    id="add-blog-content"
                    placeholder="Blog Content"
                    required
                    value={blog.lastname}
                    onChange={handleContentChange}
                />
                <label>Image Url</label>
                <input
                    type="url"
                    id="add-blog-img"
                    placeholder="Image Url"
                    required
                    value={blog.img}
                    onChange={handleImgChange}
                />
                <label>Img Description</label>
                <input
                    type="text"
                    id="add-blog-img-description"
                    placeholder="Image Description"
                    required
                    value={blog.alt}
                    onChange={handleAltChange}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;