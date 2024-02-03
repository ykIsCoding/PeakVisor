import express from 'express';
import rootController from '@controller/pages/root';

const router = express.Router();

router.get('/', rootController.get);

export default router;
