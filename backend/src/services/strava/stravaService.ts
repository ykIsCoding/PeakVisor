import axios from 'axios';

class StravaService {
    private clientId: string = process.env.STRAVA_CLIENT_ID || '';
    private clientSecret: string = process.env.STRAVA_CLIENT_SECRET || '';

    // getStravaAuthUrl(redirectUri: string): string {
    //     return `http://www.strava.com/oauth/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=read`;
    // }

    getStravaAuthUrl(redirectUri: string, state: string) {
        return `http://www.strava.com/oauth/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=read&state=${encodeURIComponent(state)}`;
    }

    async exchangeCodeForToken(code: string): Promise<any> {
        const response = await axios.post('https://www.strava.com/oauth/token', {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code,
        grant_type: 'authorization_code',
        });
        return response.data;
    }
}

export default new StravaService();