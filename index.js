const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];



// #1 // 

/* 
Create a function called getNumberEntries that takes in one param - a purchase object.
This function should iterate through the object and return a new array of subarrays. 
Each subarray should include the key and the value from the object if the value is a 
number datatype. 
Do not use Object.keys, Object.values or other Object methods in your implementation.
*/

function getNumberEntries(object){
  var outer = [];
  for (var key in object) {
    if (typeof object[key] === "number") {
      outer.push([key, object[key]]);
    }
  }
  return outer;
}


// #2 // 
/*
Create a function called addKeyValuePairs that takes in two parameters - object and additions. 
object represents a purchase object; additions represents an array of subarrays, where each subarray 
is a key and a value to add to the input object. 
This function should add each subarray's key and value to the object and return the object.
*/

const addKeyValuePairs = (object, additions) => {
  for (var element of additions) {
    object[element[0]] = element[1];
  }
  return object;
};

// 3//

/*

Create a function called filterByPrice that takes in two parameters - array and price. 
array represents an an array of purchase objects; price is a number representing a price. 
This function should use the native filter method to return a new array of only the items in the 
input array whose prices are greater than the input price.
filterByPrice(purchases, 20); // => [ {Luxardo Gourmet Cocktail Cherries}, {Blood Pressure Monitor} ]

*/

const filterByPrice = (array, price) => {
  return array.filter(function(po){ return po.price > price;})
};


// 4 //
/*
Create a function called mapPurchases that takes in one parameter - array - which represents an array of 
purchase objects. This function should use the native map method to return a new array of strings where 
each string includes 
the product's title uppercased and the most recent review text.
// example output
mapPurchases(purchases);
// =>
[
  "ERGOFIT WIRED EARBUDS - Review: Great noise-cancelling feature.",
  "LG BLURAY PLAYER REPLACEMENT REMOTE CONTROL - Review: Package was damaged.",
  "MCCORMICK GRILL MATES CHIPOTLE PEPPER MARINADE (12 PK) - Review: The marinade packets were damaged.",
  "LUXARDO GOURMET COCKTAIL CHERRIES - Review: I use these all the time for parties.",
  "BLOOD PRESSURE MONITOR - Review: Matches my blood pressure at the doctor's office."
]
*/
const mapPurchases = (array) => {

  return array.map(function(x){return x.product.toUpperCase() + " - " + x.mostLikedReviews[0]["text"];})
};



// #5 //
/*

Create a function called accumulateString that takes in one pararemeter - array - 
which reprsesents an array of purchae objects. 

This function should use the native reduce 
method to iterate over the input array of purchases. At each iteration, it should use the 
purchase's quantity value 
to grab the corresponding word in the product description and add that to 
the output string it's accumulating. For instance, if the purchases quantity is 1, you should access 
the first word in the product description; if the purchases quantity is 2, you should access the second 
word in the product description.
// example
accumulateString(purchases); // => "WiredLGMatesLuxardoBlood"

*/
const accumulateString = (array) => {
  return array.reduce(function(po){
    var desc = po.product.split(" ");
    var num = po.quantity;
    return desc.splice(num - 1, 1);
  },"")
};


// #6 //

/*
Create a function called findProduct that takes in two parameters - array and product. 
array represents an array of purchase objects and product represents a string of a purchase's 
product description. This function should use recursion to iterate through the input array and search 
for the product. If a matching product is found, the function should return an array of the object's 
product description and the category. If no purchase is found matching the product description, return 
an array with null at the 0 and 1 indexes.
// example output
findProduct(purchases, "Blood Pressure Monitor"); // => ["Blood Pressure Monitor", "Medical Supplies and Equipment"];

// example output
findProduct(purchases, "Dr. Pepper Zero"); // => [null, null]

*/
const findProduct = (array, product, output=[]) => {
  
};



// #7 //
/*
Create a function called filterByReviewLength that takes in one parameter - array - which represents 
an array of purchase objects. This function should use the native filter method to return a new array of
 only 
the purchases that have a review whose length property is greater than 35.
*/
const filterByReviewLength = (array) => {

  return array.filter(function(po){
    if (po.mostLikedReviews[0]["text"].length > 35) {
      return po;
    }

  })
  
};







