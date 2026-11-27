const calculateDiscount = function(price, discount) {
    if (discount < 0 || discount > 100) {
        return "Некорректная скидка";
    }

    let result = price - (price * discount / 100);

    return result;
};

console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(5000, 20));
console.log(calculateDiscount(2000, 50));
console.log(calculateDiscount(1000, 110));