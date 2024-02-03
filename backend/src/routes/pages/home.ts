import express from 'express';
import homeController from '@controller/pages/home';

const router = express.Router();

router.get('/', homeController.get);

export default router;
