"use strict";
{
    // defining a generic type with the required properties
    const oldProduct = {
        name: "Endeavour",
        price: 1500,
        isAvailable: true,
        offers: {
            isDiscountAble: true,
            newPrice: 1200,
            offerDate: "October to November",
            isAcceptOrder: true,
        }
    };
    // accessing the properties of the generic type
    console.log(oldProduct.name);
    console.log(oldProduct.price);
    console.log(oldProduct.isAvailable);
    console.log(oldProduct.offers.isDiscountAble);
    console.log(oldProduct.offers.newPrice);
    console.log(oldProduct.offers.offerDate);
    console.log(oldProduct.offers.isAcceptOrder);
}
