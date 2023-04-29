export interface ICountry {
  countryName: string;
  capital: string;
}

export interface GeoNames {
  geonames: ICountry[];
}

export class Country {
    constructor(public name: string, public capital: string) {}
}