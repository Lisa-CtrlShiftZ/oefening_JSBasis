const products = [
    {
        id: "TECH001",
        name: "Smartphone",
        category: "Electronics",
        price: 599.99,
        stock: 50,
        tags: ["mobile", "communication", "tech"],
        reviews: [
            { user: "Massimo", rating: 4.5, comment: "Great phone!" },
            { user: "Donald", rating: 4.8, comment: "The best features ever" }
        ]
    },
    // ... more products
];

// Tasks:
// 1. Create a function to add a new product
// 2. Implement a search function by category
// 3. Calculate average product rating
// 4. Find products with low stock (less than 10)
// 5. Create a discount function that applies 10% off to specific categories
// 6. Generate a report of top-rated products

//1
function addProduct(productId, productName, productCategory, productPrice, productStock, productTags, productReviews){
    const newProduct ={
        id: productId,
        name: productName,
        category: productCategory,
        price: productPrice,
        stock: productStock,
        tags: productTags,
        reviews: productReviews
    };

    products.push(newProduct);
}

addProduct("TECH002","Nintendo Switch","Gaming",299.99,10,["console","gaming"],[{user: "Jamie", rating: 4.9, comment: "best console ever!"}]);
console.log(products);

//2
function sortByCategory(products, productCategory){
    const productCategoryArray = products.filter((product) => product.category == productCategory);
    return productCategoryArray;
}

console.log(sortByCategory(products,'Gaming'));

//3
//uhhh

//4
function findLowStock(products){
    
    const lowStock = products.filter((product) => product.stock < 10);

    if (lowStock.length > 0) {
        return lowStock;
    } else {
        return "Everything is stocked";
    }
}

console.log(findLowStock(products))

//5
function applyDiscount(products, productCategory){

    const productCategoryArray = products.filter((product) => product.category == productCategory);
    
    productCategoryArray.forEach((product) => {
        const newPrice = product.price * 0.9;
        product.price = newPrice;
    });
}

//6 Generate a report of top-rated products
 
function generateReport(products){
    const topRatedArray = products.filter((product) => product.reviews.rating > 4.0);
    topRatedArray.forEach((review) => console.log(topRatedArray.reviews.comment))

 }

 // GPT OPLOSSING
//  function generateReport(products) {
//     const topRatedArray = products.filter((product) => {
//         // Assuming each product has an array of reviews, and you want to check the rating of the first review
//         return product.reviews && product.reviews.some((review) => review.rating > 4.0);
//     });

//     topRatedArray.forEach((product) => {
//         // Loop through reviews to find comments for those with a rating > 4.0
//         product.reviews.forEach((review) => {
//             if (review.rating > 4.0) {
//                 console.log(review.comment);
//             }
//         });
//     });
// }