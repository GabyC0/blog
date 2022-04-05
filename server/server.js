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

//create the POST request
app.post('/api/blogs', cors(), async (req, res) => {
    const newBlogPost = { title: req.body.title, blurb: req.body.blurb, content: req.body.content }
    console.log([newBlogPost.title, newBlogPost.blurb]);
    const result = await db.query(
        'INSERT INTO blogposts(title, blurb, content) VALUES($1, $2, $3) RETURNING *',
        [newBlogPost.title, newBlogPost.blurb, newBlogPost.content]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});