export interface SpacexLaunch {
    
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string | null;
    links: {
        mission_patch_small: string;
    };
    launch_success: boolean;
}