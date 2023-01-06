// const searchResultInit = [
//     {
//         id: 1,
//         name: "iPhone 11 64GB",
//         img: "../images/products/listPhone/iphone-11.jpg",
//         price: 22990000,
//         oldPrice: 25990000,
//         cpu: "Apple A13 Bionic",
//         screen: "6.1 inch",
//         ram: "4 GB",
//         memory: "64 GB",
//     },
//     {
//         id: 2,
//         name: "Xiaomi Redmi 10 4GB-128GB 2021",
//         img: "../images/products/listPhone/xiaomi-redmi-10.jpg",
//         price: 3690000,
//         oldPrice: 4290000,
//         cpu: "MediaTek Helio G88",
//         screen: "6.5 inch",
//         ram: "4 GB",
//         memory: "128 GB",
//     },
// ]

// const searchResult = (state = searchResultInit, action) => {
//     switch (action.type) {

//         default:
//             return state;
//     }
// }

// export default searchResult;

const searchResultInit = "";


const searchResult = (state = searchResultInit, action) => {
    switch (action.type) {
        case "searchProduct":
            state = action.search.dataSearch;
            return state;
        default:
            return state;
    }
}

export default searchResult;