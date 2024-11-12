export interface SeedDataM { 
    zones: ZoneM[];
    routes: RouteM[];
}

export interface ZoneM{ 
    name: string;
    code: number;
    distance: string;
}

export interface RouteM{
    name: string;
    code: number;
}