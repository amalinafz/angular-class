export class Coord{
    lat: number;
    lon: number;
}
    
export class Main {
    temp: number;
    feels_like: number;
    pressure: number;
    temp_min:  number;
    temp_max: number;
}

export class Weather{
    name: string;
    coord: Coord;
    main: Main;
}
    
    