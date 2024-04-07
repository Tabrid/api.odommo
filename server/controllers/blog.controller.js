import BlogPost from '../models/blog.model.js';

const addBlogPost = async (req, res) => {
  try {
    const { title, imageURL, description, intros } = req.body;
    const newBlogPost = new BlogPost({ title, imageURL, description, intros });
    await newBlogPost.save();
    res.status(201).json({ message: 'Blog post added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllBlogPosts = async (req, res) => {
    try {
      const blogPosts = await BlogPost.find();
      res.status(200).json(blogPosts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getBlogPostById = async (req, res) => {
    const { id } = req.params;
    try {
      const blogPost = await BlogPost.findById(id);
      if (!blogPost) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      res.status(200).json(blogPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteBlogPost = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedBlogPost = await BlogPost.findByIdAndDelete(id);
      if (!deletedBlogPost) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      res.status(200).json({ message: 'Blog post deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const updateBlogPost = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedBlogPost = await BlogPost.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedBlogPost) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      res.status(200).json(updatedBlogPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export { addBlogPost,getAllBlogPosts, getBlogPostById, deleteBlogPost, updateBlogPost };
