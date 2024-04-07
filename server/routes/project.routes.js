// projectRoutes.js

import express from 'express';
import { createProject, getAllProjects, getProjectById, deleteProject, updateProject } from '../controllers/project.controller.js';

const router = express.Router();

router.post('/projects', createProject);
router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectById);
router.delete('/projects/:id', deleteProject);
router.put('/projects/:id', updateProject);

export default router;
