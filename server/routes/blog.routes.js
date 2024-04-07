// Routes (blogRoutes.js)

import express from 'express';
import { 
  getAllBlogPosts, 
  getBlogPostById, 
  addBlogPost, 
  deleteBlogPost, 
  updateBlogPost 
} from '../controllers/blog.controller.js';

const router = express.Router();

// GET request to get all blog posts
router.get('/blogs', getAllBlogPosts);

// GET request to get a single blog post by ID
router.get('/blogs/:id', getBlogPostById);

// POST request to add a new blog post
router.post('/blogs', addBlogPost);

// DELETE request to delete a blog post by ID
router.delete('/blogs/:id', deleteBlogPost);

// PUT request to update a blog post by ID
router.put('/blogs/:id', updateBlogPost);

export default router;
