import { Request, Response } from 'express';
import {TokenData, AthleteStats} from '../../types/api/stravaTypes'
import stravaService from '@services/strava/stravaService';
import stravaModel from '../../model/api/stravaModel'
import { decode } from 'punycode';

var uid:string = ''

// sends success message to client
const get = (req: Request, res: Response): void => {
  res.send('strava router and controller works!'); 
}

// calls getAthleteActivities from stravaService
const getActivities = async (req: Request, res: Response): Promise<void> => {
  try{
  const {code} = req.query
  const tokenData: TokenData = await stravaService.exchangeCodeForToken('','refresh_token',code as string);
  console.log(req.query)
  const data = await stravaService.getAthleteActivities(tokenData.access_token)
  res.send(data)
  }catch(e){
    console.log(e)
  }
}

// Redirects client to Strava Authentication Page
const redirectToStravaAuth = async (req: Request, res: Response): Promise<void> => {
  try {
    const encodedState: string = req.query.state as string;
    uid = req.query.uid as string;
    const redirectUri: string = `${req.protocol}://${req.get('host')}/strava/callback`;
    const authUrl: string = await stravaService.getStravaAuthUrl(redirectUri, encodedState);  
    res.redirect(authUrl);

  } catch (error) {
    console.error('Error getting strava auth url', error);
    res.status(500).send('Server error');
  }
};

// Handles the callback from StravaAPI after authentication
const redirectStravaCallback = async (req: Request, res: Response): Promise<void> => {
  try {
    const code: string | undefined = req.query.code as string;
    const decodedState: string = decodeURIComponent(req.query.state as string);
    const tokenData: TokenData = await stravaService.exchangeCodeForToken(code);
    const athleteStats: AthleteStats = await stravaService.getAthleteStats(tokenData.athlete.id, tokenData.access_token);
    await stravaModel.storeAthleteStats(tokenData.refresh_token, uid, tokenData.athlete.id, athleteStats.all_run_totals.count, athleteStats.all_run_totals.distance)
    res.redirect(`${decodedState}`);
    uid = ''

  } catch (error) {
    console.error('Error in redirectStravaCallback', error);
    res.status(500).send('Server error');
  }
}; 

export default {
    get,
    getActivities,
    redirectToStravaAuth,
    redirectStravaCallback,
}