{

    interface Products<T> {
        name: string,
        price: number,
        isAvailable: boolean,
        offers:T
    }
    interface Offers {
        isDiscountAble: boolean,
        newPrice: number| null,
        offerDate: string | null,
        isAcceptOrder: boolean,
    }

    const oldProduct: Products<Offers> = {
        name: "Endeavour",
        price: 1500,
        isAvailable: false,
        offers: {
            isDiscountAble: false,
            newPrice: null,
            offerDate: null,
            isAcceptOrder: true,
        }
    }

    const newProduct: Products<Offers> = {
        name: "Surgery Part 1",
        price: 2500,
        isAvailable: true,
        offers: {
            isDiscountAble: true,
            newPrice: 1500,
            offerDate: "May to June",
            isAcceptOrder: false,
        }
    }
}