import express from 'express';
import loginController from '@controller/pages/login';

const router = express.Router();

router.get('/', loginController.get);

export default router;
