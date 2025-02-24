// Task 1 Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    };
    updateStock(quantity) {
        this.stock -= quantity;
    };
};
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"


//Task 2 Creating an Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = product.price * quantity
        this.product.updateStock(quantity);
    };
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`
    };
};

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
//Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"


//Task 3 Creating an Inventory Class
class Inventory {
    constructor(products) {
        this.products = [];
        //Task 4 Implementing Order Management
        this.orders = [];
    };
    addProduct(product) {
        this.products.push(product);
    };
    listProducts(){
        this.products.forEach(product => console.log(product.getDetails()));
    };
    // //Task 4 Implementing Order Management
    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const order = new Order(orderId, product, quantity); // new order
            this.orders.push(order);}
    };
    listOrders() {
        this.orders.forEach(order => {
            console.log(order.getOrderDetails());
        });
    };
    //Task 5 Implemented Product Restocking
    restockProduct(productId, quantity) {
        const product = this.products.find((prod) => prod.id === productId); // finds product
        product.stock += quantity;
    };
};

const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"


//Task 4 Implementing Order Management
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"


//Task 5 Implementing Product Restocking
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"