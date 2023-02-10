const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 5001;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/api/blogs', cors(), async (req, res) => {
    try{
        const { rows: blogposts } = await db.query('SELECT * FROM blogposts');
        res.send(blogposts);
    } catch (e){
        return res.status(400).json({e});
    }
});

app.get('/api/blogs/:blogId', cors(), async (req, res) => {
    const blogId = req.params.blogId;
    //can eliminate , [blogId] bc being reffed before
    const getId = await db.query(`SELECT * FROM blogposts WHERE id=${blogId}`);
    console.log("getId", getId.rows);
    res.send(getId.rows);
});

//create the POST request
app.post('/api/blogs', cors(), async (req, res) => {
    const newBlogPost = { title: req.body.title, blurb: req.body.blurb, content: req.body.content, img: req.body.img, alt: req.body.alt }
    console.log([newBlogPost.title, newBlogPost.blurb]);
    const result = await db.query(
        'INSERT INTO blogposts(title, blurb, content, img, alt) VALUES($1, $2, $3, $4, $5) RETURNING *',
        [newBlogPost.title, newBlogPost.blurb, newBlogPost.content, newBlogPost.img, newBlogPost.alt]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

//put request - update request
app.put('/api/blogs/:blogId', cors(), async (req, res) => {
    //to grab that param
    const blogId = req.params.blogId;
    //object of the student that you want to update
    const updateBlog = { id: req.body.id, title: req.body.title, blurb: req.body.blurb, content: req.body.content, img: req.body.img, alt: req.body.alt }
    console.log('body', req.body)
    //what is this doing exactly?????? Do I need to have $1 set to id if I'm not going to be updating it?? blogId not just id??
    const query = `UPDATE blogposts SET title=$1, blurb=$2, content=$3, img=$4, alt=$5 WHERE id=${blogId} RETURNING *`;
    console.log(query);
    //passing values from updated blog  
    const values = [updateBlog.title, updateBlog.blurb, updateBlog.content, updateBlog.img, updateBlog.alt];
    console.log("values", values);
    try{
        //query to the database
        const updated = await db.query(query, values);
        console.log(updated.rows[0]);
        res.send(updated.rows[0]);
    }catch (e) {
        console.log(e);
        return res.status(400).json({e});
    }
})

app.delete('/api/blogs/:blogId', cors(), async (req, res) => {
    const blogId = req.params.blogId;
    await db.query(`DELETE FROM blogposts WHERE id=${blogId}`);
    res.status(200).end();
})

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});