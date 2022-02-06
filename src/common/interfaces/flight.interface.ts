import { IPassenger } from './passenger.interface';
import { IWeather } from './weather.location';

export interface IFlight extends Document {
  pilot: string;
  airplane: string;
  destinationCity: string;
  flightDate: Date;
  passengers: IPassenger[];
  wather: IWeather[];
}
