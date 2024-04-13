import express from 'express';
import rootController from '@controller/pages/root';

const router = express.Router();

// api endpoints
router.get('/', rootController.get);

export default router;
