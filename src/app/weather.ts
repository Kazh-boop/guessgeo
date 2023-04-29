export interface IWeather {
    current: Current;
}

export interface Current {
    temperature: number;
    weather_descriptions: string[];
    weather_icons: string[];
    wind_speed: number;
}

export class Weather {
    constructor(public temperature: number, public weather_descriptions: string[], public weather_icons: string[], public wind_speed: number) {}
}