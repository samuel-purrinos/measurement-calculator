import { Result } from "./max-min-avg-measurement";
import { Measurement } from "./measurement";

export interface StoredMeasurement {
    id : number;
    name : string;
    result : Result;
    measurements : Measurement[];
}