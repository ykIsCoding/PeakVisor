import express from 'express';
import signupController from '@controller/pages/signup';

const router = express.Router();

// api endpoints
router.get('/', signupController.get);

export default router;
