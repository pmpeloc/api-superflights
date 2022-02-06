import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class FlightDTO {
  @IsNotEmpty()
  @IsString()
  readonly pilot: string;
  @IsNotEmpty()
  @IsString()
  readonly airplane: string;
  @IsNotEmpty()
  @IsString()
  readonly destinationCity: string;
  @IsNotEmpty()
  @Type(() => Date) // Type transforma la data que ingresa
  @IsDate()
  readonly flightDate: Date;
}
