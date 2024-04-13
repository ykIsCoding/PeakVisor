import axios from 'axios';


class StravaService {
    private clientId: string = process.env.STRAVA_CLIENT_ID || '';
    private clientSecret: string = process.env.STRAVA_CLIENT_SECRET || '';

    // returns strava authentication url to controller 
    getStravaAuthUrl(redirectUri: string, state: string) {
        
        return `http://www.strava.com/oauth/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=activity:read_all&state=${encodeURIComponent(state)}`;
    }

    // exchanges authentication code for authentication token, sends token back to controller
    async exchangeCodeForToken(code: string,grant_type='authorization_code',refresh_token=''): Promise<any> {
        try {
            let obj = {}
            if(code.length>1){
                obj = {
                    client_id: this.clientId,
                    client_secret: this.clientSecret,
                    code,
                    grant_type: grant_type,
                    }
            }else{
                obj = {
                    client_id: this.clientId,
                    client_secret: this.clientSecret,
                    grant_type: grant_type,
                    refresh_token:refresh_token
                    }
            }
            
            const response = await axios.post('https://www.strava.com/oauth/token', obj); 
            const tokenData = response.data;
            console.log("token data: ", tokenData);
            return tokenData;

        } catch (error) {
            console.log("Error in exchangeCodeForToken", error);
        }
    }

    // fetches athlete stats from stravaAPI, returns it back to controller
    async getAthleteStats(athleteId: number, accessToken: string): Promise<any> {
        try {
            const response = await axios.get(`https://www.strava.com/api/v3/athletes/${athleteId}/stats`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            const athleteStats = response.data;
            console.log(accessToken);
            return athleteStats;

        } catch (error) {
            console.log("Error in getAthleteStats", error);
        }
    }

    // fetches athlete activities from stravaAPI, returns it back to controller
    async getAthleteActivities(accessToken: string): Promise<any> {
        try {
            const response = await axios.get(`https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`, {
                
            });
            const athleteStats = response.data;
            return athleteStats;

        } catch (error) {
            console.log("Error in getAthleteActivity", error);
        }
    }

    

}

export default new StravaService();