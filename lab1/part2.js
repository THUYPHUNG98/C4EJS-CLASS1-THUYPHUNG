//bai 1
let myArr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back'
,'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color'
, 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let counts = {};

for (let i = 0; i < myArr.length; i++) {
    let num = myArr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(counts);
//bai 2
const inventory = [
        {
            name: 'Dell XPS 9370',
            price: 30000,
            brand: 'Dell',
            quantity: 1,
        },
        {
            name: 'Dell Inspiron 3567',
            price: 9300,
            brand: 'Dell',
            quantity: 12,
        },
        {
            name: 'Dell Latitude E5450',
            price: 8600,
            brand: 'Dell',
            quantity: 2,
        },
        {
            name: 'HP Envy 13aq',
            price: 21000,
            brand: 'HP',
            quantity: 5,
        },
        {
            name: 'HP Pavilion',
            brand: 'HP',
            price: 14000,
            quantity: 7,
        },
        {
            name: 'Asus Zenbook',
            brand: 'Asus',
            price: 20000,
            quantity: 4,
        },
    ];
//bai 3:
let inventoryByBrand = {};
for(let i = 0; i < inventory.length; i++) {
    let prop = inventory[i].brand.toLowerCase();
    if(inventoryByBrand[prop]) {
        inventoryByBrand[prop].push(inventory[i])
    } else {
        inventoryByBrand[prop] = [];
        inventoryByBrand[prop].push(inventory[i]);
    }
}
console.log(inventoryByBrand);
//bai 4 + 5 + 6 + 7:
let brand = prompt('Which brand?').toLowerCase();
if(inventoryByBrand[brand]) {
    let detail = '';
    let total = 0;
    for(let i = 0; i < inventoryByBrand[brand].length; i++) {
        detail += `\n${inventoryByBrand[brand][i].name}`;
        total += inventoryByBrand[brand][i].price * inventoryByBrand[brand][i].quantity * 1000;
    }
    alert(`There are ${inventoryByBrand[brand].length} generations of '${brand.toUpperCase()}' in inventory:
    ${detail}\n\nWith total value: ${total.toLocaleString()}VND`);
} else {
    alert(`There is no '${brand}' brand`);
}