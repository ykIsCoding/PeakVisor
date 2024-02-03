import express from 'express';
import trailsController from '@controller/pages/trails';

const router = express.Router();

router.get('/', trailsController.get);

export default router;
