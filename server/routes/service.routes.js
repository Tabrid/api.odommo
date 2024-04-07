// serviceRoutes.js
import express from 'express';
import { 
    createService,
    deleteService,
    updateService,
    getAllServices,
    getServiceById,
    getServicesByCategory,
    getAllCategories
} from '../controllers/service.controller.js';

const router = express.Router();

router.post('/', createService);
router.delete('/:id', deleteService);
router.put('/:id', updateService);
router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.get('/category/:category', getServicesByCategory);
router.get('/categories', getAllCategories);

export default router;
