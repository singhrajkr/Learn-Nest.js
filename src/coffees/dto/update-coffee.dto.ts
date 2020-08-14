import { PartialType } from '@nestjs/mapped-types'
import { CreateCoffeeDto } from "./create-coffee.dto";

/**
 * All CreateCoffeeDto property will become optional with class validations 
 */
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto){}
