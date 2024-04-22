import Blog from "../models/blog.js";


export const addBlog = (req, res) => {
    const { title, snippet, body, imageUrl } = req.body;

    const blog = new Blog({title, snippet, body, imageUrl});
    blog.save()
        .then((response) => {
            res.status(201).json('Blog created successfully')
        }).catch((error) => {
            console.log(error);
            res.status(404).json({error})
        });
}

export const getAllBlogs = (req, res) => {
    Blog.find()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        console.log(error);
    });
}