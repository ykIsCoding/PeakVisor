export interface Athlete {
    id: number;
    username: string;
    resource_state: number;
    firstname: string;
    lastname: string;
    bio: null | string;
    city: null | string;
    state: null | string;
    country: null | string;
    sex: 'M' | 'F'; // Assuming these are the only two values, adjust if there are more
    premium: boolean;
    summit: boolean;
    created_at: string;
    updated_at: string;
    badge_type_id: number;
    weight: null | number;
    profile_medium: string;
    profile: string;
    friend: null; // Assuming this would be a specific type if not null
    follower: null; // Same assumption as above
}
  
export interface TokenData {
    token_type: 'Bearer';
    expires_at: number;
    expires_in: number;
    refresh_token: string;
    access_token: string;
    athlete: Athlete;
}

export interface Totals {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
}
  
export interface AchievementTotals extends Totals {
    achievement_count: number;
}
  
export interface AthleteStats {
    biggest_ride_distance: null | number; // Assuming this can be a number when available
    biggest_climb_elevation_gain: null | number; // Assuming this can be a number when available
    recent_ride_totals: AchievementTotals;
    all_ride_totals: Totals;
    recent_run_totals: AchievementTotals;
    all_run_totals: Totals;
    recent_swim_totals: AchievementTotals;
    all_swim_totals: Totals;
    ytd_ride_totals: Totals;
    ytd_run_totals: Totals;
    ytd_swim_totals: Totals;
}
  

