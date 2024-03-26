import { Request, Response } from 'express';
import stravaService from '@services/strava/stravaService';
import { decode } from 'punycode';

const get = (req: Request, res: Response): void => {
  res.send('strava router and controller works!'); 
}

const redirectToStravaAuth = (req: Request, res: Response): void => {
  try {
    const encodedState: string = req.query.state as string;
    // console.log("Encoded State: ", encodedState);
    const redirectUri = `${req.protocol}://${req.get('host')}/api/strava/callback`;
    // console.log("redirectUri ", redirectUri);
    const authUrl = stravaService.getStravaAuthUrl(redirectUri, encodedState);  
    // console.log("authUrl: ", authUrl);
    res.redirect(authUrl);
  } catch (error) {
    console.error('Error getting strava auth url', error);
    res.status(500).send('Server error');
  }
};

const handleStravaCallback = async (req: Request, res: Response): Promise<void> => {
  try {
    const code: string | undefined = req.query.code as string;
    // console.log("code: ", code)
    const decodedState: string = decodeURIComponent(req.query.state as string);
    // console.log("decodedState: ", decodedState)
    const tokenData = await stravaService.exchangeCodeForToken(code);
    // console.log("token data: ", tokenData)
    // res.redirect(`${process.env.FRONTEND_URL}/?token=${tokenData.access_token}`);
    res.redirect(`${decodedState}`);
  } catch (error) {
    console.error('Error exchanging code for token:', error);
    res.status(500).send('Server error');
  }
}; 

export default {
    get,
    redirectToStravaAuth,
    handleStravaCallback,
}