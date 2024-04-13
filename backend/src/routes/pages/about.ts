import express from 'express';
import aboutController from '@controller/pages/home';

const router = express.Router();

// api endpoints
router.get('/', aboutController.get);

export default router;
