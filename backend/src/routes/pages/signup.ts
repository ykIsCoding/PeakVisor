import express from 'express';
import signupController from '@controller/pages/signup';

const router = express.Router();

router.get('/', signupController.get);

export default router;
