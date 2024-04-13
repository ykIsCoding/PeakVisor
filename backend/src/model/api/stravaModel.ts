import axios from "axios";

// stores athleteStats into database
const storeAthleteStats = async(code:string,uid:string,athleteId: number, athleteTotalRunTrips: number, athleteTotalRunDistance: number): Promise<any> => {
    try {
        const res = await axios.post('http://localhost:3000/authentication/update',
        {
            uid,
            strava:athleteId,
            stravaData: {
                code,
                total_trips:athleteTotalRunTrips,
                total_distance:athleteTotalRunDistance
            }
        })
        console.log(res)
    } catch (error) {
        console.log("Error in storeAthleteStats: ", error);
    }
}


export default {
    storeAthleteStats,
}