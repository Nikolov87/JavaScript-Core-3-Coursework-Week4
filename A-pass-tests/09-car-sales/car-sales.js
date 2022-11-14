function sales(carsSold) {
    let total = {};
    carsSold.forEach(car => {
        if (total[car.make]) {
          total[car.make] += car["price"];  
        } else {
            total[car.make] = car['price']
        }
    });
    return total;
}

module.exports = sales;
