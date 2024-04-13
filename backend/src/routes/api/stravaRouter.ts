import { Router } from 'express';
import stravaController from '@controller/api/stravaController';
import axios from 'axios';

const router: Router = Router();

// api endpoints
router.get('/', stravaController.get);
router.get('/activities', stravaController.getActivities);
router.get('/auth', stravaController.redirectToStravaAuth);
router.get('/callback', stravaController.redirectStravaCallback);



export default router;