import { Car, Shop } from './product'

function show(v: Shop) {
    console.log(`${v.name} is ${v.price}!`)
}

const car = new Car
car.name = 'Civic'
car.price = 89499.00
show(car)
