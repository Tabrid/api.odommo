// project.js

import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    projectLink: {
        type: String,
        required: true
    }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
