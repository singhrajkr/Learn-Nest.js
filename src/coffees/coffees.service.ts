import { Injectable } from '@nestjs/common';
import { Coffee } from './entity/coffee.entity';


@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [{
        id: 1,
        name: 'Shipwreck Roast',
        brand: 'Buddy Brew',
        flavours: [
            'vanilla',
            'chocolate'
        ]
    }];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        return this.coffees.find(coffee => coffee.id === +id)
    }

    create(createCoffeeDTO: any) {
        this.coffees.push(createCoffeeDTO);
    }

    update(id: string, updateCoffeeDTO: any) {
        const existingCoffee = this.coffees.find(coffee => coffee.id === +id);
        if (existingCoffee) {
            // update existing coffee
        }
    }

    remove(id: string) {
        const existingCoffeeIndex = this.coffees.findIndex(coffee => coffee.id === +id);
        if (existingCoffeeIndex >= 0) {
            this.coffees.splice(existingCoffeeIndex, 1)
        }

    }

}
