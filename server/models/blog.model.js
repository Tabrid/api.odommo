import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageURL: String,
  description: String,
  intros: [{
    keyPoint: String,
    introDescription: String
  }]
},
{
  timestamps: true
} 
);

const BlogPost = model('BlogPost', blogPostSchema);

export default BlogPost;
