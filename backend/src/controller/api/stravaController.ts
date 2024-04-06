import { Request, Response } from 'express';
import {TokenData, AthleteStats} from '../../types/api/stravaTypes'
import stravaService from '@services/strava/stravaService';
import stravaModel from '../../model/api/stravaModel'
import { decode } from 'punycode';

const get = (req: Request, res: Response): void => {
  res.send('strava router and controller works!'); 
}

const redirectToStravaAuth = async (req: Request, res: Response): Promise<void> => {
  try {
    const encodedState: string = req.query.state as string;
    const redirectUri: string = `${req.protocol}://${req.get('host')}/strava/callback`;
    const authUrl: string = await stravaService.getStravaAuthUrl(redirectUri, encodedState);  
    res.redirect(authUrl);

  } catch (error) {
    console.error('Error getting strava auth url', error);
    res.status(500).send('Server error');
  }
};

const redirectStravaCallback = async (req: Request, res: Response): Promise<void> => {
  try {
    const code: string | undefined = req.query.code as string;
    const decodedState: string = decodeURIComponent(req.query.state as string);
    const tokenData: TokenData = await stravaService.exchangeCodeForToken(code);
    const athleteStats: AthleteStats = await stravaService.getAthleteStats(tokenData.athlete.id, tokenData.access_token);
    await stravaModel.storeAthleteStats(tokenData.athlete.id, athleteStats.all_run_totals.count, athleteStats.all_run_totals.distance)
    res.redirect(`${decodedState}`);

  } catch (error) {
    console.error('Error in redirectStravaCallback', error);
    res.status(500).send('Server error');
  }
}; 




export default {
    get,
    redirectToStravaAuth,
    redirectStravaCallback,
}