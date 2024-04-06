import axios from 'axios';


class StravaService {
    private clientId: string = process.env.STRAVA_CLIENT_ID || '';
    private clientSecret: string = process.env.STRAVA_CLIENT_SECRET || '';

    getStravaAuthUrl(redirectUri: string, state: string) {
        return `http://www.strava.com/oauth/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=read&state=${encodeURIComponent(state)}`;
    }

    async exchangeCodeForToken(code: string): Promise<any> {
        try {
            const response = await axios.post('https://www.strava.com/oauth/token', {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            code,
            grant_type: 'authorization_code',
            });
            const tokenData = response.data;
            console.log("token data: ", tokenData);
            return tokenData;

        } catch (error) {
            console.log("Error in exchangeCodeForToken", error);
        }
    }

    async getAthleteStats(athleteId: number, accessToken: string): Promise<any> {
        try {
            const response = await axios.get(`https://www.strava.com/api/v3/athletes/${athleteId}/stats`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            const athleteStats = response.data;
            console.log(athleteStats);
            return athleteStats;

        } catch (error) {
            console.log("Error in getAthleteStats", error);
        }
    }

}

export default new StravaService();