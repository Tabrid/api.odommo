// service.js
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  logoUrl: String,
  imageUrl: String,
  description: String,
  category: String,
  intros: [{
    keyPoint: String,
    description: String,
    bulletPoints: [String]
  }]
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
