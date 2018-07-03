import { ILanguages } from "./languages.interface";
import { ITranslations } from "./translations.interface";
import { IBlocs } from "./blocs.interface";
import { ICurrency } from "./currency.interface";

export interface ICountry{
    name: string;
    topLevelDomain: Array<string>;
    alpha2Code: string;
    alpha3code: string;
    callingCodes: Array<string>;
    capital: string;
    altSpellings: Array<string>;
    region: string;
    subregion: string;
    population: number;
    latlng: Array<number>;
    demonym: string;
    area: number;
    gini: number;
    timezones: Array<string>;
    borders: Array<string>;
    nativeName: string;
    numericCode: string;
    currencies: ICurrency[];
    languages: ILanguages[];
    translations: ITranslations;
    flag: string;
    regionalBlocs: IBlocs[];
    cioc: string;
}