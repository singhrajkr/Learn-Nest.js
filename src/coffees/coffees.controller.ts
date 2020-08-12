import { Controller, Get, Param, Post, Body, Patch, Delete, Query, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeeService: CoffeesService) { }

    @Get()
    findAll(@Query() paginationQuery) {
        const { limit, offset } = paginationQuery;
        // return {
        //     result: `This action returns all coffees. Limit: ${limit}, offset: ${offset}`
        // }
        return this.coffeeService.findAll();
    }

    @Get('flavour')
    findCoffeeFlavour() {
        return {
            result: `This action return coffee flavour`
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // return {
        //     result: `This action return #${id} coffee`
        // }
        const coffee = this.coffeeService.findOne(id);
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }

    @Post()
    create(@Body() body) {
        // return {
        //     result: body
        // }
        this.coffeeService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        // return {
        //     result: `This action updates #${id} coffee`
        // }
        this.coffeeService.update(id, body);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        // return {
        //     result: `This action removes #${id} coffee`
        // }
        this.coffeeService.remove(id);
    }

}
