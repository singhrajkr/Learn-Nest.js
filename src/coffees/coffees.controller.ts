import { Controller, Get, Param, Post, Body, Patch, Delete, Query, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeeService: CoffeesService) { }

    @Get()
    findAll(@Query() paginationQuery) {
        const { limit, offset } = paginationQuery;
        return this.coffeeService.findAll();
    }

    @Get('flavour')
    findCoffeeFlavour() {
        return {
            result: `This action return coffee flavour`
        }
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log('Verify that Class Validation Pipe- trsanform: true converts param to its defined type', typeof id)
        const coffee = this.coffeeService.findOne(''+ id);
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }
 
    @Post()
    create(@Body() createCoffeeDtd: CreateCoffeeDto) {
        // Validation Pipe whitelist: true removes unknown property from request payload
        return createCoffeeDtd;
        // console.log('Create request payload: ', createCoffeeDtd)
        // console.log('Is request payload is instance of createCoffeeDtd: ', createCoffeeDtd instanceof CreateCoffeeDto)
        // return this.coffeeService.create(createCoffeeDtd);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        this.coffeeService.remove(id);
    }

}
