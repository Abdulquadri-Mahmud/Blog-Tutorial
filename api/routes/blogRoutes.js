import express from 'express';
import { addBlog, getAllBlogs } from '../controller/blog-controller.js';

const app = express();

app.post('/postBlog', addBlog);
app.get('/getAllBlogs', getAllBlogs);

export default app;