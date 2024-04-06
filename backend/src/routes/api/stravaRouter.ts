import { Router } from 'express';
import stravaController from '@controller/api/stravaController';

const router: Router = Router();

router.get('/', stravaController.get);
router.get('/auth', stravaController.redirectToStravaAuth);
router.get('/callback', stravaController.redirectStravaCallback);

export default router;