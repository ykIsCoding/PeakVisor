import express from 'express';
import aboutController from '@controller/pages/home';

const router = express.Router();

router.get('/', aboutController.get);

export default router;
